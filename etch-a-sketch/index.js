const container = document.querySelector('.container')
const button = document.querySelector('#setGridSize')
const gridItem = document.createElement('div')

// prevent drawing unless holding left mouse
let mouseHold = false
addEventListener('mousedown', () => {
  mouseHold = true
})
addEventListener('mouseup', () => {
  mouseHold = false
})

// function makeDivs(numDivs) {
//   for (let d = 0; d < numDivs * numDivs; d++) {
//     let cells = document.createElement('div')
//     container.appendChild(cells)
//   }
// }

const makeDivs = (numPerSide) => {
  for (let i = 0; i < numPerSide * numPerSide; i++) {
    let item = document.createElement('div')
    item.style.backgroundColor = 'white'
    item.style.outline = '1px solid gray'
    item.style.opacity = 1
    //calculation for the items to take up equal space
    item.style.flexBasis = `calc(100% / ${numPerSide})`
    item.addEventListener('mouseover', () => {
      if (mouseHold == true) {
        item.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 255
        )},${Math.floor(Math.random() * 255)},${Math.floor(
          Math.random() * 255
        )})`
        item.style.opacity -= 0.1
      }
    })
    container.appendChild(item)
  }
}

//calling the function to set the starter etch-o-sketch
makeDivs(16)

button.addEventListener('click', () => {
  // basic loop to make sure of a valid input
  let n = parseInt(prompt('Pick a number for a grid size: '))
  if (n > 100 || n < 1) {
    do {
      n = parseInt(prompt('Grid size must be between 1 to 100 '))
    } while (n > 100 || n < 1)
  }
  // Added this to make sure the grid doesnt reset if cancel clicked on prompt
  if (n > 1) {
    container.replaceChildren()
    makeDivs(n)
  }
})
