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

document.addEventListener("DOMContentLoaded", function () {
    const productId = getProductIdFromUrl();
    const product = getProductById(productId);

    if (product) {
        displayProductDetails(product);
    } else {
        // Handle the case when the product is not found
        console.error("Product not found");
    }
});

function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("id"));
}

function getProductById(productId) {
    return data.find(product => product.id === productId);
}

function displayProductDetails(product) {
    const productDetailsContainer = document.getElementById("productDetails");
    productDetailsContainer.innerHTML = `
        <div class="product-details">
        <div class="main-wrapper">
        <div class="container">
            <div class="product-div">
                <div class="product-div-left">
                    <div class="img-container">
                        <!-- Use JavaScript to dynamically load the selected product image -->
                        <img src="${product.img}" alt="${product.name}" />
                    </div>
                    <div class="hover-container" id="imageThumbnails">
                        <!-- Add more images for the selected product -->
                    </div>
                </div>
                <div class="product-div-right">
                <h3>${product.name}</h3>
                   
                    <p>Price: Rs.${product.amt}</p>
                    <p>Color: ${product.color}</p>
                    <p>Seller: ${product.seller}</p>
                    <p>Category: ${product.catagory}</p>

                    <div class="product-rating">
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star-half-alt"></i></span>
                        <span>(350 ratings)</span>
                    </div>
                   
                    <div class="btn-groups">
                  
                   
                    <a > <button type="button" class="add-cart-btn" onclick='navigateToAddToCard(${product.id})'>Add to cart</button></a>

                    <a href=""> <button type="button" class="buy-now-btn"><i class="fas fa-wallet"></i>Buy Now</button></a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>


           
          
           
      

        </div>
    `;
}

function navigateToAddToCard(productId) {
    // Navigate to the details page with the product ID
    window.location.href = `addtocart.html?id=${productId}`;
  }


// ----------------details----------------------

