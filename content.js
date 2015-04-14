chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  function injectScript(path) {
    var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = chrome.extension.getURL(path);
    document.body.appendChild(script);
    return script;
  }

  if (request.message == 'make-slideshow') {
    // Chrome wraps raw text content in a pre
    var pre = document.querySelector('pre');

    if (pre) {
      pre.id = 'source';

      injectScript('js/remark.js').onload = function () {
        injectScript('js/slides.js');
      };
    }
  }
});
