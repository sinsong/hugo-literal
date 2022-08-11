(()=>{
  let article = document.querySelector('article')

  let meter = document.querySelector('.meter')
  let cursor = document.querySelector('.cursor')
  let upbound = document.querySelector('.upbound')
  let lobound = document.querySelector('.lobound')

  if (article === null) {
    return
  }

  let handleViewport = () => {
    let rect = article.getBoundingClientRect()
    let article_normalizer = article.clientHeight

    let viewTop = (- rect.top) / article_normalizer
    let viewBottom = 1 - ((rect.bottom - visualViewport.height) / article_normalizer)
    
    upbound.textContent = viewTop > 0 ? `${Math.round(viewTop * 100)}%` : 'outb'
    lobound.textContent = viewBottom < 1 ? `${Math.round(viewBottom * 100)}%` : 'outb'

    let setLeft = Math.round(meter.clientWidth * viewTop)
    let setWidth = Math.round(meter.clientWidth *(viewBottom - viewTop))
    cursor.style.left = `${setLeft}px`
    cursor.style.width = `${setWidth}px`
  }

  handleViewport()
  window.addEventListener('scroll', handleViewport)
})()
