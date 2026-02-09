  let url = document.URL
  setInterval(deleteAnything, 500);

  function deleteAnything() {
    var a = document.getElementsByClassName("page-container--recommended")
    var b = document.getElementsByClassName("category__links-container")
    var c = document.getElementsByClassName("ribbon-wrapper")
    var d = document.getElementsByClassName("origin-tag")
    console.log(a.length)
    for (let i = 0; i < a.length; i++) {
        a[i].remove()
        b[i].remove()
        c[i].remove()//god i hate this
        d[i].remove()
    }
  }