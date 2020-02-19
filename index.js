// const mainDiv = document.querySelector('.container');
// const createDiv = document.createElement('div');

function createDivs(num) {
    const mainDiv = document.querySelector('.container');
    
    for (let i = 0; i < num; i++) {
        const createDiv = document.createElement('div');
        createDiv.classList.add(i);
        createDiv.textContent = 'First added div';
        mainDiv.appendChild(createDiv);    
        
    }
   
}


