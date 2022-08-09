
const existsData = JSON.parse(localStorage.getItem("cartItem"));
console.log(existsData);
var cart= document.getElementById("cart");
console.log(cart);
(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        //console.log(data)
        for(let pid of existsData){
            
            for(let d of data){
                
                if(pid == d.id){
                    console.log(d);
                    let cartData = `<div class="cart-item cart-column">
                    <img class="cart-item-image" src="${d.image}" width="100" height="100">
                    <span class="cart-item-title">${d.category}</span>
                    <span class="cart-price cart-column">${d.price}</span>
                    <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1" min="1">
                   
                    </div>   
                    </div>
                    `
                    cart.innerHTML +=cartData;
                }
            }
        }
    })   
})();

