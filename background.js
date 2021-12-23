// background.js

// console.log(document.domain); 
chrome.tabs.query({ 
    "active": true,
    "currentWindow": true,
    "status": "complete",
    "windowType": "normal"
}, function (tabs) {
    for (tab in tabs) {
        console.log(tabs[tab].url);
    }
});