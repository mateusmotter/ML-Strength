const hamburger = document.getElementById("hamburger");
const nav = document.getElementById('navigation');
const mainPicture = document.getElementById('main_picture');

const help = document.getElementById('help');
const youTube = document.getElementById('youtube');

hamburger.onmouseover = () => {
    nav.style.display = "block";
}

nav.onmouseover = () => {
	nav.style.display = "block";
}

nav.onmouseout = () => {
    nav.style.display = "none";
} 

// event listener to close nav menu on mobile version

window.addEventListener('click', function(e){
	if (hamburger.contains(e.target)) {
        return;
  } else {
    console.log('clicked outside');
    if (nav.style.display === "block") {
        nav.style.display = "none";
    }
  }
})

//Form help video

help.onmouseover = () => {
    youTube.style.display = "block";
    youTube.style.position = "absolute";
}

help.onmouseout = () => {
    youTube.style.display = "none";
}
