document.addEventListener('DOMContentLoaded', () => {
  initializeStarterPage()
})

function initializeStarterPage (params) {
  console.log('Initialized Starter Page')
  document.querySelector('body').appendChild(createInputBanner(['Dog', 'Your Mom']))
  document.querySelector('body').appendChild(createNextPageButton('hello'))
}

function createInputBanner (options) {
  const container = document.createElement('div')
  const select = document.createElement('select')
  select.classList.add('selectBanner')
  for (const option of options) {
    const selectOption = document.createElement('option')
    selectOption.value = option
    selectOption.innerText = option
    select.appendChild(selectOption)
  }
  container.classList.add('selectBannerContainer')
  container.append(select)
  return container
}

function createNextPageButton (nextPage) {
  const container = document.createElement('button')
  container.classList.add('nextPageButton')
  container.href = nextPage
  return container
}

function getSessionStorageParameter (key) {
  return window.sessionStorage.getItem(key)
}

function setSessionStorageParameter (key, value) {
  return window.sessionStorage.setItem(key, value)
}
