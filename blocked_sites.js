
  //https://i.ytimg.com/vi/Xal3RTspi9Y/hqdefault_live.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1w0lP1Et9dQChYStiuOoCGVHZPA
  let url = document.URL
  setInterval(displayHello, 1000);

  function displayHello() {
    if(url != document.URL){
        window.location.replace("https://www.google.com/");
    }
    var a = document.getElementsByTagName("a")
    console.log(a.length)
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        element.href ="https://www.google.com/" ;
        var ch = element.children
        for (let i = 0; i < ch.length; i++) {
          if(ch[i].tagName == "H3"){
            ch[i].children[1].title = "Blocked by Focus."
            ch[i].children[1].ariaLabel = "Blocked by Focus."
            ch[i].children[1].textContent = "Blocked by Focus."
          }
        }
        var b= document.getElementsByTagName("img")
        for (let i = 0; i < b.length; i++) {
        a[i].remove()
        }
    }
  }

