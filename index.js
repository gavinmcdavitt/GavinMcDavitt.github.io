const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse("").join("")
}
function check(){
    const value  = input.value
    const reversi = reverseString(value)
    if(value == "")
        value = "ab"
    if(value == reversi)
    {
        alert(`${value} is a palindrome!`)
    }
    else{
        alert(`${value} is not a palindrome.`)
    }
    input.value =""
}