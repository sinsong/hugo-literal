function ViewPort() {
  let viewport = document.querySelector('.viewport')
  if (viewport === null) {
    console.warn('[viewport]: `.viewport` not found')
    return
  }
  viewport.childNodes.forEach((node) => {
    if (node instanceof Text) {
      return
    }
    node.remove()
  })

  // build dom

  let label = document.createElement('div')
  label.classList.add('labels')
  let meter = document.createElement('div')
  meter.classList.add('meter')

  // label
  let upbound = document.createElement('span')
  upbound.classList.add('upbound')
  upbound.textContent = ' '
  label.appendChild(upbound)
  let lobound = document.createElement('span')
  lobound.classList.add('lobound')
  lobound.textContent = ' '
  label.appendChild(lobound)

  // meter
  let cursor = document.createElement('div')
  cursor.classList.add('cursor')
  meter.appendChild(cursor)

  viewport.appendChild(label)
  viewport.appendChild(meter)

  // sensor
  let article = document.querySelector('article')
  let handleViewport = () => {
    let rect = article.getBoundingClientRect()
    let article_normalizer = article.clientHeight

    let viewTop = (- rect.top) / article_normalizer
    let viewBottom = 1 - ((rect.bottom - visualViewport.height) / article_normalizer)
    
    upbound.textContent = viewTop > 0 ? `${Math.round(viewTop * 100)}%` : 'outbound'
    lobound.textContent = viewBottom < 1 ? `${Math.round(viewBottom * 100)}%` : 'outbound'

    let setLeft = Math.round(meter.clientWidth * viewTop)
    let setWidth = Math.round(meter.clientWidth *(viewBottom - viewTop))
    cursor.style.left = `${setLeft}px`
    cursor.style.width = `${setWidth}px`
  }

  handleViewport()
  window.addEventListener('scroll', handleViewport)
}
