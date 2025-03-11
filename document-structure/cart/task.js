document.addEventListener('DOMContentLoaded', () => {
    const products = Array.from(document.getElementsByClassName('product'));
    const cartProducts = document.querySelector('.cart__products');
    const cart = document.querySelector('.cart');
    cart.classList.add('cart__remove');
    productAddToCart();
    cartRemoveProducts();
    
    function increase(element, value) {  // Увеличить количество товара (нажатие на кнопку "плюс")
        const inc = element.querySelector('.product__quantity-control_inc');
        inc.addEventListener('click', () => {
            value.textContent = parseInt(value.textContent) + 1;
        });
    }
    
    function decrease(element, value) {  // Уменьшить количество товара (нажатие на кнопку "минус")
        const dec = element.querySelector('.product__quantity-control_dec');
        dec.addEventListener('click', () => {
            value.textContent = parseInt(value.textContent) - 1;
            if (value.textContent < 1) {
                value.textContent = 1;
            }
        });
    }
    
    function productAddToCart () {  // Добавление товара в корзину 
        products.forEach((product) => {
            const value = product.querySelector('.product__quantity-value');
            const dataID = product.getAttribute('data-id');
            const imgAttr = product.querySelector('.product__image').getAttribute('src');
            increase(product, value);
            decrease(product, value);
            const productAdd = product.querySelector('.product__add');
    
            productAdd.addEventListener('click', () => {
                cart.classList.remove('cart__remove');
                const productsList = Array.from(cartProducts.children);
                const foundProduct = productsList.find(child => child.getAttribute('data-id') === dataID);
                if (foundProduct) {    // Если товар уже есть в корзине, то его количество суммируется
                    const count = foundProduct.querySelector('.cart__product-count');
                    count.textContent = parseInt(count.textContent) + parseInt(value.textContent);
                } else {   // Если товара нет в корзине, то создаётся новый <div class="cart__product">
                    addFirstProduct(dataID, imgAttr, value.textContent);
                };
                value.textContent = 1;
                productRemove(); 
            })    
        })    
    }
    
    function addFirstProduct(dataID, imgAttr, value) {  // Добавление в корзину нового товара
        const elementContent = `<div class="cart__product" data-id="${dataID}">
          <img class="cart__product-image" src="${imgAttr}">
          <div class="cart__product-count">${value}</div>
          <img src="https://img.icons8.com/?size=100&id=4887&format=png&color=000000" class="cart__product-remove icon"></img>
        </div>`;
        cartProducts.insertAdjacentHTML("beforeEnd", elementContent);
    }
    
    function productRemove() {  // Нажатие на кнопку "Удалить товар из корзины"
        const newProduct = cartProducts.lastElementChild;
        const elementRemove = newProduct.querySelector('.cart__product-remove');
        elementRemove.addEventListener('click', () => {
            newProduct.remove();
            if (!document.querySelector('.cart__product')) {
                cart.classList.add('cart__remove'); // Корзина удаляется, если пустая
            }
        })
    }
    
    function cartRemoveProducts() {  // Нажатие на кнопку "Очистить корзину"
        const cartRemove = document.querySelector('.remove_products');
        cartRemove.addEventListener('click', () => {
            cart.classList.add('cart__remove');
            Array.from(cartProducts.children).forEach((item) => {
                item.remove();
            })
        })
    }
})




  





