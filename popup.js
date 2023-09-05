const AddBtn = document.getElementById("Add");
const GoBtnLink = document.getElementById("GoBtnLink");
const GoBtn = document.getElementById("GoBtn");

AddBtn.addEventListener('click',function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        GoBtnLink.href=(tabs[0].url);
    });
});


  