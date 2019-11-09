// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleParent = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  const newArticle = res.data.articles;

  newArticle.bootstrap.forEach(element => {
    articleParent.append(Article(element));
  });
  newArticle.javascript.forEach(element => {
    articleParent.append(Article(element));
  });
  newArticle.jquery.forEach(element => {
    articleParent.append(Article(element));
  });
  newArticle.node.forEach(element => {
    articleParent.append(Article(element));
  });
  newArticle.javascript.forEach(element => {
    articleParent.append(Article(element));
  });
});
function Article(articleContent) {
  // Creating Elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  // Adding Classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // Adding Element Content
  headline.textContent = articleContent.headline;
  img.src = articleContent.authorPhoto;
  authorName.textContent = `By ${articleContent.authorName}`;

  // appending Children
  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.appendChild(img);

  // return card
  return card;
}
