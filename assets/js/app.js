document.addEventListener('DOMContentLoaded', () => {
  initializeStarterPage()
})

function createKrispyKristmasLogo () {
  const container = document.createElement('div')
  container.classList.add('kkLogo')
  return container
}

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
  document.querySelector('body').appendChild(createKrispyKristmasLogo())
  document.querySelector('body').appendChild(createNextPageButton('category'))
  goToPageEventListener()
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
  lights()
  const interval = setInterval(() => {
    lights()
  }, timerInterval)
}

function forEachElements (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]) // passes back stuff we need
  }
}

function createBannerButton (text, value) {
  const container = document.createElement('button')
  container.classList.add('buttonBannerContainer')
  container.innerText = text
  container.value = value
  return container
}

function resetPage () {
  document.querySelector('body').innerHTML = ''
}

function goToPageEventListener () {
  const buttons = document.querySelectorAll('.buttonBannerContainer, .nextPageButton')
  forEachElements(buttons, function (index, value) {
    value.addEventListener('click', (el) => {
      switch (el.target.value) {
        case 'category':
          resetPage()
          initializeCategoryPage()
          break
        case 'selfmade':
          resetPage()
          initializeSelfmadePage()
          break
        case 'bought':
          resetPage()
          initializeBoughtPage()
          break
        case 'events':
          resetPage()
          initializeEventsPage()
          break
        default:
          break
      }
    })
  })
}

function initializeSelfmadePage () {
  document.querySelector('body').appendChild(createHeader('Self-Made'))
  console.log('Hello Category')
  goToPageEventListener()
}

function initializeBoughtPage () {
  document.querySelector('body').appendChild(createHeader('Bought'))
  console.log('Hello Category')
  goToPageEventListener()
}

function initializeEventsPage () {
  document.querySelector('body').appendChild(createHeader('Events'))
  console.log('Hello Category')
  goToPageEventListener()
}

function initializeCategoryPage () {
  document.querySelector('body').appendChild(createHeader('Categories'))
  document.querySelector('body').appendChild(createFairyLights(5))
  document.querySelector('body').appendChild(createBannerButton('Self-Made', 'selfmade'))
  document.querySelector('body').appendChild(createBannerButton('Bought', 'bought'))
  document.querySelector('body').appendChild(createBannerButton('Events', 'events'))
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
