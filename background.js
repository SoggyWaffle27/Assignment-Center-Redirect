chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {
        redirectUrl: "https://friendsbalt.myschoolapp.com/app/student#studentmyday/assignment-center"
      };
    },
    {
      urls: ["*://friendsbalt.myschoolapp.com/lms-assignment/assignment-center/student?svcid=edu&envid=p-fb7Rgs_b3kmTdxtoxTUV1w"]
    },
    ["blocking"]
  );
  