    //Declaration of main Div
    const mainDiv = document.querySelector('.container');
    
    
    
    
    //Creates 16 columns
    function createColumns(){
        for (let i = 0; i < 16; i++) {
            const createRows = document.createElement('div');
            createRows.classList.add(i);
            //createRows.textContent = 'First added div';
            mainDiv.appendChild(createRows);    
            createRows.setAttribute('class','gridRow');
            
        }    
    }
    
    
    
    
    //Creates 16 rows 
    function createRows(){
        const rows = document.querySelectorAll('.gridRow');
        
        for (let j = 0; j < rows.length; j++) {
            for (let i = 0; i < 16; i++) {
                const createColumns = document.createElement('div');
                createColumns.classList.add(i);
                rows[j].appendChild(createColumns);    
                createColumns.setAttribute('class','gridColumn');
            }
        }
    }
    
    //Event Listener to change indiviual square colors
    function changeColor(e) {
        document.querySelectorAll('.gridColumn').forEach(item => {
            item.addEventListener('mouseover', event => {
                //handle click
                item.style.backgroundColor = 'red';
            })
        })
    }
    
//Initiates all functions
function createGrid() {
    createColumns();
    createRows();
    changeColor();
}

function clearGrid() {
    const rowRemove = document.querySelectorAll(".gridRow");
    for(var i = rowRemove.length - 1; 0 <= i; i--)
    if(rowRemove[i] && rowRemove[i].parentElement)
    rowRemove[i].parentElement.removeChild(rowRemove[i]);
    
}