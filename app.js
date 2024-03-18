const sliderWrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");


const products = [
  {
    id: 1,
    title: "Air Force",
    price: 8999,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 7999,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 6999,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 5999,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 4999,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentproductImg = document.querySelector(".productImg");
const currentproductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductColor= document.querySelectorAll(".color");
const currentproductSize = document.querySelectorAll(".size");



menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {

      sliderWrapper.style.transform = `translateX(${-100 * index}vw)`

      choosenProduct = products[index]; 
      
      currentproductTitle.innerHTML = choosenProduct.title;

      currentproductPrice.innerHTML = `<span>&#8377</span>${choosenProduct.price}`;

      currentproductImg.src = choosenProduct.colors[0].img

      currentproductColor.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      })

    })  
});

currentproductColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductImg.src = choosenProduct.colors[index].img;
  })
});

currentproductSize.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentproductSize.forEach((size) => {
      size.style.backgroundColor = "white"
      size.style.color = "black";
    })
    size.style.backgroundColor = "black"
    size.style.color = "white";
  })
});

const productBtn = document.querySelector(".buyBtn");
const closeBtn = document.querySelector(".close");
const paymentDisplay = document.querySelector(".payment");

productBtn.addEventListener("click", () => {
  paymentDisplay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  paymentDisplay.style.display = "none";
})