let menuShow = false // This variable tracks whether the menu is currently open or closed

function openClose() {
  if (menuShow) {
    closeNav()
    menuShow = false
  } else {
    openNav()
    menuShow = true
  }
}

function openNav() {
  document.getElementById("mySidepanel").style.height = "250px";
  document.getElementById("mySidepanel").style.paddingTop = "60px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.height = "0px";
  document.getElementById("mySidepanel").style.paddingTop = "0px";
}

/*The scrollTop method is already existing, it is why it had not worked, but you can right a new method called scrolltop that will littarelly scroll up the entire page of the website */
function scrolltop() {
  window.scrollTo(0, 0);
};

//this fonction logs a message to the console whenever the menu is opened or closed, it does not affect the code but can be helpfull for debugging or monitoring purposes. 
function logMessage(message) {
  console.log(message);
}


