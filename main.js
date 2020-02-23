let productImage = document.querySelector(".product-image");
let zoom = false;

productImage.addEventListener("click", function () {
    zoom = !zoom;
    changeZoom();
});

productImage.addEventListener("mousemove", function (e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    
    x = (x / this.offsetWidth) * 100;
    y = (y / this.offsetHeight) * 100;
    
    productImage.style.backgroundPosition = `${x}% ${y}%`;
});

productImage.addEventListener("mouseout", function () {
    zoom = false;
    changeZoom();
});

function changeZoom() 
{
    zoom ? productImage.classList.add("zoom") : productImage.classList.remove("zoom");
}