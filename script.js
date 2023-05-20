function createGrid(size=16) {
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = null;

    for (let i = 0; i < size; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        rowContainer.style.cssText = 'display: flex; width: 100%';

        for (let j = 0; j < size; j++) {
            let cellContainer = document.createElement('div');
            cellContainer.classList.add('cell');
            cellContainer.style.cssText = 'background-color: white; margin: -1px; flex: 1;';

            cellContainer.addEventListener('mouseenter', e => {
                if (e.buttons > 0) {
                    e.target.style.cssText = `background-color: black; margin: -1px; flex: 1;`;
                }
            });
            
            cellContainer.addEventListener('mousedown', e => {
                e.target.style.cssText = `background-color: black; margin: -1px; flex: 1;`;
            });

            rowContainer.appendChild(cellContainer);
        }
        gridContainer.appendChild(rowContainer);
    }
}

function addSliderConfig() {
    let slider = document.getElementById('slider')
    slider.addEventListener('change', e => {
        let newVal = e.target.valueAsNumber;
       console.log(newVal);
       createGrid(newVal); 
    });

    slider.oninput = function() {
        document.querySelector('.size').innerHTML = `${this.value} x ${this.value}`;
      }
}


function main() {
    
    createGrid();
    addSliderConfig();

    let color = document.getElementById('color-picker');
    let colorVal = color.value ?? 'black';
    let currColor = colorVal;

    color.addEventListener('change', e => {
        currColor = e.target.value;

        let cellList = document.querySelectorAll('.cell');

        cellList.forEach(element => {
            element.removeEventListener('mousedown', e => {});
            element.removeEventListener('mouseenter', e => {});
            

            element.addEventListener('mouseenter', e => {
                if (e.buttons > 0) {
                    e.target.style.cssText = `background-color: ${currColor}; margin: -1px; flex: 1;`;
                }
            });
            
            element.addEventListener('mousedown', e => {
                e.target.style.cssText = `background-color: ${currColor}; margin: -1px; flex: 1;`;
            });

            
        });
    });

    console.log(colorVal);
}

main();
