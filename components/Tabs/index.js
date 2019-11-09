// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabParent = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics").then(res => {
  const newTab = res.data.topics;
  newTab.forEach(element => {
    tabParent.appendChild(Tabs(element));
  });
});

function Tabs(tabContent) {
  // Create Element
  const tab = document.createElement("div");

  // Add Class
  tab.classList.add("tab");

  // Add Text Content
  tab.textContent = tabContent;

  // Return Tab
  return tab;
}
