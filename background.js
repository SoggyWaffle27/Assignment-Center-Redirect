const redirectRules = [
  {
    from: "https://friendsbalt.myschoolapp.com/lms-assignment/assignment-center/student",
    to: "https://friendsbalt.myschoolapp.com/app/student#studentmyday/assignment-center"
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
}, { url: [{ hostContains: "myschoolapp.com" }] });
