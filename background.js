
// Send entered command to content.js
chrome.commands.onCommand.addListener(function(command) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {command: command}, function(response){
            // Need this in order to quiet "The message port closed before a response was received."
            return true;
        });
    });

  });