function toggleCompletion(event) {
    event.target.classList.toggle('completed');
}

function addNewItem() {
    const itemText = document.getElementById('newItemText').value.trim();

    if (itemText === "") {
        return;
    }

    const listId = document.getElementById('listType').value;
    const targetList = document.getElementById(listId);
    
    const newListItem = document.createElement('li');
    newListItem.textContent = itemText;
    
    newListItem.addEventListener('click', toggleCompletion);
    
    targetList.appendChild(newListItem);

    document.getElementById('newItemText').value = '';
}

const addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener('click', addNewItem);

const lists = document.querySelectorAll('ul li, ol li');

lists.forEach(item => {
    item.addEventListener('click', toggleCompletion);
});
