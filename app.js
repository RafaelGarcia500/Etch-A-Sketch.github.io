
function generateDiv(size) {
    const container = document.getElementById(`board`)
    let divs = container.querySelectorAll(`div`)
    divs.forEach((div)=> div.remove())
    container.style.setProperty('--grid-rows',size)
    container.style.setProperty('--grid-cols',size)

    let sum = size * size
    for(let i = 0; i < sum;i++){
        let gridItem = document.createElement(`div`)
        gridItem.addEventListener(`mouseover`,() => {
            gridItem.style.backgroundColor = `black`
        })
        gridItem.style.backgroundColor = `white`
        container.appendChild(gridItem)
    }
  
}

generateDiv(16)

function clearBoard(){
    const container = document.getElementById(`board`);
    let divs = container.querySelectorAll(`div`)
    divs.forEach((div)=> div.style.backgroundColor = `white`)
}
function randomColorButton(){
    const container = document.getElementById(`board`);
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let gridItems = container.querySelectorAll(`div`);
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener(`mouseover`,() => {
            gridItem.style.backgroundColor = randomColor;
        });
    });
}








