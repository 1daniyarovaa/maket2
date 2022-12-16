let base =[
    {id: 1, img:'./img/image 1.png' , title: 'Syltherine',subtitle:'Stylish cafe chair'},
    {id: 2, img: './img/image 2.png' , title: 'Leviosa', subtitle:'Stylish cafe chair'},
    {id: 3, img: './img/image 3.png' , title: 'Lolito', subtitle:'Luxury big sofa'},
    {id: 4, img:'./img/image 4.png' , title: 'Respira', subtitle:'Minimalist fan'},
    {id: 5, img:'./img/image 9.png' , title: 'Grifo', subtitle:'Night lamp'},
    {id: 6, img:'./img/image 6.png' , title: 'Muggo', subtitle:'Small mug'},
    {id: 7, img:'./img/image 7.png' , title: 'Pingky', subtitle:'Cute bed set'},
    {id: 8, img:'./img/image 8.png' , title: 'Potty', subtitle:'Minimalist flower pot'},
]

let prob1 = document.querySelector('.prob1')
const addCardsInProb = () => {
    base.forEach((item) => {
        prob1.innerHTML +=  `<div class= "card" id = ${item.id}>
        <img class="card_img" src='${item.img}' alt=${item.subtitle}></img>
            <h2 class="card_title">${item.title}</h2>
            <p class="card_subtitle">${item.subtitle}</p>
            <button class="delbtn">Delete</button>
        </div>`
        })
}
addCardsInProb()


const del = document.querySelectorAll(".delbtn")


function removecontent(e) {
    const remove = e.currentTarget;
    remove.parentElement.remove();
}

del.forEach((del) => del.addEventListener ('click', removecontent));
console.log(del);