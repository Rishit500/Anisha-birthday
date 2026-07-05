window.addEventListener("load", () => {

    const container = document.querySelector(".floating-hearts");

    for(let i=0;i<25;i++){

        const heart=document.createElement("span");

        heart.innerHTML="❤";

        heart.style.left=Math.random()*100+"%";

        heart.style.animationDuration=(6+Math.random()*8)+"s";

        heart.style.animationDelay=Math.random()*5+"s";

        heart.style.fontSize=(15+Math.random()*25)+"px";

        container.appendChild(heart);

    }

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

        document.getElementById("website").style.display="block";

    },3000);

});
