var s = document.createElement("script");
s.src = chrome.runtime.getURL("or.js");
//s.setAttribute("async", false);
s.async = false;
(document.head||document.documentElement).appendChild(s);
