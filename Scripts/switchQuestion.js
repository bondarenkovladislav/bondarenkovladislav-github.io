$('.clickable').click( function(e) {
    e.preventDefault();
    console.log(e.target.id);
    switch (e.target.id) {
        case 'one':
            createWindow("1. Механика, ее разделы и основные понятия(материальная точка, абсолютно твердое тело, ситема отсчета, радиус-вектор и пр.)", 'res/AnswerImages/1.jpeg');
            break;
        case 'two':
            createWindow("2. Кинематика материальной точки(система отсчета, траектория, путь, скорость и ускорение)", 'res/AnswerImages/2.jpg');
            break;
        case 'three':
            createWindow("3. Кинематика абсолютно твердого тела (поступательное и вращательное движение, соотношение между линейными и угловыми кинематическими величинами)",'res/AnswerImages/3.jpeg')
            break;
        case 'four':
            createWindow('4. Динамические величины: масса, сила, момент силы, импульс,\n' +
                '    момент импульса. Принцип относительности Галилея. Преобразования Галилея', 'res/AnswerImages/4.jpeg');
            break;
        case 'five':
            createWindow("5. Инерциальные системы отсчета. Законы Ньютона",'res/AnswerImages/5.jpeg');
            break;
        case 'six':
            createWindow("6. Обобщение второго закона Ньютона на случай неинерциальных систем отсчета.\n" +
                "    Силы инерции", 'res/AnswerImages/6.jpg');
            break;
        case 'seven':
            createWindow("7. Дифференциальные уравнения движения и основная задача динамики материальной точки", 'res/AnswerImages/7.jpeg');
            break;
        case 'eight':
            createWindow("8. Динамика системы материальных точек(центр масс системы,\n" +
                "        импульс системы). Замкнутая система. Система отсчета центра масс", 'res/AnswerImages/8.jpg');
            break;
        case 'nine':
            createWindow("9. Работа и мощность силы. Работа консервативных, диссапативных\n" +
                "    и гироскопических сил", 'res/AnswerImages/9.jpg');
            break;
        case 'ten':
            createWindow("10. Кинетическая и потенциальная энергия. Полная механическая энергия. Связь силы и потенциальной энергии", 'res/AnswerImages/10.jpg');
            break;
        case 'twelve':
            createWindow("12. Динамика вращательного движения(момент сил,\n" +
                "        момент пары сил,момент импульса, момент инерции, уравнение моментов, секториальная скорость)",'res/AnswerImages/12.jpg');
            break;
        case 'fourteen':
            createWindow("14. Теорема Гюйгенса-Штейнера. Вычисление моментов\n" +
                "    инерции симметричных тел(цилиндр, шар, параллелепипед) относительно осей симметрии",'res/AnswerImages/14.jpg');
            break;
        case 'twentyTwo':
            createWindow("22. Термодинамический и молекулярно-кинетический способы описания вещества.\n" +
                "    Основные понятия молекулярной физики(идеальный газ,равновесное состояние,равновесный процесс, внутреняя энергия,\n" +
                "    уравнение состояние)", 'res/AnswerImages/22.jpg');
            break;
        case 'twentyThree':
            createWindow("23. Температура и температурные шкалы. Газовые законы.\n" +
                "    Уравнение состояния идеального газа(Клайперона-Менделеева)", 'res/AnswerImages/23.jpg');
            break;
        case 'twentyFour':
            createWindow("24. Давление газа с точки зрения молекулярно-кинетической теории.\n" +
                "    Закон Дальтона", 'res/AnswerImages/24.jpg');
            break;
        case 'thirtyTwo':
            createWindow("32. Электический заряд. Закон сохранения заряда.\n" +
                "    Взаимодействие электрических зарядов. Закон Кулона",'res/AnswerImages/32.jpg');
            break;
        case 'thirtyThree':
            createWindow("33. Напряженность электростатического поля.\n" +
                "    Силовые линии. Потенциал. Принцип суперпозиции электрических полей.",'res/AnswerImages/33.jpg');
            break;
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