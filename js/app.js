const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".products-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("search-price").querySelector("button"); //sade shode code line(5,6)
// const priceDiv = document.getElementById("search-price");
// const priceButton = priceDiv.querySelector("button");

const changeClass = (filter) => {
    buttons.forEach(button => {
        if (button.dataset.filter === filter) { //filter az (const filter) dar (filterHandler)
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    })
}

const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();  //trim() : delete space one and end
    //console.groupEnd(searchValue);

    //map kar nemikonad
    products.forEach(product => {
        const productName = product.children[1].innerText.toLowerCase();
        // console.dir(productName);  //dir : besurate object namayesh midahad
        if (productName.includes(searchValue)) { //includes : vojude dashtan ,  agar dakhele productName, searchValue vojud dasht
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    })
}

const filterHandler = (event) => {
    //code zir momkene hast dar tedadi broser support nashe, pas khate badi ro minevisim
    // const { filter } = event.target.dataset;  //dataset : hamun data-filter dar buttons dar index.html hast
    const filter = event.target.dataset.filter;
    // console.log(filter);
    changeClass(filter);

    products.forEach(product => {
        const category = product.dataset.category;  //gereftane category(daste bandi) har product
        // console.log(category);
        if (filter === "all") {
            product.style.display = "block";
        } else {
            filter === category
                ? product.style.display = "block"
                : product.style.display = "none";
            // if (filter === category) {
            //     product.style.display = "block";
            // } else {
            //     product.style.display = "none";
            // }
        }
    })
}

const searchPriceHandler = (event) => {
    //     //mitunim ham mostaghim be div ya input, id ya class bedim
    //     //button select shode(searchPrice) ro migirim, badesh element parent yani div asli migirim, badesh children[0] ke input hast migirim
    const searchPrice = +event.target.parentElement.children[0].value;                                //children[1] mishe button
    // console.log(searchPrice);

    products.forEach(product => {
        const productPrice = product.children[2].innerText;
        const price = +productPrice.split(" ")[1];
        // console.log(productPrice);
        // console.log(price);
        if (!searchPrice) {  //agar chizi vared nashode bud hame ro neshun bede
            product.style.display = "block";
        } else {
            searchPrice === price
                ? product.style.display = "block"
                : product.style.display = "none";
        }
    })
}

// const start = () => {
//ba foreach 4 button ro gereftim va hamzaman ru 4ta addEventListener zadim
buttons.forEach(button => {
    button.addEventListener("click", filterHandler);
});
searchInput.addEventListener("keyup", searchHandler);
priceButton.addEventListener("click", searchPriceHandler);
// }

// window.addEventListener("load", start); //vaghti safhe load shod, func start ro ejra kon
