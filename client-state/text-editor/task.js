document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearContents = document.querySelector('.clear_contents');
    
    const savedText = localStorage.getItem('savedText');
    editor.value = savedText;
    
    editor.addEventListener('input', (event) => {
        const verifiedValue = event.target.value.trim();
        if (verifiedValue) {
            localStorage.setItem('savedText', event.target.value);
        } else {
            localStorage.removeItem('savedText');
        }
    });
    
    clearContents.addEventListener('click', () => {
        localStorage.removeItem('savedText');
        editor.value = '';
        
    })
})
