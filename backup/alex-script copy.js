let slideIndex = 5;

showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("fade");


    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}





// const accordionCards = document.querySelectorAll('.accordion-card');
// const cardNames = document.querySelectorAll('.card-name');


// accordionCards.addEventListener('mouseover', () => {
//     for (let i = 0; i < accordionCards.length; i++) {
//         for (let j = 0; j < cardNames.length; j++) {
//             cardNames[j].childNodes.style.fontSize = "10px";
//         }
//     }
// });


// function myFunc() {
//     함수내용
// }

// content.addEventListener('click', myFunc)
// content.addEventListener('click', myFunc())

// content.addEventListener('click',()=>{
//     즉시실행함수
// })

// setTimeout(()=>{
//     지연실행
// },1000)

const boostingOn = document.querySelector('.boosting-btn-container');

const myScore = {
    html : 90,
    css : 65,
    js : 50
}

console.log(myScore.html)

const skillAccordionCard = document.querySelector('.skill-accordion-card');

boostingOn.addEventListener('click', () => {
    

        const htmlRating = document.getElementsByClassName('html-rating')[0];
        const htmlBlock = document.getElementsByClassName('html-block');

        for (let i = 1; i < 100; i++) {
            htmlRating.innerHTML += "<div class='html-block'></div>";
            htmlBlock[i].style.transform = "rotate(" + 3.6 * i + "deg)";
            htmlBlock[i].style.animationDelay = `${i / 40}s`;
        }

        const htmlCounter = document.querySelector('.html-counter');
        htmlCounter.innerText = 0;

        const htmlTarget = +htmlCounter.getAttribute('data-target');
        let progress = 0 ;

        const htmlNumberCounter = () => {
            
            if (progress < myScore.html) {
                progress++
                htmlCounter.innerText = progress;

                setTimeout(() => {
                    htmlNumberCounter()
                }, 25);
            }
        }

        htmlNumberCounter();

        // }, 1000));

        // skillAccordionCard.addEventListener('mouseover', setTimeout(()=>{

        const cssRating = document.getElementsByClassName('css-rating')[0];
        const cssBlock = document.getElementsByClassName('css-block');

        for (let i = 1; i < 100; i++) {
            cssRating.innerHTML += "<div class='css-block'></div>";
            cssBlock[i].style.transform = "rotate(" + 3.6 * i + "deg)";
            cssBlock[i].style.animationDelay = `${i / 40}s`;
        }

        const cssCounter = document.querySelector('.css-counter');
        cssCounter.innerText = 0;

        const cssTarget = +cssCounter.getAttribute('data-target');
        // let progress = 0 ;

        const cssNumberCounter = () => {

            const cssValue = +cssCounter.innerText;

            if (progress < myScore.css) {
                progress++
                cssCounter.innerText = progress;

                setTimeout(() => {
                    cssNumberCounter()
                }, 25);
            }
        }

        cssNumberCounter();

        // }, 1000));

        // skillAccordionCard.addEventListener('mouseover', setTimeout(()=>{

        const jsRating = document.getElementsByClassName('js-rating')[0];
        const jsBlock = document.getElementsByClassName('js-block');

        for (let i = 1; i < 100; i++) {
            jsRating.innerHTML += "<div class='js-block'></div>";
            jsBlock[i].style.transform = "rotate(" + 3.6 * i + "deg)";
            jsBlock[i].style.animationDelay = `${i / 40}s`;
        }

        const jsCounter = document.querySelector('.js-counter');
        jsCounter.innerText = 0;

        const jsTarget = +jsCounter.getAttribute('data-target');
        // let progress = 0 ;

        const jsNumberCounter = () => {

            // const jsValue = +jsCounter.innerText;

            if (progress < myScore.js) {
                progress++
                jsCounter.innerText = progress;

                setTimeout(() => {
                    jsNumberCounter()
                }, 25);
            }
        }

        jsNumberCounter();    
});
