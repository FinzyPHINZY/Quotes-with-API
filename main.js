let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector(".btn");

btn.addEventListener("click", getQuote);

function getQuote() {
  const url = "https://api.quotable.io/quotes/random";
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      quote.textContent = data[0].content;
      author.textContent = data[0].author;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  btn.textContent = "Anotha One...";
}
