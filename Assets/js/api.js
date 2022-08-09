// fetch all product display

const apiUrl = "https://fakestoreapi.com/products";
fetch(apiUrl)
  .then((data) => {
    return data.json();
  })
  .then((completeData) => {
    //console.log(completeData);
    let data1 = "";
    completeData.map((values) => {
      data1 +=
        '<div class="card">' +
        '<h1 class="title">' +
        values.title +
        "</h1>" +
        '<img src="' +
        values.image +
        '" alt="img" class="img">' +
        '<p class="description">' +
        values.description +
        "</p>" +
        '<p class="categroy">' +
        values.category +
        "</p>" +
        '<p class="price" id="price">' +
        values.price +
        "</p>" +
        '<div class="moveCart"><button class="cart" onClick="addToCart(' +
        values.id +
        ')">Add Cart</button></div>' +
        "</div>";
    });
    document.getElementById("cards").innerHTML = data1;

    //// category display

    const Dropbtn = document.getElementById("dropbtn");
    Dropbtn.addEventListener("click", () => {
      let apiCategory = "https://fakestoreapi.com/products/categories";
      fetch(apiCategory)
        .then((data1) => {
          return data1.json();
        })
        .then((completeCategory) => {
          let dataDisplay0 = "";

          completeCategory.map((values) => {
            dataDisplay0 +=
              "<span>" +
              '<a href="#' +
              values +
              '" id="' +
              values +
              '" class="Collection">' +
              values +
              "</a>" +
              "</span>";
          });
          document.getElementById("dropdown-content").innerHTML = dataDisplay0;
          const Men = document.getElementById("men's clothing");
          const Women = document.getElementById("women's clothing");
          const Electronic = document.getElementById("electronics");
          const Jewelery = document.getElementById("jewelery");

          ////Mens clothing Fetch

          Men.addEventListener("click", () => {
            const apiMen =
              "https://fakestoreapi.com/products/category/men's%20clothing";
            fetch(apiMen)
              .then((data) => {
                return data.json();
              })
              .then((completeDataMen) => {
                //console.log(completeData);
                let dataDisplay1 = "";
                completeDataMen.map((values) => {
                  dataDisplay1 +=
                    '<div class="card">' +
                    '<h1 class="title">' +
                    values.title +
                    "</h1>" +
                    '<img src="' +
                    values.image +
                    '" alt="img" class="img">' +
                    '<p class="description">' +
                    values.description +
                    "</p>" +
                    '<p class="categroy">' +
                    values.category +
                    "</p>" +
                    '<p class="price" id="price">' +
                    values.price +
                    "</p>" +
                    '<div class="moveCart"><button class="cart" id="cart" onClick="addToCart(' +
                    values.id +
                    ')">Add Cart</button></div>' +
                    "</div>";
                });
                document.getElementById("cards").innerHTML = dataDisplay1;
              });
          });

          //// womens clothing fetch

          Women.addEventListener("click", () => {
            const apiWomen =
              "https://fakestoreapi.com/products/category/women's%20clothing";
            fetch(apiWomen)
              .then((data) => {
                return data.json();
              })
              .then((completeDataWomen) => {
                let dataDisplay2 = "";
                completeDataWomen.map((values) => {
                  dataDisplay2 +=
                    '<div class="card">' +
                    '<h1 class="title">' +
                    values.title +
                    "</h1>" +
                    '<img src="' +
                    values.image +
                    '" alt="img" class="img">' +
                    '<p class="description">' +
                    values.description +
                    "</p>" +
                    '<p class="categroy">' +
                    values.category +
                    "</p>" +
                    '<p class="price" id="price">' +
                    values.price +
                    "</p>" +
                    '<div class="moveCart"><button class="cart" id="cart" onClick="addToCart(' +
                    values.id +
                    ')">Add Cart</button></div>' +
                    "</div>";
                });
                document.getElementById("cards").innerHTML = dataDisplay2;
              });
          });

          ///Electronic display

          Electronic.addEventListener("click", () => {
            const apiElectronics =
              "https://fakestoreapi.com/products/category/electronics";
            fetch(apiElectronics)
              .then((data) => {
                return data.json();
              })
              .then((completeDataElectronics) => {
                let dataDisplay3 = "";
                completeDataElectronics.map((values) => {
                  dataDisplay3 +=
                    '<div class="card">' +
                    '<h1 class="title">' +
                    values.title +
                    "</h1>" +
                    '<img src="' +
                    values.image +
                    '" alt="img" class="img">' +
                    '<p class="description">' +
                    values.description +
                    "</p>" +
                    '<p class="categroy">' +
                    values.category +
                    "</p>" +
                    '<p class="price" id="price">' +
                    values.price +
                    "</p>" +
                    '<div class="moveCart"><button class="cart" id="cart" onClick="addToCart(' +
                    values.id +
                    ')">Add Cart</button></div>' +
                    "</div>";
                });
                document.getElementById("cards").innerHTML = dataDisplay3;
                const Tocart = document.querySelectorAll(".moveCart");
              });
          });

          //// Jewelery display

          Jewelery.addEventListener("click", () => {
            const apiJewelery =
              "https://fakestoreapi.com/products/category/jewelery";
            fetch(apiJewelery)
              .then((data) => {
                return data.json();
              })
              .then((completeDataJewelery) => {
                //console.log(completeDataJewelery);
                let dataDisplay4 = "";

                completeDataJewelery.map((values) => {
                  dataDisplay4 +=
                    '<div class="card">' +
                    '<h1 class="title">' +
                    values.title +
                    "</h1>" +
                    '<img src="' +
                    values.image +
                    '" alt="img" class="img" id="img">' +
                    '<p class="description">' +
                    values.description +
                    "</p>" +
                    '<p class="categroy" id="categories">' +
                    values.category +
                    "</p>" +
                    '<p class="price" id="price">' +
                    values.price +
                    "</p>" +
                    '<div  class="moveCart" ><button class="cart" id="cart" onClick="addToCart(' +
                    values.id +
                    ')" >Add Cart</button></div>' +
                    "</div>";
                });

                document.getElementById("cards").innerHTML = dataDisplay4;
              });
          });
        });
    });
  })
  .catch((err) => {
    console.log(err);
  });

const existCartData1 = JSON.parse(localStorage.getItem("cartItem")) || [];
console.log(existCartData1);
const cartItem = [];
const addToCart = (id) => {
  // console.log(id);
  // alert(id);
  // cartItem.push(id);
  for (let pid of existCartData1) {
    if (pid == id) {
      return;
    }
  }
  existCartData1.push(id);
  localStorage.setItem("cartItem", JSON.stringify(existCartData1));
  alert("item added to cart");
};

// Open https://codesandbox.io/s/new and create a new React component with 2 input fields, input1 and input2. Users can type any number in either of these input fields. You need to ensure that (input2 minus input1) is equal to 1 always. Means if user type value 5 in input1 then input2 value should change to 6 (to make input2 - input1 = 1). And similarly, if input2 value is 100 then input1 value should change to 99. You need to just play around with input values
// Note: In the UI only 2 input fields s
