document.addEventListener('DOMContentLoaded', () => {
    const signin = document.getElementById('signin');
    const signinBtn = document.getElementById('signin__btn');
    const signoutBtn = document.getElementById('signout__btn');
    const id = document.getElementById('user_id');
    const welcome = document.getElementById('welcome');
    
    if (window.localStorage.getItem('user')) {
        showWelcome();
    } else {
        signinBtn.addEventListener('click', (event) => {
            event.preventDefault();
            authorizeUser();
        }); 
    }

    function showWelcome() { 
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        id.textContent = window.localStorage.getItem('user');
        deauthorize(); 
    }

    function deauthorize() { 
        signoutBtn.addEventListener('click', () => {
            localStorage.removeItem('user');
            signin.classList.add('signin_active');
            welcome.classList.remove('welcome_active');
        })
    }

    async function authorizeUser() {
        const login = document.getElementsByName('login')[0].value;
        const password = document.getElementsByName('password')[0].value;
        try {
            let response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ login, password })
            });
        
            let data = await response.json();
            if (data.success) {
                localStorage.setItem('user', data.user_id);
                showWelcome();
            } else {
                alert('Неверный логин/пароль');
            }
        } catch (error) {
            console.error('Ошибка при авторизации', error);
        } finally {
            document.getElementById('signin__form').reset();
        };
    }        
})
    
        

