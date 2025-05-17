 const toggle = document.getElementById('darkToggle');
  let dark = false;

  toggle.addEventListener('click', () => {
    document.documentElement.style.setProperty('--white', dark ? '#ffffff' : '#121212');
    document.documentElement.style.setProperty('--dark-gray', dark ? '#333333' : '#ffffff');
    document.documentElement.style.setProperty('--light-gray', dark ? '#f5f7fa' : '#1e1e1e');
    document.body.style.backgroundColor = dark ? '#ffffff' : '#121212';
    dark = !dark;
  });