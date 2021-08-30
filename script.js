var counter = 0


function count(){
    counter = counter + 1
    document.getElementById("number").innerHTML = counter + "."
}

function countdown(){
    counter = counter - 1
    document.getElementById("number").innerHTML = counter + "."
}

function copy(){
    let number = document.getElementById("number").innerHTML
    navigator.clipboard.writeText(number)
    alert('Copied ' + number)
}