
  //https://i.ytimg.com/vi/Xal3RTspi9Y/hqdefault_live.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD1w0lP1Et9dQChYStiuOoCGVHZPA
  let url = document.URL
  setInterval(deleteAnything, 500);

  function deleteAnything() {
    if(url != document.URL){
        window.location.replace("https://www.google.com/");
    }
    var a = document.getElementsByTagName("a")
    console.log(a.length)
    for (let i = 0; i < a.length; i++) {
        a[i].remove()
    }
  }

