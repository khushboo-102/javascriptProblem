function findAverage(arry){
    var addAverage = 0;
    for (let i = 0; i<  arry.length; i++){
        addAverage = addAverage + arry[i]
      } 
       console.log(addAverage / arry.length)
}   

findAverage ([2, 5, 3])