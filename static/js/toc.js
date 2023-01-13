'use strict';
(()=>{
  let hugoToc = document.getElementById('TableOfContents')
  if (hugoToc === null) {
    return
  }

  if (hugoToc.childNodes.length == 0) {
    document.querySelector('.toc').remove()
  }
})()
