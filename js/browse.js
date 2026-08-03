document.addEventListener('DOMContentLoaded', () => {
  const itemSourceSelect = document.getElementById('itemSource');
  const itemTypeSelect = document.getElementById('filterType');
  const itemList = document.getElementById('itemList');

  const lostItems = JSON.parse(localStorage.getItem('lostItems')) || [];
  const foundItems = JSON.parse(localStorage.getItem('foundItems')) || [];

  function renderItems() {
    const selectedSource = itemSourceSelect.value;
    const selectedType = itemTypeSelect.value;

    let items = [];

    if (selectedSource === 'lost') {
      items = lostItems;
    } else if (selectedSource === 'found') {
      items = foundItems;
    } else {
      items = [...lostItems, ...foundItems];
    }

    if (selectedType !== 'all') {
      items = items.filter(item => item.type === selectedType);
    }

    itemList.innerHTML = '';

    if (items.length === 0) {
      itemList.innerHTML = '<p class="text-center">No matching items found.</p>';
      return;
    }

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';

      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              ${item.type.charAt(0).toUpperCase() + item.type.slice(1)} • ${item.date || 'Unknown Date'}
            </h6>
            <p class="card-text">${item.description}</p>
            <p class="card-text"><strong>Location:</strong> ${item.location}</p>
            <p class="card-text"><strong>Contact:</strong> ${item.contact}</p>
          </div>
        </div>
      `;
      itemList.appendChild(card);
    });
  }

  itemSourceSelect.addEventListener('change', renderItems);
  itemTypeSelect.addEventListener('change', renderItems);

  renderItems(); // initial load
});
