function createGrid(size=16) {
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = null;
    
    for (let i = 0; i < size; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        rowContainer.style.cssText = 'display: flex; width: 100%';
        for (let j = 0; j < size; j++) {
            let cellContainer = document.createElement('div');
            cellContainer.style.cssText = 'background-color: white; border: 1px solid gray; margin: -1px; flex: 1;';
            
            cellContainer.addEventListener('mouseenter', e => {
                e.target.style.cssText = 'background-color: grey; border: 1px solid gray; margin: -1px; flex: 1;';
            })
            cellContainer.addEventListener('mouseleave', e => {
                e.target.style.cssText = 'background-color: white; border: 1px solid gray; margin: -1px; flex: 1;';
            })
            
            rowContainer.appendChild(cellContainer);
        }
        gridContainer.appendChild(rowContainer);
    }
}

function addSliderListener() {
    let slider = document.getElementById('slider')
    slider.addEventListener('change', e => {
        let newVal = e.target.valueAsNumber;
       console.log(newVal);
       createGrid(newVal); 
    });
}

createGrid();
addSliderListener();