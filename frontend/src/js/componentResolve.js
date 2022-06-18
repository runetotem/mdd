function init() {
  
  // loadOnce('/partials/header.html', 'header.header')
  // loadOnce('/partials/footer.html', 'footer.footer')
  // concatOnce('/partials/head.html', 'head')

}

function loadOnce(filepath, selector) {
  fetch(filepath)
    .then(response => response.text())
    .then(data => { document.querySelector(selector).innerHTML = data })
}

function concatOnce(filepath, selector) {
  fetch(filepath)
    .then(response => response.text())
    .then(data => { 
      console.log(data); document.querySelector(selector).innerHTML += data })
}

function loadComponents(filepath, selector) {
  fetch(filepath)
    .then(response => response.text())
    .then(data => {
      document.querySelectorAll(selector).forEach(el => el.innerHTML = data)
    })
}


export { init, loadOnce, loadComponents, } 