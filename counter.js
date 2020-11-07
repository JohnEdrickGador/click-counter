var counter = document.getElementById("counter")
var button = document.getElementById("click")
var count = 0

button.onclick = function(){
    count += 1
    counter.innerHTML = count
}