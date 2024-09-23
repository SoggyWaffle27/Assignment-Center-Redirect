const siteA = "https://www.siteA.com/*"; // Change this to the URL you want to redirect from
const siteB = "https://www.siteB.com"; // Change this to the URL you want to redirect to

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Check if the request URL matches Site A
    if (details.url.match(/^https?:\/\/www\.siteA\.com/)) {
      // Redirect to Site B
      return { redirectUrl: siteB };
    }
  },
  { urls: [siteA] },
  ["blocking"]
);
