function removeMeme(removeButton) {
    removeButton.innerHTML = "Delete";
    removeButton.setAttribute("class", "remove-button");
}

function makeMeme() {
    var imgURL = document.getElementById("img-url").value;
    var topText = document.getElementById("top-text").value;
    var bottomText = document.getElementById("bottom-text").value;

    if(!imgURL) {
        return alert("Please choose an image!");
    }

    var newImg = document.createElement("img");
    newImg.setAttribute("src", imgURL);
    newImg.setAttribute("alt", "Your Meme Image");

    var memeBlock = document.createElement("div");
    memeBlock.setAttribute("class", "meme-block");

    var topLine = document.createElement("figcaption");
    topLine.setAttribute("class", "top-caption");
    topLine.innerHTML = topText;

    var bottomLine = document.createElement("figcaption");
    bottomLine.setAttribute("class", "bottom-caption");  
    bottomLine.innerHTML = bottomText;

    var removeButton = document.createElement("a");

    removeMeme(removeButton);
    
    memeBlock.appendChild(topLine);
    memeBlock.appendChild(newImg);
    memeBlock.appendChild(bottomLine);
    memeBlock.appendChild(removeButton);
    
    var memesSection = document.getElementById("memes-section");
    memesSection.appendChild(memeBlock);

    memesSection.addEventListener("click", function(e) {
        if(e.target.className === "remove-button") {
            e.target.parentNode.remove();
        }
    });  
    document.getElementById("meme-submit").reset();
}
