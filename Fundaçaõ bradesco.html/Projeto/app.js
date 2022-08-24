'use strict'
const switcher = document.querySelector('.bnt')

switcher.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme')
  var className = document.body.className

  if (className == 'light-theme') {
    this.testContent = 'dark'
  } else {
    this.textContent = 'light'
  }
  console.log('current class name:' + className)
})
