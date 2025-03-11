let url = document.URL
setInterval(displayHello, 500);
function displayHello() {
    if(url != document.URL || url == "https://www.reddit.com/?feed=home" || "https://www.reddit.com/r/*"){
        window.location.replace("https://www.google.com/");
    }
}

