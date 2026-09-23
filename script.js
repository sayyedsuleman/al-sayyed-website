/* =========================================
   AL SAYYED STUDIO
========================================= */


/* YOUR WHATSAPP NUMBER */

const WHATSAPP_NUMBER = "8433660173";


/* =========================================
   HERO SLIDES
========================================= */

const heroSlides = [

  {
    category: "Fragrance",

    tag: "THE NEW STANDARD OF ELEGANCE",

    title: "Wear your<br><i>presence.</i>",

    description:
      "Discover rich attars, refined perfumes and timeless fragrances crafted for a signature that stays with you.",

    button: "EXPLORE FRAGRANCE",

    image: "./fragrance.jpg"
  },


  {
    category: "Clothing",

    tag: "THE AL SAYYED COLLECTION",

    title: "Dress with<br><i>intention.</i>",

    description:
      "Premium essentials designed with clean silhouettes, refined details and effortless everyday luxury.",

    button: "EXPLORE CLOTHING",

    image: "./clothing.jpg"
  },


  {
    category: "Jewellery",

    tag: "TIMELESS DETAILS",

    title: "Own your<br><i>statement.</i>",

    description:
      "Signature watches and jewellery designed to add a quiet touch of luxury to every moment.",

    button: "EXPLORE JEWELLERY",

    image: "./jewellery.jpg"
  }

];


let currentHero = 0;


/* =========================================
   PRODUCTS

   IMAGES ROOT FOLDER MEIN HAIN
   ISLIYE images/ NAHI LAGAYA HAI
========================================= */

const products = [

  /* FRAGRANCE */

  {
    id: 1,
    name: "ameer ul oud",
    category: "Fragrance",
    sub: "Attar",
    price: 149,
    image: "./attar-1.jpg"
  },

  {
    id: 2,
    name: "turkis oud",
    category: "Fragrance",
    sub: "Attar",
    price: 129,
    image: "./attar-1.jpg"
  },

  {
    id: 3,
    name: "musk e tahara",
    category: "Fragrance",
    sub: "Attar",
    price: 149,
    image: "./attar-1.jpg"
  },

  {
    id: 4,
    name: "turkis Oud 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 219,
    image: "./perfume-1.jpg"
  },

  {
    id: 5,
    name: "vempair blood 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 249,
    image: "./perfume-1.jpg"
  },

  {
    id: 6,
    name: "sprot eilt",
    category: "Fragrance",
    sub: "Solid Perfume",
    price: 99,
    image: "./solid-perfume-1.jpg"
  },

  {
    id: 7,
    name: "Royal Bakhoor",
    category: "Fragrance",
    sub: "Bakhoor",
    price: 249,
    image: "./bakhoor-1.jpg"
  },


  /* CLOTHING */

  {
    id: 8,
    name: "white backprint tshirt",
    category: "Clothing",
    sub: "T-Shirt",
    price: 249,
    image: "./tshirt-1.jpg"
  },

  {
    id: 9,
    name: "drakbule backprint tshirt  ",
    category: "Clothing",
    sub: "T-Shirt",
    price: 249,
    image: "./tshirt-2.jpg"
  },

  {
    id: 10,
    name: "adidas tshirt",
    category: "Clothing",
    sub: "Shirt",
    price: 349,
    image: "./shirt-3.jpg"
  },

  {
    id: 11,
    name: "Premium Oxford",
    category: "Clothing",
    sub: "Shirt",
    price: 1699,
    image: "./shirt-2.jpg"
  },

  {
    id: 12,
    name: "Al Sayyed Hoodie",
    category: "Clothing",
    sub: "Hoodie",
    price: 1999,
    image: "./hoodie-1.jpg"
  },


  /* JEWELLERY */

  {
    id: 13,
    name: "Regal Chrono",
    category: "Jewellery",
    sub: "Watch",
    price: 3499,
    image: "./watch-1.jpg"
  },

  {
    id: 14,
    name: "Midnight Watch",
    category: "Jewellery",
    sub: "Watch",
    price: 3999,
    image: "./watch-2.jpg"
  },

  {
    id: 15,
    name: "Royal Signet",
    category: "Jewellery",
    sub: "Ring",
    price: 1499,
    image: "./ring-1.jpg"
  },

  {
    id: 16,
    name: "Classic Gold Ring",
    category: "Jewellery",
    sub: "Ring",
    price: 1699,
    image: "./ring-2.jpg"
  },

  {
    id: 17,
    name: "Noir Earring",
    category: "Jewellery",
    sub: "Earring",
    price: 999,
    image: "./earring-1.jpg"
  },

  {
    id: 18,
    name: "Royal Necklace",
    category: "Jewellery",
    sub: "Necklace",
    price: 1999,
    image: "./necklace-1.jpg"
  },

  {
    id: 19,
    name: "black chain Bracelet",
    category: "Jewellery",
    sub: "Bracelet",
    price: 99,
    image: "./bracelet-1.jpg"
  },
  {
    id: 20,
    name: "bule oud",
    category: "Fragrance",
    sub: "Attar",
    price: 149,
    image: "./attar-1.jpg"
  },
 {
    id: 21,
    name: "bule sultan",
    category: "Fragrance",
    sub: "Attar",
    price: 149,
    image: "./attar-1.jpg"
  },
  {
    id: 22,
    name: "vempair blood",
    category: "Fragrance",
    sub: "Attar",
    price: 199,
    image: "./attar-1.jpg"
  },
 {
    id: 23,
    name: "weekend",
    category: "Fragrance",
    sub: "Attar",
    price: 129,
    image: "./attar-1.jpg"
  },
 {
    id: 24,
    name: "aseel",
    category: "Fragrance",
    sub: "Attar",
    price: 119,
    image: "./attar-1.jpg"
  },
{
    id: 25,
    name: "rasasi shura",
    category: "Fragrance",
    sub: "Attar",
    price: 149,
    image: "./attar-1.jpg"
  },
  {
    id: 26,
    name: "red tabaco",
    category: "Fragrance",
    sub: "Attar",
    price: 149,
    image: "./attar-1.jpg"
  },
  {
    id: 27,
    name: "al jhara",
    category: "Fragrance",
    sub: "Attar",
    price: 129,
    image: "./attar-1.jpg"
  },
  {
    id: 28,
    name: "rasasi shura 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 299,
    image: "./perfume-1.jpg"
  },
 {
    id: 29,
    name: "al jhara 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 249,
    image: "./perfume-1.jpg"
  },
  {
    id: 31,
    name: "weekend 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 249,
    image: "./perfume-1.jpg"
  },
  {
    id: 32,
    name: "choco lava 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 249,
    image: "./perfume-1.jpg"
  },
  {
    id: 33,
    name: "bule sultan 30ml",
    category: "Fragrance",
    sub: "Perfume",
    price: 249,
    image: "./perfume-1.jpg"
  },
  {
    id: 34,
    name: "zara",
    category: "Fragrance",
    sub: "Solid Perfume",
    price: 99,
    image: "./solid-perfume-1.jpg"
  },
  {
    id: 35,
    name: " Bakhoor charcol",
    category: "Fragrance",
    sub: "Bakhoor",
    price: 249,
    image: "./bakhoor-1.jpg"
  },
  {
    id: 36,
    name: "golden chain Bracelet",
    category: "Jewellery",
    sub: "Bracelet",
    price: 99,
    image: "./bracelet-2.jpg"
  },
  
];


/* =========================================
   CATEGORIES
========================================= */

const categories = {

  Fragrance: [
    "All",
    "Attar",
    "Perfume",
    "Solid Perfume",
    "Bakhoor"
  ],

  Clothing: [
    "All",
    "T-Shirt",
    "Shirt",
    "Hoodie"
  ],

  Jewellery: [
    "All",
    "Watch",
    "Ring",
    "Earring",
    "Necklace",
    "Bracelet"
  ]

};


let selectedCategory = "Fragrance";

let selectedSubCategory = "All";


/* =========================================
   CART
========================================= */

let cart =
  JSON.parse(
    localStorage.getItem("alSayyedCart")
  ) || [];


/* =========================================
   PAGE START
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderSubCategories();

    renderProducts();

    updateCart();

  }
);


/* =========================================
   HERO
========================================= */

function showHero(index) {

  const image =
    document.getElementById("heroImage");


  image.classList.add("fade");


  setTimeout(
    function () {

      currentHero = index;


      const slide =
        heroSlides[currentHero];


      document.getElementById(
        "heroTag"
      ).innerText =
        slide.tag;


      document.getElementById(
        "heroTitle"
      ).innerHTML =
        slide.title;


      document.getElementById(
        "heroDescription"
      ).innerText =
        slide.description;


      document.getElementById(
        "heroButton"
      ).innerText =
        slide.button;


      image.src =
        slide.image;


      document
        .querySelectorAll(".hero-dot")
        .forEach(
          function (dot, i) {

            dot.classList.toggle(
              "active",
              i === currentHero
            );

          }
        );


      image.classList.remove("fade");

    },
    350
  );

}


/* AUTO CHANGE EVERY 3 SECONDS */

setInterval(
  function () {

    let next =
      currentHero + 1;


    if (
      next >= heroSlides.length
    ) {

      next = 0;

    }


    showHero(next);

  },
  3000
);


/* =========================================
   HERO BUTTON
========================================= */

function heroShop() {

  selectCategory(
    heroSlides[currentHero].category
  );

}


/* =========================================
   MAIN CATEGORY
========================================= */

function selectCategory(category) {

  selectedCategory =
    category;

  selectedSubCategory =
    "All";


  document
    .querySelectorAll(
      ".category-card"
    )
    .forEach(
      function (card) {

        card.classList.remove(
          "active"
        );

      }
    );


  const cards =
    document.querySelectorAll(
      ".category-card"
    );


  if (
    category === "Fragrance"
  ) {

    cards[0].classList.add(
      "active"
    );

  }

  if (
    category === "Clothing"
  ) {

    cards[1].classList.add(
      "active"
    );

  }

  if (
    category === "Jewellery"
  ) {

    cards[2].classList.add(
      "active"
    );

  }


  document.getElementById(
    "selectedCategory"
  ).innerText =
    category;


  renderSubCategories();

  renderProducts();


  document
    .getElementById("shop")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================
   SUB CATEGORY BUTTONS
========================================= */

function renderSubCategories() {

  const box =
    document.getElementById(
      "subCategoryButtons"
    );


  box.innerHTML = "";


  categories[
    selectedCategory
  ].forEach(
    function (sub) {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "sub-button";


      if (
        sub ===
        selectedSubCategory
      ) {

        button.classList.add(
          "active"
        );

      }


      button.innerText =
        sub;


      button.onclick =
        function () {

          selectedSubCategory =
            sub;


          renderSubCategories();

          renderProducts();

        };


      box.appendChild(
        button
      );

    }
  );

}


/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

  let list =
    products.filter(
      function (product) {

        return (
          product.category ===
          selectedCategory
        );

      }
    );


  if (
    selectedSubCategory !==
    "All"
  ) {

    list =
      list.filter(
        function (product) {

          return (
            product.sub ===
            selectedSubCategory
          );

        }
      );

  }


  renderProductCards(list);


  document.getElementById(
    "productLabel"
  ).innerText =
    selectedCategory.toUpperCase() +
    " / " +
    selectedSubCategory.toUpperCase();


  document.getElementById(
    "productNumber"
  ).innerText =
    list.length +
    " PRODUCTS";

}


/* =========================================
   PRODUCT CARDS
========================================= */

function renderProductCards(list) {

  const grid =
    document.getElementById(
      "productGrid"
    );


  grid.innerHTML = "";


  if (
    list.length === 0
  ) {

    grid.innerHTML =
      '<div class="no-products">No products found.</div>';

    return;

  }


  list.forEach(
    function (product) {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "product-card";


      card.innerHTML = `

        <div class="product-photo">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.style.display='none'"
          >

        </div>


        <div class="product-details">

          <small>
            ${product.sub}
          </small>

          <h3>
            ${product.name}
          </h3>

          <span class="product-price">
            ₹${formatPrice(product.price)}
          </span>

        </div>


        <button
          class="add-button"
          onclick="addToCart(${product.id})"
        >
          +
        </button>

      `;


      grid.appendChild(
        card
      );

    }
  );

}


/* =========================================
   SEARCH
========================================= */

function searchProducts(value) {

  const query =
    String(value)
      .trim()
      .toLowerCase();


  if (
    query === ""
  ) {

    renderProducts();

    return;

  }


  const results =
    products.filter(
      function (product) {

        return (

          product.name
            .toLowerCase()
            .includes(query)

          ||

          product.category
            .toLowerCase()
            .includes(query)

          ||

          product.sub
            .toLowerCase()
            .includes(query)

        );

      }
    );


  renderProductCards(
    results
  );


  document.getElementById(
    "productLabel"
  ).innerText =
    "SEARCH RESULTS";


  document.getElementById(
    "productNumber"
  ).innerText =
    results.length +
    " PRODUCTS";


  document
    .getElementById("shop")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================
   PRICE
========================================= */

function formatPrice(price) {

  return new Intl.NumberFormat(
    "en-IN"
  ).format(price);

}


/* =========================================
   CART
========================================= */

function addToCart(id) {

  const product =
    products.find(
      function (item) {

        return item.id === id;

      }
    );


  if (!product) return;


  const existing =
    cart.find(
      function (item) {

        return item.id === id;

      }
    );


  if (existing) {

    existing.qty++;

  } else {

    cart.push({

      id: product.id,

      name: product.name,

      category: product.category,

      sub: product.sub,

      price: product.price,

      qty: 1

    });

  }


  saveCart();

  updateCart();

  openCart();

}


/* =========================================
   CART UPDATE
========================================= */

function updateCart() {

  const box =
    document.getElementById(
      "cartItems"
    );


  const count =
    cart.reduce(
      function (total, item) {

        return total + item.qty;

      },
      0
    );


  document.getElementById(
    "cartCount"
  ).innerText =
    count;


  if (
    cart.length === 0
  ) {

    box.innerHTML =
      '<div class="empty-cart">Your bag is empty.</div>';

  } else {

    box.innerHTML = "";


    cart.forEach(
      function (item) {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "cart-item";


        row.innerHTML = `

          <div>

            <h4>
              ${item.name}
            </h4>

            <p>
              ₹${formatPrice(item.price)}
              × ${item.qty}
            </p>

          </div>


          <button
            class="remove-item"
            onclick="removeFromCart(${item.id})"
          >
            ×
          </button>

        `;


        box.appendChild(
          row
        );

      }
    );

  }


  const total =
    cart.reduce(
      function (sum, item) {

        return (
          sum +
          item.price *
          item.qty
        );

      },
      0
    );


  document.getElementById(
    "cartTotal"
  ).innerText =
    "₹" +
    formatPrice(total);

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(id) {

  cart =
    cart.filter(
      function (item) {

        return item.id !== id;

      }
    );


  saveCart();

  updateCart();

}


/* =========================================
   SAVE CART
========================================= */

function saveCart() {

  localStorage.setItem(
    "alSayyedCart",
    JSON.stringify(cart)
  );

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

  document
    .getElementById(
      "cartOverlay"
    )
    .classList.add("show");


  document.body.style.overflow =
    "hidden";

}


/* CLOSE CART */

function closeCart() {

  document
    .getElementById(
      "cartOverlay"
    )
    .classList.remove("show");


  document.body.style.overflow =
    "";

}


/* CART OUTSIDE CLICK */

function cartOutside(event) {

  if (
    event.target.id ===
    "cartOverlay"
  ) {

    closeCart();

  }

}


/* =========================================
   SEARCH OVERLAY
========================================= */

function openSearch() {

  document
    .getElementById(
      "searchOverlay"
    )
    .classList.add("show");


  document.body.style.overflow =
    "hidden";


  setTimeout(
    function () {

      document
        .getElementById(
          "bigSearch"
        )
        .focus();

    },
    100
  );

}


function closeSearch() {

  document
    .getElementById(
      "searchOverlay"
    )
    .classList.remove("show");


  document.body.style.overflow =
    "";

}


/* =========================================
   WHATSAPP ORDER
========================================= */

function orderOnWhatsApp() {

  if (
    cart.length === 0
  ) {

    alert(
      "Your bag is empty."
    );

    return;

  }


  let message =
    "Hello Al Sayyed Studio 👋\n\n" +
    "*NEW ORDER*\n\n";


  cart.forEach(
    function (item, index) {

      message +=
        `${index + 1}. ${item.name}\n` +
        `Category: ${item.category} / ${item.sub}\n` +
        `Quantity: ${item.qty}\n` +
        `Price: ₹${formatPrice(
          item.price *
          item.qty
        )}\n\n`;

    }
  );


  const total =
    cart.reduce(
      function (sum, item) {

        return (
          sum +
          item.price *
          item.qty
        );

      },
      0
    );


  message +=
    "--------------------\n" +
    `*TOTAL: ₹${formatPrice(total)}*\n\n` +
    "I want to place this order.\n" +
    "Please confirm my order and delivery details.\n\n" +
    "Thank you.";


  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(
      message
    );


  window.open(
    url,
    "_blank"
  );

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape"
    ) {

      closeSearch();

      closeCart();

    }

  }
);