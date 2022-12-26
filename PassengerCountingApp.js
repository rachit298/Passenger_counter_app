let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("saveContent");

const increment = () => {

    count++;
    countEl.textContent = count;
}

const decrement = () => {

    if(count == 0){
        alert("Counting already at 0. Try incrementing counting.");
        return;
    }
    count--;
    countEl.textContent = count;
}

const save = () => {

    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

