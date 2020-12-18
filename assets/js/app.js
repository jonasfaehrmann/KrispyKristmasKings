document.addEventListener('DOMContentLoaded', () => {
  initializeStarterPage()
  goToPageEventListener()
})

function createFairyLights (quantity) {
  const container = document.createElement('div')
  container.classList.add('fairyLightsContainer')
  const div = document.createElement('div')
  for (let index = 0; index < quantity; index++) {
    const fairyLight = document.createElement('div')
    div.appendChild(fairyLight)
  }
  container.appendChild(div)
  return container
}

function initializeStarterPage () {
  document.querySelector('body').appendChild(createHeader('Start'))
  document.querySelector('body').appendChild(createFairyLights(5))
  initializeFairyLights()
  document.querySelector('body').appendChild(createNextPageButton('person'))
}

function initializeFairyLights () {
  var colors = [
    '#00FFFF', // cyan
    '#001eff', // blue
    '#FF0099', // pink
    '#FF6600', // orange
    '#9D00FF', // purple
    '#FFFF00', // yellow
    '#ee0000' // red
  ]
  var timerInterval = 5000 // Changes all interval timings
  var lights = function () {
    const fairyLights = document.querySelectorAll('.fairyLightsContainer>div>div')
    forEachElements(fairyLights, function (index, value) {
      const i = Math.floor(Math.random() * colors.length)
      value.style.backgroundColor = colors[i]
      value.style.boxShadow = `0px 0px 15px ${colors[i]}`
    })
  }
  const interval = setInterval(() => {
    lights()
  }, timerInterval)
}

function forEachElements (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]) // passes back stuff we need
  }
}

function resetPage () {
  document.querySelector('body').innerHTML = ''
}

function goToPageEventListener () {
  document.querySelector('.nextPageButton').addEventListener('click', (el) => {
    resetPage()
    switch (el.target.value) {
      case 'category':
        initializeCategoryPage()
        break
      case 'person':
        initializePersonPage()
        break
      default:
        break
    }
  })
}

function initializeCategoryPage (params) {
  document.querySelector('body').appendChild(createHeader('Category'))
  console.log('Hello Category')
}

function initializePersonPage (params) {
  document.querySelector('body').appendChild(createHeader('Person'))
  document.querySelector('body').appendChild(createInputBanner(['Dog', 'Your Mom']))
  document.querySelector('body').appendChild(createInputBanner(['Dog', 'Your Mom']))
  document.querySelector('body').appendChild(createInputBanner(['Dog', 'Your Mom']))
  document.querySelector('body').appendChild(createNextPageButton('category'))
  goToPageEventListener()
}

function createHeader (headerText) {
  const container = document.createElement('div')
  container.classList.add('headerText')
  container.innerText = headerText
  return container
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
  container.value = nextPage
  return container
}

function getSessionStorageParameter (key) {
  return window.sessionStorage.getItem(key)
}

function setSessionStorageParameter (key, value) {
  return window.sessionStorage.setItem(key, value)
}
