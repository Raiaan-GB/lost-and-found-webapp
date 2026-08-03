// handles the lost item from the submission of the form
// This function retrieves the values from the form fields and creates an object to store in localStorage
function handleLostForm(event) {
  event.preventDefault();

  const item = {
    type: document.getElementById("itemType").value,
    name: document.getElementById("itemTitle").value,
    description: document.getElementById("description").value,
    location: document.getElementById("location").value,
    date: document.getElementById("dateLost").value,
    contact: document.getElementById("contact").value,
    timestamp: new Date().toISOString()
  };

  const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
  lostItems.push(item);
  localStorage.setItem("lostItems", JSON.stringify(lostItems));

  alert("Lost item submitted successfully!");
  document.getElementById("lostForm").reset();
}

// handles the found item from the submission of the form
// This function retrieves the values from the form fields and creates an object to store in localStorage
function handleFoundForm(event) {
  event.preventDefault();

  const foundItem = {
    type: document.getElementById("itemType").value,
    name: document.getElementById("itemTitle").value,
    description: document.getElementById("description").value,
    location: document.getElementById("location").value,
    date: document.getElementById("dateFound").value,
    contact: document.getElementById("contact").value,
    timestamp: new Date().toISOString()
  };

  const foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];
  foundItems.push(foundItem);
  localStorage.setItem("foundItems", JSON.stringify(foundItems));

  alert("Found item submitted successfully!");
  document.getElementById("foundForm").reset();
}

// shows the most recent lost and found items on the homepage
// This function retrieves the last two lost and found items from localStorage and displays them
function displayRecentItems() {
  const lostItems = JSON.parse(localStorage.getItem("lostItems")) || [];
  const foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];

  const recentLost = lostItems.slice(-2).reverse();
  const recentFound = foundItems.slice(-2).reverse();

  const lostContainer = document.getElementById("recent-lost");
  const foundContainer = document.getElementById("recent-found");

  if (lostContainer && foundContainer) {
    lostContainer.innerHTML = "";
    foundContainer.innerHTML = "";

    if (recentLost.length === 0) {
      lostContainer.innerHTML = "<p class='text-muted'>No recent lost items.</p>";
    } else {
      recentLost.forEach(item => {
        lostContainer.innerHTML += createItemCard(item);
      });
    }

    if (recentFound.length === 0) {
      foundContainer.innerHTML = "<p class='text-muted'>No recent found items.</p>";
    } else {
      recentFound.forEach(item => {
        foundContainer.innerHTML += createItemCard(item);
      });
    }
  }
}

// dynamic card creation for lost and found items
// This function creates a card for each item and returns the HTML string
function createItemCard(item) {
  return `
    <div class="card mb-3 text-start shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle text-muted mb-2">${item.type?.toUpperCase() || 'Unknown Type'}</h6>
        <p class="card-text">${item.description}</p>
        <p class="card-text"><strong>Location:</strong> ${item.location}</p>
        <p class="card-text"><strong>Date:</strong> ${item.date}</p>
        <p class="card-text"><strong>Contact:</strong> ${item.contact}</p>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  displayRecentItems();
});
