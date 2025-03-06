const textContent = document.querySelectorAll("#categories .item");

console.log(`Numbers of categories: ${textContent.length}`);

textContent.forEach((item) => {
    const category = item.querySelector("h2").textContent;
    const itemLenght = item.querySelectorAll("ul li").length;

    console.log(`Category: ${category}`);
    console.log(`Elements: ${itemLenght}`);
});

