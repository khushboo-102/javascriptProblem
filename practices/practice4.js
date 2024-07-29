function reverseString(str) {
    var newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString = newString + str[i]
    }
    console.log(newString)
}
reverseString("Khushi")

