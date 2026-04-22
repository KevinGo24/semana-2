function menu() {
    // Selecting by ID or Query is generally safer
    const menuItems = document.querySelector('.menu-items');
    const button = document.getElementById('btn');
    
    menuItems.classList.toggle('active');
    button.classList.toggle('bt_active');
  }