  let url = document.URL
  setInterval(deleteAnything, 500);

  function deleteAnything() {
    var a = document.getElementsByClassName("page-container--recommended")
    console.log(a.length)
    for (let i = 0; i < a.length; i++) {
        a[i].remove()
    }
  }