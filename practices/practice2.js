function printEven(arry) {
     var evenAdd = []
    for (let i = 0; i < arry.length; i++)

         if (arry[i] % 3 ==0) {
             evenAdd.push(arry[i])
        }
    console.log(evenAdd)
}
printEven([1, 2, 3, 4,14, 5, 6, 7, 8, 9, 11, 18])


