let paragraphBtn = document.getElementById("p-button");
let paragraphDiv = document.getElementById("p-div");

paragraphBtn.onclick = function (){
    paragraphDiv.style.display = "block";
    imagesDiv.style.display = "none";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "JUST A TEST";
    paragraphDiv.appendChild(paragraph);
    console.log(paragraph);
}

let imagesBtn = document.getElementById("img-button");
let imagesDiv = document.getElementById("img-div");

imagesBtn.onclick = function (){
    imagesDiv.style.display = "block";
    paragraphDiv.style.display = "none";

    let images = document.createElement("img");
    images.src = "images/chipple.png";
    imagesDiv.appendChild(images);
    console.log(images);
}