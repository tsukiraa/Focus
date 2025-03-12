let url = document.URL

if(url != document.URL){
    window.location.replace("https://www.google.com/");
}
var a= document.getElementsByTagName("shreddit-feed")
for (let i = 0; i < a.length; i++) {
a[i].remove()
}


