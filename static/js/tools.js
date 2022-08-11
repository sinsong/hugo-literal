(()=>{
  let btn = document.getElementById('top-tool')
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

  /** @type {HTMLDivElement} */
  let container = document.getElementById('main-container')
  
  window.addEventListener('scroll', () => {
    // let pos = document.documentElement.scrollTop // 页面滚动
    let { top } = container.getBoundingClientRect()
    if (top < 0) {
      btn.style.visibility = 'visible'
    }
    else {
      btn.style.visibility = 'hidden'
    }
  })
})()
