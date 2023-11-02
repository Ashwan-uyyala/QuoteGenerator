const quote_text=document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
soundBtn=document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
instaBtn=document.querySelector(".instagram"),
quoteBtn=document.querySelector("button");


function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote..."
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
        quote_text.innerText= result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote";
        quoteBtn.classList.remove("loading");
        confetti();
    });
}

soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quote_text.innerText} by ${authorName.innerText} thankyou! by Ashwan`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quote_text.innerText);
});

instaBtn.addEventListener("click",()=>{
    let instagramUrl=`https://instagram.com/instagram/post?url=${quote_text.innerText}`;
    window.open(instagramUrl, "_blank");
});
quoteBtn.addEventListener("click", randomQuote);
