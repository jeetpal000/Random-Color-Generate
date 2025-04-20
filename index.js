let container = document.querySelector(".container");
let input = document.getElementById("input");
let button = document.getElementById("btn");

// input.value="10";
button.addEventListener('click', ()=>{
    container.innerHTML = "";
    let number = Number(input.value);
    for(let i = 1; i <= number; i++){
        let div = document.createElement("div");  
        div.classList.add("color_container");  
        container.appendChild(div);
    }
    generateColor();
    input.value="";
});





function generateColor(){
    let colorContainerDiv = document.querySelectorAll(".color_container");

    
    colorContainerDiv.forEach((element)=>{
        let newColor = "#"+ randomColor();
        // let newColor = randomColor();
        element.style.background = newColor;
        element.innerText = newColor;

        /**Copied Text of hexcode */
        element.addEventListener("click", () => {
            let textToCopy = element.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                element.innerText = 'Copied!.🥳'
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });
        
    });
}


/*** Hex Code */
function randomColor(){
    let letters = '0123456789ABCDEF';
    let colorCodeLength = 6;
    let colorCode = "";
    for(let i = 0; i < colorCodeLength; i++){
        let randomNumber = Math.floor(Math.random()*letters.length);
       
        
        colorCode += letters.substring(randomNumber, randomNumber+1);
    }
    return colorCode;
}



/**RGBA color */

// function randomColor(){
//     return `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
// }