const AddBtn = document.getElementById("Add");
const GoBtn = document.getElementById("GoBtn");
const GoBtnLink = document.getElementById("GoBtnLink");

AddBtn.addEventListener("click",function(){
    chrome.scripting.executeScript({
        target: {tabId: tabID},
        function: () => {
            const link = window.location.href;
            chrome.storage.local.set({"copiedLink": link}, function(){
            GoBtnLink.href = link;
            GoBtnLink.removeAttribute("disabled");
            });
        },
    });
})