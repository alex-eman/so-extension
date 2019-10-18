console.log("Hello from content.js");

var index = 0;
//var question = document.getElementById("question-header");
var answers = document.getElementsByClassName("answer");
//console.log(question);
console.log(answers);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendRespose){
        console.log(request);

        if(request.command == "toggle-feature-question"){
            //console.log("question");
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            //document.body.scrollTop = document.documentElement.scrollTop = 0;
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

function el_offset(element){

    var rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function scrollToAnswer(element){

    var offset = el_offset(element);
    
    window.scrollTo({
        top: offset.top - 55,
        behavior: "smooth"
    });

}