// Share Button
function shareCard() {

    if (navigator.share) {

        navigator.share({
            title: "ARAR Business Center",
            text: "Visit my Digital Business Card",
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Digital Card link copied successfully.");

    }

}

// Gallery Popup
const gallery = document.querySelectorAll(".gallery-grid img");

gallery.forEach(img => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");
        popup.className = "popup";

        popup.innerHTML = `
            <span class="close">&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(popup);

        popup.querySelector(".close").onclick = () => {
            popup.remove();
        };

        popup.onclick = (e) => {
            if(e.target === popup){
                popup.remove();
            }
        };

    });

});

// ESC Key Close
document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        const popup=document.querySelector(".popup");

        if(popup){
            popup.remove();
        }

    }

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});