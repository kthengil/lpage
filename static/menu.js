 
  const menuContainer = document.getElementById('menu');
  
  fetch('menu.json')
    .then(response => response.json())
    .then(menuData => {
      const menuHTML = generateMenu(menuData);
      menuContainer.innerHTML = menuHTML;
    })
    .catch(error => console.error('Error fetching menu:', error));
  
  function generateMenu(menuItems) {
    let menuHTML = '<ul>';
    
    menuItems.forEach(item => {
      menuHTML += '<li>';
      menuHTML += `<a href="${item.url}">${item.label}</a>`;
      
      if (item.submenu) {
        menuHTML += generateMenu(item.submenu);
      }
      
      menuHTML += '</li>';
    });
  
    menuHTML += '</ul>';
    return menuHTML;
  }