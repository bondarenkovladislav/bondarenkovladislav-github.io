$('.clickable').click( function(e) {
    e.preventDefault();

    switch (e.target.id) {
        case 'two':{
            createWindow("2. Кинематика материальной точки(система отсчета, траектория, путь, скорость и ускорение)", 'res/AnswerImages/2.jpg');
        }

    }

    function createWindow(head,imgSrc){
        let newWin = window.open('answers.html');
        newWin.onload = function() {
            // создать div в документе нового окна
            let img = newWin.document.createElement('img'),
                body = newWin.document.body;
            img.className = 'img-fluid';

            let header = newWin.document.createElement('h2');
            header.textContent = head;
            img.src = imgSrc;
            body.insertBefore(header, body.firstChild);
            // body.insertBefore(header, body.firstChild);
            body.appendChild(img);
        }
    }
} );