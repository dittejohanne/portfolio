
/*-------------------- active i navbar ---------------------*/

// Get the container element
var btnContainer = document.getElementById("nav1");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}

/*-------------------- Comparison Slider---------------------*/
initComparisons();

function initComparisons() {
  var x, i;
  /* Find all elements with an "overlay" class: */
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
     /* And released (for touch screens: */
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
/*-------------------- Fridge Buddy ---------------------*/

// Get the modal
var modalFridge = document.getElementById("fridgeBuddy");

// Get the button that opens the modal
var btnFridge = document.getElementById("btnFridge");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnFridge.onclick = function() {
  modalFridge.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalFridge.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFridge) {
    modalFridge.style.display = "none";
  }
}

/*-------------------- Hjem Is ---------------------*/

// Get the modal
var modalHjemIs = document.getElementById("hjemIs");

// Get the button that opens the modal
var btnHjemIs = document.getElementById("btnHjemIs");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btnHjemIs.onclick = function() {
  modalHjemIs.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalHjemIs.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHjemIs) {
    modalHjemIs.style.display = "none";
  }
}

/*-------------------- YouSee ---------------------*/

// Get the modal
var modalYousee = document.getElementById("yousee");

// Get the button that opens the modal
var btnYousee = document.getElementById("btnYousee");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btnYousee.onclick = function() {
  modalYousee.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalYousee.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalYousee) {
    modalYousee.style.display = "none";
  }
}

/*-------------------- Eriksminde ---------------------*/

// Get the modal
var modalEriksminde = document.getElementById("eriksminde");

// Get the button that opens the modal
var btnEriksminde = document.getElementById("btnEriksminde");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btnEriksminde.onclick = function() {
  modalEriksminde.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalEriksminde.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalEriksminde) {
    modalEriksminde.style.display = "none";
  }
}

/*-------------------- Havnebadet ---------------------*/

// Get the modal
var modalHavnebadet = document.getElementById("havnebadet");

// Get the button that opens the modal
var btnHavnebadet = document.getElementById("btnHavnebadet");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
btnHavnebadet.onclick = function() {
  modalHavnebadet.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalHavnebadet.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHavnebadet) {
    modalHavnebadet.style.display = "none";
  }
}

/*-------------------- Kunsthal Aarhus ---------------------*/

// Get the modal
var modalVinoriginalen = document.getElementById("vinoriginalen");

// Get the button that opens the modal
var btnVinoriginalen = document.getElementById("btnVinoriginalen");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[5];

// When the user clicks on the button, open the modal
btnVinoriginalen.onclick = function() {
  modalVinoriginalen.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalVinoriginalen.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalVinoriginalen) {
    modalVinoriginalen.style.display = "none";
  }
}


/*-------------------- Kunsthal Aarhus ---------------------*/

// Get the modal
var modalKunsthalAarhus = document.getElementById("kunsthalAarhus");

// Get the button that opens the modal
var btnKunsthalAarhus = document.getElementById("btnKunsthalAarhus");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[6];

// When the user clicks on the button, open the modal
btnKunsthalAarhus.onclick = function() {
  modalKunsthalAarhus.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalKunsthalAarhus.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalKunsthalAarhus) {
    modalKunsthalAarhus.style.display = "none";
  }
}

/*-------------------- Madmagasin ---------------------*/

// Get the modal
var modalMadmagasin = document.getElementById("madmagasin");

// Get the button that opens the modal
var btnMadmagasin = document.getElementById("btnMadmagasin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[7];

// When the user clicks on the button, open the modal
btnMadmagasin.onclick = function() {
  modalMadmagasin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalMadmagasin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalMadmagasin) {
    modalMadmagasin.style.display = "none";
  }
}

/*-------------------- Madmagasin blad ---------------------*/

// Get the modal
var modalBlad = document.getElementById("blad");

// Get the button that opens the modal
var btnBlad = document.getElementById("btnBlad");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[8];

// When the user clicks on the button, open the modal
btnBlad.onclick = function() {
  modalBlad.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBlad.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalBlad) {
    modalBlad.style.display = "none";
  }
}

// Tabs

// Fridge Buddy
function openDevice2(evt, deviceName) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
  document.getElementById(deviceName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();

// Hjemis
function openDevice(evt, deviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(deviceName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// yousee
function openDevice3(evt, deviceName) {
  var i, tabcontent3, tablinks3;
  tabcontent3 = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent3.length; i++) {
    tabcontent3[i].style.display = "none";
  }
  tablinks3 = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks3.length; i++) {
    tablinks3[i].className = tablinks3[i].className.replace(" active", "");
  }
  document.getElementById(deviceName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen3").click();

// Illustrationer
function openDevice5(evt, deviceName) {
  var i, tabcontent5, tablinks5;
  tabcontent5 = document.getElementsByClassName("tabcontent5");
  for (i = 0; i < tabcontent5.length; i++) {
    tabcontent5[i].style.display = "none";
  }
  tablinks5 = document.getElementsByClassName("tablinks5");
  for (i = 0; i < tablinks5.length; i++) {
    tablinks5[i].className = tablinks5[i].className.replace(" active", "");
  }
  document.getElementById(deviceName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen5").click();


// motion grafics
function openDevice4(evt, deviceName) {
  var i, tabcontent4, tablinks4;
  tabcontent4 = document.getElementsByClassName("tabcontent4");
  for (i = 0; i < tabcontent4.length; i++) {
    tabcontent4[i].style.display = "none";
  }
  tablinks4 = document.getElementsByClassName("tablinks4");
  for (i = 0; i < tablinks4.length; i++) {
    tablinks4[i].className = tablinks4[i].className.replace(" active", "");
  }
  document.getElementById(deviceName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen4").click();


