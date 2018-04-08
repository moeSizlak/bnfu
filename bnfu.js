chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["*://*.buffalonews.com/*paywall*", "*://*.buffalonews.com/metrics/api/*", "*://*.bntech.io/*" ],
    types: ["stylesheet", "script"]
  },
  ["blocking"]
);
