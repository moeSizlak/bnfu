chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    'id': 1001,
    'priority': 1,
    'action': {
      'type': 'block'
    },
    'condition': {
	'regexFilter': '(buffalonews\.com.*paywall|buffalonews\.com\/metrics\/api\/|bntech\.io\/)',
      'resourceTypes': ["stylesheet", "script"]
    }
  }],
  removeRuleIds: [1001]
})