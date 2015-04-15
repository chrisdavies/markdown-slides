(function () {

  function makeSlideshow() {
    // Chrome wraps raw text content in a pre
    var pre = document.querySelector('pre');

    if (pre) {
      var url = document.location.pathname;
      var fileName = url.split('/').slice(-1)[0];
      var win = window.open('', fileName, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=' + (screen.width) + ', height=' + (screen.height) + ', top=0, left=0');
      win.document.write('<html>' +
        '<head><title>' + fileName + '</title></head><body>' +
        '<link rel="stylesheet" href="' + document.location.href.replace('.md', '.css') + '">' +
        '<pre id="source">' + pre.innerHTML + '</pre>' +
        '<script src="' + chrome.extension.getURL('js/remark.js') + '"></script>' +
        '<script>var slideshow = remark.create();</script>' +
        '</body></html>');
    }
  }

  function isMarkdown(sendResponse) {
    // If there is no title element, we're looking at a raw
    // file... It's a hack, but it's pretty effective.
    var result = !document.getElementsByTagName('title').length;

    sendResponse({ isMarkdown: result });
  }

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'make-slideshow') {
      makeSlideshow();
    } else if (request.message === 'is-markdown') {
      isMarkdown(sendResponse);
    }
  });

})();
