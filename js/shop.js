const data = [
    {
      id: 1,
      name: "Shirt-yellow",
      img: "images/womens/w5.jpeg", 
      amt: 400,
      seller: "Boltt Store",
      catagory: "Women",
       color:"yellow",
    },
  
    {
      id: 2,
      name: "Naviblue suit",
      img: "images/mens/m1.jpeg",
      amt: 1300,
      seller: "Noise Store",
      catagory: "Men",
      color:"Naviblue",
    },
  
    {
      id: 3,
      name: "slopt mintigreen",
      img: "images/kids/k1.jpg",
      amt: 500,
      seller: "Rajesh Watchs",
      catagory: "Kids",
      color:"mintigreen",
    },
    {
      id: 4,
      name: "Silver Chain",
      img: "images/accessiores/a1.jpeg",
      amt: 550,
      seller: "Stonehenge Retail",
      catagory: "Accessories",
      color:"Silver",
    },
    {
      id: 5,
      name: "Pump jacket",
      img: "images/mens/m2.jpeg",
      amt: 650,
      seller: "Honor india",
      catagory: "Men",
      color:"mintigreen",
    },
  
    {
      id: 6,
      name: "Women's gray jacket ",
      img:"images/womens/w4.jpeg",
      amt: 900,
      seller: "IKALL Store",
      catagory: "Women",
      color:"gray",
    },
  
    {
      id: 7,
      name: "suit mintigreen",
      img: "images/mens/m3.jpeg",
      amt: 1400,
      seller: "Oppo Store",
      catagory: "Men",
      color:"mintigreen",
    },
    {
        id: 8,
        name: "Gray longing ",
        img:  "images/accessiores/a2.jpeg",
        amt: 300,
        seller: "ZEBRONICS Store",
        catagory: "Accessories",
        color:"gray",
      },
    {
      id: 9,
      name: "Yellow pajamas",
      img:  "images/womens/w2.jpeg",
      amt: 1100,
      seller: "Accer Store",
      catagory: "Women",
      color:"yellow",
    },
    {
      id: 10,
      name: "Baby set",
      img: "images/kids/k2.jpg",
      amt: 800,
      seller: "Samsung Store",
      catagory: "Kids",
      color:"pink",
    },
  
    {
      id: 11,
      name: "Islamic dress ",
      img:  "images/womens/w3.jpeg",
      amt: 700,
      seller: "ZEBRONICS Store",
      catagory: "Women",
      color:"pink",
    },
    {
        id: 12,
        name: "Children's striped T-shirt ",
        img:  "images/kids/k3.jpg",
        amt: 200,
        seller: "ZEBRONICS Store",
        catagory: "Kids",
        color:"gray",
      },
      {
        id: 13,
        name: "Women's watch ",
        img:   "images/accessiores/a3.jpeg",
        amt: 800,
        seller: "ZEBRONICS Store",
        catagory: "Accessories",
        color:"pink",
      },
  ];
 
  //const productsContainer = document.querySelector(".products");
  const categoryList = document.querySelector(".category-list");




  const productsContainer = document.querySelector(".products");


for (let i = 0; i < data.length; i++) {
  const product = data[i];

  // Create a product container
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");

  // Create an image element
  const productImage = document.createElement("img");
  productImage.src = product.img;
  productImage.alt = product.name;

  // Append the image to the product container
  productContainer.appendChild(productImage);

  // Add product details to the product container
  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");
  productDetails.innerHTML = `
    <span class="name">${product.name}</span>
    <span class="amt">Rs.${product.amt}</span>
    <span class="seller">${product.seller}</span>
  `;

  // Append product details to the product container
  productContainer.appendChild(productDetails);

  // Add a click event listener to each product container
  productContainer.addEventListener("click", function () {
    // Navigate to the details page with product information
    navigateToDetails(product.id);
  });

  // Append the product container to the products container
  productsContainer.appendChild(productContainer);
}



// Rest of your code remains unchanged
function displayProducts(products) {
  const productDetails = products
    .map(
      (product) => `
        <div class="product" data-product-id="${product.id}">
          <div class="img">
            <img src="${product.img}" alt="${product.name}" />
          </div>
          <div class="product-details">
            <span class="name">${product.name}</span>
            <span class="amt">Rs.${product.amt}</span>
            <span class="seller">${product.seller}</span>
          </div>
        </div>`
    )
    .join("");

  productsContainer.innerHTML = productDetails;

  // Add a click event listener to each product container
  const productContainers = document.querySelectorAll(".product");
  productContainers.forEach((productContainer) => {
    productContainer.addEventListener("click", function () {
      const productId = parseInt(productContainer.dataset.productId);
      navigateToDetails(productId);
    });
  });
}

// Rest of your code remains unchanged

// // Call the function to display products when the page loads
// displayProducts(data);
// setCategories();
// setPrices();
// setColors();


function setCategories() {
  const allCategories = data.map((product) => product.catagory);
      //console.log(allCategories);
      const catagories = [
        "All",
        ...allCategories.filter((product, index) => {
          return allCategories.indexOf(product) === index;
        }),
      ];
      //console.log(catagories);
      categoryList.innerHTML = catagories.map((catagory) => `<li>${catagory}</li>`).join("");
    
      categoryList.addEventListener("click", (e) => {
        const selectedCatagory = e.target.textContent;
        selectedCatagory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.catagory == selectedCatagory));
      });
}

const colorList = document.querySelector(".color-list");


function setColors() {
  const allColors = data.map((p) => p.color);
  const colors = ["All", ...new Set(allColors)]; // Use Set to get unique colors

  colorList.innerHTML = colors.map((color) => `<li>${color}</li>`).join("");
}

// Use event delegation to handle clicks on color items
colorList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const selectedColor = e.target.textContent;
    displayProducts(
      selectedColor === "All"
        ? data
        : data.filter((p) => p.color === selectedColor)
    );
  }
});

// Call the function to set up colors when the page loads



const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector(".priceValue");
function setPrices() {
  const priceList = data.map((product) => product.amt);
      const minPrice = Math.min(...priceList);
      const maxPrice = Math.max(...priceList);
      priceRange.min = minPrice;
      priceRange.max = maxPrice;
      priceValue.textContent = "Rs." + maxPrice;
    
      priceRange.addEventListener("input", (e) => {
       // priceValue.textContent = "Rs." + e.target.value;
        displayProducts(data.filter((product) => product.amt <= e.target.value));
      });
}

const txtSearch = document.querySelector("#txtSearch");
txtSearch.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
      if (value) {
        displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
      } else {
        displayProducts(data);
      }
});

displayProducts(data);
setCategories();
setPrices();
setColors();




// function displayProducts() {
//   const productContainers = data.map(createProductContainer);
//   productsContainer.append(...productContainers);
//}

// function createProductContainer(product) {
//   const productContainer = document.createElement("div");
//   productContainer.classList.add("product");

//   const productImage = document.createElement("img");
//   productImage.src = product.img;
//   productImage.alt = product.name;

//   const productDetails = document.createElement("div");
//   productDetails.classList.add("product-details");
//   productDetails.innerHTML = `
//       <span class="name">${product.name}</span>
//       <span class="amt">Rs.${product.amt}</span>
//       <span class="seller">${product.seller}</span>
//   `;

//   productContainer.append(productImage, productDetails);

//   // Add a click event listener to each product container
//   productContainer.addEventListener("click", function () {
//       navigateToDetails(product.id);
//   });

//   return productContainer;
// }

// function navigateToDetails(productId) {
//   // Navigate to the details page with the product ID
//   window.location.href = `details.html?id=${productId}`;
// }

// Call the function to display products when the page loads
//displayProducts();



// function navigateToDetails(productId) {
//   // Navigate to the details page with the product ID
//   window.location.href = `details.html?id=${productId}`;
// }

// Call the function to display products when the page loads
//displayProducts();


// function displayProduct() {
//   for (let i = 0; i < data.length; i++) {
//       const product = data[i];
//       const productContainer = createProductContainer(product);
//       productsContainer.appendChild(productContainer);
//   }
// }

// function createProductContainer(product) {
//   const productContainer = document.createElement("div");
//   productContainer.classList.add("product");

//   const productImage = document.createElement("img");
//   productImage.src = product.img;
//   productImage.alt = product.name;

//   productContainer.appendChild(productImage);

//   const productDetails = document.createElement("div");
//   productDetails.classList.add("product-details");
//   productDetails.innerHTML = `
//       <span class="name">${product.name}</span>
//       <span class="amt">Rs.${product.amt}</span>
//       <span class="seller">${product.seller}</span>
//   `;

//   productContainer.appendChild(productDetails);

//   // Add a click event listener to each product container
//   productContainer.addEventListener("click", function () {
//       navigateToDetails(product.id);
//   });

//   return productContainer;
// }



function navigateToDetails(productId) {
  // Navigate to the details page with the product ID
  window.location.href = `details.html?id=${productId}`;
}

// // Call the function to display products when the page loads
// displayProduct();





