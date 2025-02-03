
let i = 0;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("this-navigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("this-navigation").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Prints out the string "I am Zoe" in a typewriter fashion in the html element with id "type-writer"
 * @function typewriter
 * @param {void} none
 * @returns {void}
 */
/******  53bdba60-b03e-448c-96e8-56967bb4d09d  *******/
function typewriter() {
    const txt = "I am Zoe";
    const speed = 50;
    if(i<txt.length){
        document.getElementById("type-writer").innerHTML+= txt.charAt(i);    
        i++;    
        setTimeout(typewriter, speed);
    }
}


document.addEventListener('DOMContentLoaded', function() {
    typewriter();
});