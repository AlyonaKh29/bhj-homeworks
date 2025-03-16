const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(form);
    
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

    xhr.upload.onprogress = event => {
        progress.value = event.loaded / event.total;
    };

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log('Успешно: ', xhr.status);
          alert('Файл был успешно загружен на сервер!');
        } else {
          console.error('Ошибка загрузки файла: ', xhr.statusText);
        }
      };

    xhr.send(data);
});