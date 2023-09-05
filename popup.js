const AddBtn = document.getElementById("Add");
const GoBtnLink = document.getElementById("GoBtnLink");
const GoBtn = document.getElementById("GoBtn");

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
});

  