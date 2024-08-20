/*Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

Кожен створений div:
Має випадковий rgb колір фону
Розміри найпершого div - 30px на 30px
Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
Створи функцію destroyBoxes(), яка очищає div#boxes. */


/*const createButton = document.getElementById("create")
const destroyButton = document.getElementById('destroy')
const input = document.getElementById('imput')
const boxes = document.querySelector('.boxes')

createButton.addEventListener("click", createBoxes(input.value))
//destroyButton.addEventListener("click", destroyBoxes())

function createRandomColor(){
    let randRed = Math.floor(Math.random() * 256)
    let randGreen = Math.floor(Math.random()*256)
    let randBlue = Math.floor(Math.random()*256)
    return `rgb(${randRed}, ${randGreen}, ${randBlue})`
}




function createBoxes(amount){
    let boxSize = 30
    console.log('a')
    for(let i = 0; i < amount; i++){
        let newBox = document.createElement('div')
        newBox.style.height = boxSize + 'px'
        newBox.style.width = boxSize + 'px'
        newBox.style.backgroundColor = createRandomColor()
        boxes.appendChild(newBox)
        boxSize += 10
        
    }
}

function destroyBoxes(){
    
}

*/

/*const createButton = document.getElementById("create")
const destroyButton = document.getElementById("destroy")
const input = document.getElementById("input")
const boxes = document.querySelector(".boxes")



function createRandomColor() {
    let randRed = Math.floor(Math.random() * 256)
    let randGreen = Math.floor(Math.random() * 256)
    let randBlue = Math.floor(Math.random() * 256)
    return `rgb(${randRed}, ${randGreen}, ${randBlue})`
}




function createBoxes(amount) {
    let boxSize = 30
    console.log("a")
    for(let i = 0; i < amount; i++) {
        let newBox = document.createElement("div")
        newBox.style.height = boxSize + "px"
        newBox.style.width = boxSize + "px"
        newBox.style.backgroundColor = createRandomColor()
        boxes.appendChild(newBox)
        boxSize += 10
    }
}

function destroyBoxes() {
    boxes.remove()
    input = ''
}

createButton.addEventListener("click", function(){
    const input = document.getElementById('input').value
    createBoxes(input)
})

destroyButton.addEventListener('click', function(){
    destroyBoxes()
})*/



document.addEventListener("DOMContentLoaded", function() {
    let observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => {
                    img.classList.add('active'); // Додаємо клас після завантаження
                };
                observer.unobserve(img); // Зупиняємо спостереження
            }
        });
    }, observerOptions);

    // Знаходимо зображення з data-src додаємо їх до спостереження
    document.querySelectorAll('img[data-src]').forEach(img => {
        observer.observe(img);
    });
});