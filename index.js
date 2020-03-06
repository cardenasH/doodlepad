//Declaration of main Div
const mainDiv = document.querySelector('.container');




//Creates 16 columns

    for (let i = 0; i < 16; i++) {
        const createRows = document.createElement('div');
        createRows.classList.add(i);
        //createRows.textContent = 'First added div';
        mainDiv.appendChild(createRows);    
        createRows.setAttribute('class','gridRow');
        
    }    




//Creates 16 rows 
    const rows = document.querySelectorAll('.gridRow');

    for (let j = 0; j < rows.length; j++) {
           
        for (let i = 0; i < 16; i++) {
            const createColumns = document.createElement('div');
            createColumns.classList.add(i);
            rows[j].appendChild(createColumns);    
            createColumns.setAttribute('class','gridColumn');
        }
    }
    


//Current working on
// function startHoverColorChange() {   
//    const column = document.querySelector('body');
   
//    column.addEventListener('click',function(){
//        this.style.backgroundColor = 'red';
//    });
   
// }
