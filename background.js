function viewAsSlideshow(tab) {
  chrome.tabs.sendMessage(tab.id, { message: 'make-slideshow' });
}

chrome.pageAction.onClicked.addListener(viewAsSlideshow);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (~(tab.url || '').indexOf('.md')) {
    chrome.tabs.sendMessage(tab.id, { message: 'is-markdown' }, function (response) {
      response && response.isMarkdown && chrome.pageAction.show(tabId);
    });
  }
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'view-as-slideshow') {
    chrome.tabs.getSelected(viewAsSlideshow);
  }
});
