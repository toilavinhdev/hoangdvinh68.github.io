// ================== Cart =======================
let open_cart = document.getElementById("btn-cart-header");
let cart_container = document.getElementsByClassName("cart-container")[0];
let close_cart = cart_container.children[0];


open_cart.addEventListener("click", event =>{
    cart_container.style.display = "block";
})

close_cart.addEventListener("click", event => {
    cart_container.style.display = "none";
})

// ============== Them vao gio hang ===================
// lay thong tin sp
function add_to_cart(e) {
    var product_item = e.parentElement.children; //container product
    var src_img = product_item[0].style.backgroundImage.slice(5, -2);
    var name = product_item[1].children[0].innerText;
    var price = product_item[1].children[1].children[0].innerText
    cart_add_item(src_img, name, price);
}
// hien thi tren gio hang
function cart_add_item(src_img, name, price) {
    var cart_products = document.getElementById("cart-products");
    var new_product = document.createElement("div");
    cart_products.append(new_product);

    var content = '<div class="cart-product"><div class="l-4 m-4 c-5 cart-product-img" style="background-image: url('+ src_img +');"></div><div class="l-8 m-8 c-7 cart-product-infor"><p class="cart-product-name">'+ name +'<p class="cart-product-price"><span>'+price+'</span>₫</p><button class="cart-product-delete" onclick="cart_delete_item(this)">Xóa</button></div></div>'
    new_product.innerHTML = content;
    cal_total(price)
    popup();
}

// popup
function popup() {
    document.getElementsByClassName("popup-container")[0].style.display = "block";
    setTimeout(function() {
        document.getElementsByClassName("popup-container")[0].style.display = "none";
    }, 1000)
}


function cal_total(price) {
    element_total = document.getElementById("total");
    total_old = parseFloat(element_total.innerText)
    var total_new = total_old + parseFloat(price)
    element_total.innerText = total_new.toFixed(3)

    quantity_old = document.getElementById("quantity") //element
    quantity_old.innerHTML = parseInt(quantity_old.innerText) + 1;

}


//Xoa sp
function cart_delete_item(item) {
    let product = item.parentElement.parentElement
    product.remove()

    let price = item.parentElement.children[1].children[0].innerText;
    console.log(price)

    element_total = document.getElementById("total");
    total_old = parseFloat(element_total.innerText)
    var total_new = total_old - parseFloat(price)
    element_total.innerText = total_new.toFixed(3)

    quantity_old = document.getElementById("quantity") //element
    quantity_old.innerHTML = parseInt(quantity_old.innerText) -1;
}

