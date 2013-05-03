
function post () {
  if (window.analytics && window.analytics.identify && window.analytics.track) {
    window.postMessage({ found : true }, "*");
  }
}


window.addEventListener("message", function (event) {
  if (event.data.found) {
    chrome.extension.sendMessage({}, function() {});
  }
}, false);

var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + post + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);