//opening and closing by time
var myClosed = document.getElementById("closed");
var myOpen = document.getElementById("open");
function doAnything(myTime){
    myTime = new Date().toLocaleTimeString([] , {hour: "numeric"} , {hour12: false}); 
    myHour = parseInt(myTime.substring(0,2));   
    if(myHour > 10 && myHour < 22){
        myClosed.style.display = "none";
        myOpen.style.display = "block";
    }
    else{
        myClosed.style.display = "block";
        myOpen.style.display = "none";
    }
};
doAnything();
//Get the button
var mybutton = document.getElementById("ScrollToTopBtn");

//button appearance and disappearance
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// after click button its srcoll page to top
function topFunction() {
    window.scroll({
        left:0,
        top:0,
        behavior:"smooth"});
}

function FunAboutUsBtn() {
    window.scroll({
        left:0,
        top:1980,
        behavior:"smooth"}); // Scroll to About us pannel
}

function FunContacts() {
    window.scroll({
        left:0,
        top:2800,
        behavior:"smooth"}); // Scroll to Contacts pannel
}
function FunMenuBtn() {
    window.scroll({
        left:0,
        top:650,
        behavior:"smooth"}); // Scroll to Menu button
}

/*change language*/ 
function changeLang(lang) {
        lengthObj = Object.getOwnPropertyNames(lang).length;
            for (var i = 0; i <= lengthObj - 1; i++) {
                objKey = Object.getOwnPropertyNames(lang)[i];
                console.log(objKey);
                document.getElementById(objKey).innerText = func(objKey);
            }

function func(_objKey) {
    for (key in lang) {
        if (key == _objKey) {
            return (lang[key]);
        }
    }
    }
}


