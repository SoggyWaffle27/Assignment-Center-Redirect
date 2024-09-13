const redirectRules = [
  {
    from: "https://example.com/old-page",
    to: "https://example.com/new-page"
  }
];

chrome.webNavigation.onCommitted.addListener((details) => {
  for (const rule of redirectRules) {
    if (details.url === rule.from) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: () => window.location.replace(rule.to)
      });
    }
  }
}, { url: [{ hostContains: "example.com" }] });
