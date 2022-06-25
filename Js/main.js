const displayArea = document.getElementById('subOne');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

first.addEventListener('mouseover', displayOne)
first.addEventListener('mouseout', clear)

second.addEventListener('mouseover', displayTwo)
second.addEventListener('mouseout', clear)

third.addEventListener('mouseover', displayThree)
third.addEventListener('mouseout', clear)



function displayOne() {
displayArea.innerHTML = first.id
console.log('first')
}
function displayTwo() {
    displayArea.innerHTML = second.id
    console.log('second')
    }
    function displayThree() {
        displayArea.innerHTML = third.id
        console.log('third')
        }

function clear() {
    displayArea.innerHTML ='Hover over an image'
}