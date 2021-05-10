let h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.textContent)
document.write('<h1> newly added element </h1>')


var HeadingElement = document.querySelectorAll('h1')
console.log(HeadingElement)
var para2 = document.querySelectorAll('.red')
console.log(para2)
var button = document.querySelector('#buttonOne')
console.log(button)

for (let i = 0; i < para2.length; i++) {
    button.addEventListener('click', function () {

        para2[i].style.color = 'blue'
    })
}
for (let i = 0; i < HeadingElement.length; i++) {
    HeadingElement[i].addEventListener('click', () => {
        HeadingElement[i].style.background = "green"
    })
    HeadingElement[i].addEventListener('dblclick', () => {
        HeadingElement[i].style.background = "red"
    })
}


    
let liList = document.getElementsByTagName('li')
console.log(liList)

for (var i = 0; i < liList.length; i++) {
    liList[i].style.color = 'green';
    liList[i].style.background = 'yellow';
    liList[i].style.fontSize = '20px';
}

