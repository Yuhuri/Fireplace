//if document.getElementsByClassName.onclick("pageflip") == true {
    
//}

//document.getElementByClassName("pageflip").animate([
//    {transform: 'translateX(0) translateY(0) rotateY(0)'},
//     {transform: 'translateX(70px) translateY(0) rotateY(180deg)'}
// ], 
// [{
//     duration: 2000,
//     iterations: Infinity
// }]);

const button = document.querySelector("body > div.escolha > a:nth-child(1) > button");
console.log(button) 

button.onclick = buttonpage;
function buttonpage(){
    const paragrafo = document.querySelector("body > div.page > p");

    paragrafo.className += " textfade" 
    setTimeout(() => {
        paragrafo.innerHTML = "new text" 
        paragrafo.className = "text"   
    }, 200);

}; 


var pages = []
