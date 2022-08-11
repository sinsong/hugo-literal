(()=>{
  let hugoToc = document.getElementById('TableOfContents')
  if (hugoToc === null) {
    return
  }

  console.log(hugoToc.childNodes.length);
  if (hugoToc.childNodes.length == 0) {
    document.querySelector('.toc').remove()
  }
})()