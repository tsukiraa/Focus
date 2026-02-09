let url = document.URL
setInterval(dontMove, 500);
function dontMove(){
    if(url != document.URL){
        window.location.replace("https://www.google.com/");
    }
}


