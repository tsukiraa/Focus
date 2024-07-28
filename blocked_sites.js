setTimeout(function() {
    var a = document.getElementsByTagName("a")
console.log(a.length)
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element.href)
    element.href ="https://www.google.com/" ;
}

  }, 10000); 
  let url = document.URL
  setInterval(displayHello, 5000);

  function displayHello() {
    console.log(url)
    console.log(document.URL)
    if(url != document.URL){
        window.location.replace("https://www.google.com/");
    }
  }

