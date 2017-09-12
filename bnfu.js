chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["*://*.buffalonews.com/*paywall*", "*://*.buffalonews.com/metrics/api/*"],
    types: ["stylesheet", "script"]
  },
  ["blocking"]
);
