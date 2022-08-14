(()=>{
  const themeSotrageKey = "theme-preference"
  let mediaQueryExpersion = '(prefers-color-scheme: dark)'

  function getThemePreference() {
    return localStorage.getItem(themeSotrageKey) || 'preference'
  }

  function setThemePreference(preference) {
    localStorage.setItem(themeSotrageKey, preference)
  }

  function getBrowserPreference() {
    return window.matchMedia(mediaQueryExpersion).matches ? 'dark' : 'light'
  }

  // 应用颜色主题
  function reflectPreference() {
    // 用户选择
    let preference = getThemePreference()

    // 自动检测
    if (preference === 'preference') {
      preference = getBrowserPreference()
    }

    document.documentElement.dataset.theme = preference
  }

  function initThemePreferenceTool() {
    let tool = document.getElementById('theme-preference-tool')
    let btns = tool.querySelectorAll('.theme-btn')

    let cleanActive = () => {
      btns.forEach((node) => { node.classList.remove('active') })
    }

    let preference = getThemePreference()
    btns.forEach((node) => {
      node.addEventListener('click', () => {
        cleanActive()
        node.classList.add('active')

        setThemePreference(node.dataset.theme)
        reflectPreference()
      })

      // 设置 active
      if (preference === node.dataset.theme) {
        node.classList.add('active')
      }
    })
  }

  window.addEventListener('load', () => {
    reflectPreference()
    initThemePreferenceTool()

    window.matchMedia(mediaQueryExpersion).addEventListener('change', () => {
      reflectPreference()
    })
  })
})()
