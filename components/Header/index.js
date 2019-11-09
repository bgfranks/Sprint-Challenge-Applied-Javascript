// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const parentHeader = document.querySelector(".header-container");

function Header() {
  // Creating DOM Elements
  const header = document.createElement("div");
  const date = document.createElement("span");
  const logo = document.createElement("h1");
  const temperature = document.createElement("span");

  // Adding Classes
  header.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  // Adding Text Content
  date.textContent = "SMARCH 28, 2019";
  logo.textContent = "Lambda Times";
  temperature.textContent = "98°";

  // Append Children
  header.append(date, logo, temperature);

  // Returning the header
  return header;
}

parentHeader.appendChild(Header());
