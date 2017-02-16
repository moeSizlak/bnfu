chrome.webRequest.onBeforeRequest.addListener(
  function() { return {cancel: true}; },
  {
    urls: ["*://*.buffalonews.com/*paywall*"],
    types: ["stylesheet", "script"]
  },
  ["blocking"]
);