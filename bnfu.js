chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["*://*.buffalonews.com/*paywall*", "*://*.buffalonews.com/metrics/api/*", "*://*.bntech.io/*paywall*", "*://*.bntech.io/metrics/api/*", "*://*.bntech.io/metrics/v2/*", "*://*.bntech.io/metrics/v2/js/*"],
    types: ["stylesheet", "script"]
  },
  ["blocking"]
);
