
var index = 0;
var answers = document.getElementsByClassName("answer");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendRespose){

        if(request.command == "toggle-feature-question"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            index = 0;
        }

        if(request.command == "toggle-feature-answer"){
            console.log("index: " + index);
            if(index >= answers.length){
                index = 0;
            }
            scrollToAnswer(answers[index]);
            index++;
        }

        // Need this in order to quiet "The message port closed before a response was received."
        sendRespose({});

    });

// Get the offset of the given element in the context
// of the entire document
function getOffset(element){

    var rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

}

function scrollToAnswer(element){

    var offset = getOffset(element);
    
    // -55 is used so the scroll encapsulates
    // the entire answer nicely
    window.scrollTo({
        top: offset.top - 55,
        behavior: "smooth"
    });

}