let quoteID = document.getElementById("quoteID");
let authorID = document.getElementById("authorID");

console.log(quoteID);
console.log(authorID);

async function getQuote() {
    
    try {

        quoteID.innerHTML = "Loading...";
        authorID.innerHTML = "Loading...";

        let result = await fetch('https://dummyjson.com/quotes/random');

        let data = await result.json();

        console.log(data);
        console.log(data.quote);
        console.log(data.author);

        quoteID.innerHTML = data.quote;
        authorID.innerHTML = data.author;

    } catch (error) {
        console.log("Errornya: ", error);
    }
}

getQuote();