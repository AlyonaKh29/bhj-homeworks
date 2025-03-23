document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearContents = document.querySelector('.clear_contents');
    
    const savedText = window.localStorage.getItem('savedText');
    if (savedText) {
        editor.value = savedText;
    }
    
    editor.addEventListener('input', (event) => {
        const verifiedValue = event.target.value.trim();
        if (verifiedValue) {
            window.localStorage.setItem('savedText', event.target.value);
        } else {
            window.localStorage.removeItem('savedText');
        }
    });
    
    clearContents.addEventListener('click', () => {
        window.localStorage.removeItem('savedText');
        editor.value = '';
        
    })
})
