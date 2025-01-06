document.addEventListener('DOMContentLoaded', () => {
  const htmlElement = document.documentElement;
  const logo1 = document.getElementById('logoHeader');
  const logo2 = document.getElementById('logoFooter');
  
  const Button = document.getElementById('themeToggle');


  const updateLogo = (theme) => {
    logo1.src = theme === 'dark' ? 'img/favicon/favi-whiteyellow.png' : 'img/favicon/favi-blackyellow.png';
    logo2.src = theme === 'dark' ? 'img/favicon/favi-whiteyellow.png' : 'img/favicon/favi-blackyellow.png';
    
    if(theme === 'dark'){
      Button.innerHTML = 'Light Mode';
    }
    else{
      Button.innerHTML = 'Dark Mode';
    }
  };

  
  const setTheme = (theme) => {
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    updateLogo(theme);
  };

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }


  Button.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    if(newTheme === 'dark'){
      Button.innerHTML = 'Light Mode';
    }
    else{
      Button.innerHTML = 'Dark Mode';
    }
    setTheme(newTheme); 
  });
});
/* 

dropdownItems = document.querySelector('.dropprice');

  
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const dropdownButton = document.getElementById('customDrop');
  const price = document.querySelector('.price')
      e.preventDefault();
      dropdownButton.textContent = item.textContent;
      dropdownButton.dataset.value = item.getAttribute('data-value');
      switch (dropdownButton.dataset.value) {
        case "1":
          price.innerHTML = "$15/mo"; 
          break;
        case "2":
          price.innerHTML = "$100/yr";
          break;
        case "3":
          price.innerHTML = "$150/yr";
          break;
        default:
          price.innerHTML = "$200/yr";
          break;
      }
    });
  });
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const dropdownButton = document.getElementById('customDrop1');
  
      e.preventDefault();
      dropdownButton.textContent = item.textContent;
      dropdownButton.dataset.value = item.getAttribute('data-value');
      switch (dropdownButton.dataset.value) {
        case "1":
          price.innerHTML = "$15/mo"; 
          break;
        case "2":
          price.innerHTML = "$100/yr";
          break;
        case "3":
          price.innerHTML = "$150/yr";
          break;
        default:
          price.innerHTML = "$200/yr";
          break;
      }
    });
  });
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const dropdownButton = document.getElementById('customDrop2');
 
      e.preventDefault();
      dropdownButton.textContent = item.textContent;
      dropdownButton.dataset.value = item.getAttribute('data-value');
      switch (dropdownButton.dataset.value) {
        case "1":
          price.innerHTML = "$15/mo"; 
          break;
        case "2":
          price.innerHTML = "$100/yr";
          break;
        case "3":
          price.innerHTML = "$150/yr";
          break;
        default:
          price.innerHTML = "$200/yr";
          break;
      }
    });
  });
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const dropdownButton = document.getElementById('customDrop3');
  
      e.preventDefault();
      dropdownButton.textContent = item.textContent;
      dropdownButton.dataset.value = item.getAttribute('data-value');
      switch (dropdownButton.dataset.value) {
        case "1":
          price.innerHTML = "$15/mo"; 
          break;
        case "2":
          price.innerHTML = "$100/yr";
          break;
        case "3":
          price.innerHTML = "$150/yr";
          break;
        default:
          price.innerHTML = "$200/yr";
          break;
      }
    });
  });

*/ 
