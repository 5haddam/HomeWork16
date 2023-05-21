// if we can use splice 
function removeElementWithSplit(array, item) {
    index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// if we can`t use splice and other functions

function removeElement(array, item) {
    elementFound = false;
    for (i = 0; i < array.length; i++) {
        if (elementFound) {
            array[i - 1] = array[i];
        }
        if (array[i] === item) {
            elementFound = true;
        }
    }
    if (elementFound) {
        array.length -= 1;
    }
}



const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
