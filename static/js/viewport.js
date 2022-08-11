(()=>{
  // let article = document.querySelector('article')
  let article = null

  let meter = null
  let cursor = null
  let upbound = null
  let lobound = null

  // if (article === null) {
  //   return
  // }

  let getMeter = () => {
    meter = document.querySelector('.viewport .meter')
    cursor = document.querySelector('.viewport .cursor')
    upbound = document.querySelector('.viewport .upbound')
    lobound = document.querySelector('.viewport .lobound')
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

  window.LiteralViewPort = {
    init: () => {
      article = document.querySelector('article')

      if (article === null) {
        return
      }
      getMeter()
      handleViewport()
      window.addEventListener('scroll', handleViewport)
    },
    fini: () => {
      window.removeEventListener('scroll', handleViewport)
    }
  }

  // handleViewport()
  // window.addEventListener('scroll', handleViewport)
})()
