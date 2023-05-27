import data from './module/data.js'
import iPhoneArr from './module/dataiphone.js'
import iMacArr from './module/iMacData.js'


let container = document.querySelector('.container')
let iPhone = document.querySelector('.iphone')
let iMac = document.querySelector('.imac')


function reload(arr) {
  for (const item of arr) {
    let cardBox = document.createElement('div')
    let topRow = document.createElement('div')
    let topRowH2 = document.createElement('h2')
    let topRowBurger = document.createElement('div')
    for (const item of [1, 2, 3]) {
      let span = document.createElement('span')

      span.classList.add('burger')

      topRowBurger.append(span)
    }
    let deadline = document.createElement('div')
    let bottomRow = document.createElement('div')
    let bottomRowImg = document.createElement('img')
    let bottomRowId = document.createElement('div')
    let bottomRowData = document.createElement('div')

    cardBox.classList.add('card-box')
    topRow.classList.add('row')
    topRowH2.classList.add('title')
    topRowBurger.classList.add('top-burger')
    deadline.classList.add('deadline')
    bottomRow.classList.add('row')
    bottomRowImg.classList.add('img')
    bottomRowId.classList.add('user-id')
    bottomRowData.classList.add('data')

    topRowH2.innerHTML = item.title
    deadline.innerHTML = 'Deadline: ' + `<b>${item.deadline}</b>`
    bottomRowImg.src = './img/box/' + item.author.img + '.png'
    bottomRowId.innerHTML = 'ID' + item.author.id
    bottomRowData.innerHTML = item.deadline


    topRow.append(topRowH2, topRowBurger)
    bottomRow.append(bottomRowImg, bottomRowId, bottomRowData)
    cardBox.append(
      topRow,
      deadline,
      bottomRow
    )
    container.append(cardBox)
  }
}
reload(data)

function iPhoneFunction(arr) {
  let wrapper = document.createElement('div')
  for (const item of arr) {
    let iPhoneBox = document.createElement('div')
    let iPhoneInfo = document.createElement('div')
    let iPhoneBoxPreTitle = document.createElement('div')
    let iPhoneBoxTitle = document.createElement('div')
    let iPhoneBoxDesc = document.createElement('div')
    let iPhoneBoxImg = document.createElement('img')

    iPhoneBox.classList.add('iphone-box')
    wrapper.classList.add('wrapper')
    iPhoneInfo.classList.add('iphone-info')
    iPhoneBoxPreTitle.classList.add('iphone-box__pre-title')
    iPhoneBoxTitle.classList.add('iphone-box__title')
    iPhoneBoxDesc.classList.add('iphone-box__desc')
    iPhoneBoxImg.classList.add('iphone-box__img')

    iPhoneBoxPreTitle.innerHTML = item.preTitle
    iPhoneBoxTitle.innerHTML = item.title
    iPhoneBoxDesc.innerHTML = item.description
    iPhoneBoxImg.src = './img/iPhone/' + item.img + '.jpg'

    iPhoneInfo.append(
      iPhoneBoxPreTitle,
      iPhoneBoxTitle,
      iPhoneBoxDesc)
    iPhoneBox.append(
      iPhoneInfo,
      iPhoneBoxImg
    )
    wrapper.append(iPhoneBox)
    iPhone.append(wrapper)
  }
}
iPhoneFunction(iPhoneArr)

function iMacFunction(arr) {
  for (const item of arr) {
    // Content
    let productBox = document.createElement('div')
    let productBoxContent = document.createElement('div')
    let productBoxImg = document.createElement('img')
    let productBoxTitle = document.createElement('h2')
    let productBoxPrice = document.createElement('span')
    let colorBox = document.createElement('div')
    for (const color of item.colors) {
      let colorCycle = document.createElement('div')

      colorCycle.classList.add('product-box__color-cycle')
      colorCycle.setAttribute('data-color', color)
      // console.log(key);

      colorCycle.style.background = color

      colorBox.append(colorCycle)

      colorCycle.onclick = () => {
        productBoxImg.src = './img/iMac/' + item.colorsImg[color]
      }
    }
    let productBoxBtn = document.createElement('button')
    // characteristics
    let infoBox = document.createElement('div')
    let display = document.createElement('div')
    let displaySize = document.createElement('span')
    let displayTitle = document.createElement('h4')
    let chip = document.createElement('div')
    let chipImg = document.createElement('img')
    let chipTitle = document.createElement('h4')
    let chipDescripton = document.createElement('p')
    let ram = document.createElement('div')
    let ramImg = document.createElement('img')
    let ramTitle = document.createElement('h4')
    let ramDescription = document.createElement('p')
    let memory = document.createElement('div')
    let memorySize = document.createElement('div')
    let battery = document.createElement('div')
    let batteryImg = document.createElement('img')
    let batteryDescription = document.createElement('div')
    let camera = document.createElement('div')
    let cameraImg = document.createElement('img')
    let cameraTitle = document.createElement('div')
    let cameraDescription = document.createElement('div')
    let iMacWeight = document.createElement('div')
    let features = document.createElement('div')
    for (const feature of item.specs.other) {
      let featureImg = document.createElement('img')

      featureImg.classList.add('feature-img')
      
      let arrLength = item.specs.other
      if (arrLength.length == 3) {
        features.classList.add('arr-length__3')
        featureImg.style.border = '2px solid black'
      } else {
        features.classList.add('arr-length__1')
      }

      featureImg.src = './img/iMac/' + feature

      features.append(featureImg)
    }
    let infoBoxBtn = document.createElement('button')

    // Content
    productBox.classList.add('product-box')
    productBoxContent.classList.add('product-box__content')
    productBoxImg.classList.add('product-box__img')
    productBoxTitle.classList.add('product-box__title')
    productBoxPrice.classList.add('product-box__price')
    colorBox.classList.add('product-box__color-box')
    productBoxBtn.classList.add('product-box__button')
    // characteristics
    infoBox.classList.add('info-box')
    display.classList.add('display')
    display.classList.add('center')
    displaySize.classList.add('display-size')
    displayTitle.classList.add('display-title')
    chip.classList.add('chip')
    chip.classList.add('center')
    chipImg.classList.add('chip-img')
    chipTitle.classList.add('chip-title')
    chipDescripton.classList.add('desc')
    ram.classList.add('ram')
    ram.classList.add('center')
    ramImg.classList.add('ram-img')
    ramTitle.classList.add('ram-title')
    ramDescription.classList.add('desc')
    memory.classList.add('memory')
    memory.classList.add('center')
    memorySize.classList.add('memory-size')
    battery.classList.add('battery')
    battery.classList.add('center')
    batteryImg.classList.add('battery-img')
    batteryDescription.classList.add('battery-desc')
    camera.classList.add('camera')
    camera.classList.add('center')
    cameraImg.classList.add('camera-img')
    cameraTitle.classList.add('camera-title')
    cameraDescription.classList.add('desc')
    iMacWeight.classList.add('imac-weight')
    iMacWeight.classList.add('center')
    features.classList.add('features')
    features.classList.add('center')
    infoBoxBtn.classList.add('info-box__btn')

    // Content
    productBoxImg.src = './img/iMac/' + item.img
    productBoxTitle.innerHTML = item.title
    productBoxPrice.innerHTML = 'From $' + item.price
    productBoxBtn.innerHTML = 'Buy'
    // characteristics
    displaySize.innerHTML = item.specs.display.size
    displayTitle.innerHTML = item.specs.display.title
    chipImg.src = './img/iMac/' + item.specs.chip.img
    chipTitle.innerHTML = item.specs.chip.title
    chipDescripton.innerHTML = item.specs.chip.description
    ramImg.src = './img/iMac/' + item.specs.ram.img
    ramTitle.innerHTML = item.specs.ram.title
    ramDescription.innerHTML = item.specs.ram.description
    memorySize.innerHTML = item.specs.memory.size + item.specs.memory.type.toUpperCase()
    batteryImg.src = './img/iMac/battery.png'
    batteryDescription.innerHTML = 'Up to ' + item.specs.battery + ' hours battery life'
    cameraImg.src = './img/iMac/video.png'
    cameraTitle.innerHTML = item.specs.camera.title
    cameraDescription.innerHTML = item.specs.camera.description
    iMacWeight.innerHTML = item.specs.weight + ' lb'
    infoBoxBtn.innerHTML = 'Learn more'

    // Content
    productBoxContent.append(
      productBoxImg,
      productBoxTitle,
      productBoxPrice,
      colorBox,
      productBoxBtn,
      infoBox
    )
    // characteristics
    display.append(displaySize, displayTitle)
    chip.append(chipImg, chipTitle, chipDescripton)
    ram.append(ramImg, ramTitle, ramDescription)
    memory.append(memorySize)
    battery.append(batteryImg, batteryDescription)
    camera.append(cameraImg, cameraTitle, cameraDescription)

    infoBox.append(
      display,
      chip,
      ram,
      memory,
      battery,
      camera,
      iMacWeight,
      features
    )
    productBox.append(productBoxContent, infoBox, infoBoxBtn)
    iMac.append(productBox)
  }
}
iMacFunction(iMacArr)