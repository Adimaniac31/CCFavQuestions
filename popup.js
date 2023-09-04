document.addEventListener("DOMContentLoaded", function () {
    const AddBtn = document.getElementById("Add");
    const GoBtnLink = document.getElementById("GoBtnLink");
  
    AddBtn.addEventListener("click", function () {
      // Get the link from the popup's URL
      const link = window.location.href;
  
      // Store the link in local storage
      chrome.storage.local.set({ "copiedLink": link }, function () {
        // Set the "Go" button's href and enable it
        GoBtnLink.href = link;
        GoBtnLink.removeAttribute("disabled");
      });
    });
  });
  