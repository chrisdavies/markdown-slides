chrome.pageAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { message: 'make-slideshow' });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (~(tab.url || '').indexOf('.md')) {
    chrome.pageAction.show(tabId);
  }
});
