document.addEventListener('DOMContentLoaded', () => {
  const modalContent = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  
  function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
  }
  
  function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
  }
  
  if (!getCookie('close')) {
    modalContent.classList.add('modal_active');
  }
  
  modalClose.addEventListener('click', () => {
    modalContent.classList.remove('modal_active');
    setCookie('close', 'true');
  })
})


  



