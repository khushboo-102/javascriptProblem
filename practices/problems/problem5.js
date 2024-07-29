function removeDuplicate(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (exists (newArray, array[i]))
            continue;
        else 
            newArray.push(array[i])
    }
    return newArray;
}

function exists(newArray, item){
    for (let i = 0; i < newArray.length; i++){
        if (newArray[i]===item)
            return true;
        else 
            continue;
    }
    return false
}


console.log(removeDuplicate([1,1,2,2,2,3,3]))