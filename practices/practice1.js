function printOdd(arry) {
    var oddAdd = []
    for (let i = 0; i < arry.length; i++)

        if (arry[i] % 2 != 0) {
            oddAdd.push(arry[i])
        }
    console.log(oddAdd)
}
printOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 18])