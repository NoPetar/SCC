const b0 = document.getElementById('b0')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
const b9 = document.getElementById('b9')
const eq = document.getElementById('eq')
const AC = document.getElementById('AC')
const ans = document.getElementById('ans')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mul = document.getElementById('mul')
const div = document.getElementById('div')
let eqAsString = ''

function KeypadOn(){
    b0.checkVisibility
}


b0.onclick = function(){
    eqAsString += "0"
    eq.innerHTML = eqAsString
}
b1.onclick = function(){
    eqAsString += "1"
    eq.innerHTML = eqAsString
}
b2.onclick = function(){
    eqAsString += "2"
    eq.innerHTML = eqAsString
}
b3.onclick = function(){
    eqAsString += "3"
    eq.innerHTML = eqAsString
}
b4.onclick = function(){
    eqAsString += "4"
    eq.innerHTML = eqAsString
}
b5.onclick = function(){
    eqAsString += "5"
    eq.innerHTML = eqAsString
}
b6.onclick = function(){
    eqAsString += "6"
    eq.innerHTML = eqAsString
}
b7.onclick = function(){
    eqAsString += "7"
    eq.innerHTML = eqAsString
}
b8.onclick = function(){
    eqAsString += "8"
    eq.innerHTML = eqAsString
}
b9.onclick = function(){
    eqAsString += "9"
    eq.innerHTML = eqAsString
}
AC.onclick = function(){
    eqAsString = ""
    eq.innerHTML = eqAsString
}
ans.onclick = function(){
    eqAsString = eval(eqAsString)
    eq.innerHTML = eqAsString
}
plus.onclick = function(){
    eqAsString += "+"
    eq.innerHTML = eqAsString
}
minus.onclick = function(){
    eqAsString += "-"
    eq.innerHTML = eqAsString
}
mul.onclick = function(){
    eqAsString += "*"
    eq.innerHTML = eqAsString
}
div.onclick = function(){
    eqAsString += "/"
    eq.innerHTML = eqAsString
}
