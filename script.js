let cart = [];
function addToCart(name, price) {
    cart.push({ name, price });
    showCart();


}
    function showCart() {
    const cartBody = document.getElementById('cartBody');
    cartBody.innerHTML = '';
    cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${item.name}</td>
    <td>Rp ${item.price.toLocaleString()}</td>
    <td><button onclick="removeFromCart(${index})">Hapus</button></td>
    `;
    cartBody.appendChild(row);
    });
    document.getElementById('cartModal').style.display = 'block';
}
function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}
function printReceipt() {
    let receiptContent = 'Struk Belanja\n\n';
    cart.forEach(item => {
    receiptContent += `${item.name} - Rp ${item.price.toLocaleString()}\n`;
    });
    receiptContent += `\nTotal: Rp ${cart.reduce((total, item) => total + item.price,
0).toLocaleString()}`;
    alert(receiptContent);
}


// Fungsi untuk efek fade-in
function fadeIn(element) {
    element.style.opacity = 0;
    let last = +new Date();
    const fade = function () {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(fade);
        }
    };
    fade();
}
function wa(){
    const Message = `Saya ingin beli sepatu merah dengan harga ` 
    const url =`https://wa.me/6285694917839?text$={Message}`;

    window.open(url, '_blank');
}
function login() {
    window.location.href = 'produk.html';
}
