// All the relevant URLs of this app
var SEARCH_BY_INGREDIENT_URL = "search-by-ingredient.html";

// References to all cells in main grid
var r1c1 = document.getElementById("r1c1");
var r1c2 = document.getElementById("r1c2");
var r2c1 = document.getElementById("r2c1");
var r2c2 = document.getElementById("r2c2");
var r3c1 = document.getElementById("r3c1");
var r3c2 = document.getElementById("r3c2");

r1c1.onclick = function () {
    r1c1.style.zIndex = "1";
    r1c1.style.top = "0%";
    r1c1.style.right = "0%";
    r1c1.style.bottom = "0%";
    r1c1.style.left = "0%";
    setTimeout(function() {
        window.location.href = SEARCH_BY_INGREDIENT_URL;
    }, 900);
};

r1c2.onclick = function () {
    r1c2.style.zIndex = "1";
    r1c2.style.top = "0%";
    r1c2.style.right = "0%";
    r1c2.style.bottom = "0%";
    r1c2.style.left = "0%";
};

r2c1.onclick = function () {
    r2c1.style.zIndex = "1";
    r2c1.style.top = "0%";
    r2c1.style.right = "0%";
    r2c1.style.bottom = "0%";
    r2c1.style.left = "0%";
};

r2c2.onclick = function () {
    r2c2.style.zIndex = "1";
    r2c2.style.top = "0%";
    r2c2.style.right = "0%";
    r2c2.style.bottom = "0%";
    r2c2.style.left = "0%";
};
    
r3c1.onclick = function () {
    r3c1.style.zIndex = "1";
    r3c1.style.top = "0%";
    r3c1.style.right = "0%";
    r3c1.style.bottom = "0%";
    r3c1.style.left = "0%";
};

r3c2.onclick = function () {
    r3c2.style.zIndex = "1";
    r3c2.style.top = "0%";
    r3c2.style.right = "0%";
    r3c2.style.bottom = "0%";
    r3c2.style.left = "0%";
};

function goToURL(url) {
    window.location.href = url;
}