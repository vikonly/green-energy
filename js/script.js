    masthead = document.querySelector(".slider");
    slides = [
        "<h1>Welcome</p>",
        "<h1>To</p>",
        "<h1>My</p>",
        "<h1>Webpage</p>",
        "<h1>MidTerm</p>",
        "<h1>Assignment</p>"
    ];
    i = 0;
    masthead.innerHTML = slides[0];
    function runSlides() {
        masthead.style.opacity = 1;
        if (i > 5) {
            i = 0;
        }
        masthead.innerHTML = slides[i];
        i += 1;
    }
    window.setInterval(runSlides, 1000);
    
var buttons = document.querySelectorAll(".buttons li button img");
var text = document.querySelectorAll(".contents p");


buttons[0].addEventListener("click", handleClick, false);
buttons[1].addEventListener("click", handleClick, false);
buttons[2].addEventListener("click", handleClick, false); 



for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener("click", handleClick, false);
}

buttons[0].setAttribute("class", "active");
text[0].setAttribute("class", "active-content");

function handleClick(ev){
	for(var i=0; i<buttons.length; i++){
		if(ev.target === buttons[i]){
			buttons[i].setAttribute("class", "active");
			text[i].setAttribute("class", "active-content");
		} else {
			buttons[i].removeAttribute("class");
			text[i].removeAttribute("class");
		}
	} 
}