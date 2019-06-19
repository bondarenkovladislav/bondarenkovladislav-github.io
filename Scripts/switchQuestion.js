let lastObject;
$('.clickable').click( function(e) {
    console.log(e.target.id);
    switch (e.target.id) {
        case 'one':
            createWindow("1. Механика, ее разделы и основные понятия(материальная точка, абсолютно твердое тело, ситема отсчета, радиус-вектор и пр.)", 'res/AnswerImages/1.jpeg');
            break;
        case 'two':
            createWindow("2. Кинематика материальной точки(система отсчета, траектория, путь, скорость и ускорение)", 'res/AnswerImages/2.jpg');
            break;
        case 'three':
            createWindow("3. Кинематика абсолютно твердого тела (поступательное и вращательное движение, соотношение между линейными и угловыми кинематическими величинами)",'res/AnswerImages/3.jpeg');
            break;
        case 'four':
            createWindow('4. Динамические величины: масса, сила, момент силы, импульс,\n' +
                '    момент импульса. Принцип относительности Галилея. Преобразования Галилея', 'res/AnswerImages/4.jpeg');
            break;
        case 'five':
            createWindow("5. Инерциальные системы отсчета. Законы Ньютона",'res/AnswerImages/5.jpg');
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
        case 'eleven':
            createWindow("11. Кинетическая, потенциальная и полная энергия\n" +
                "    системы материальных точек. Преобразование энергии при переходе к новой системе отсчета", "res/AnswerImages/11.jpg");
            break;
        case 'twelve':
            createWindow("12. Динамика вращательного движения(момент сил,\n" +
                "        момент пары сил,момент импульса, момент инерции, уравнение моментов, секториальная скорость)",'res/AnswerImages/12.jpg');
            break;
        case 'thirteen':
            createWindow("13. Момент импульса,\n" +
                "    момент инерции и кинетическая энергия системы материальных точек и абсолютно твердого тела. \n" +
                "    Преобразование моментов при переходе к новой системе отсчета", 'res/AnswerImages/13.jpg');
            break;
        case 'fourteen':
            createWindow("14. Теорема Гюйгенса-Штейнера. Вычисление моментов\n" +
                "    инерции симметричных тел(цилиндр, шар, параллелепипед) относительно осей симметрии",'res/AnswerImages/14.jpg');
            break;
        case "fifteen":
            createWindow("15. Свободные оси вращения\n" +
                "    абсолютно твердого тела. Тензор инерции, выражения момента импульса и кинетической энергии вращения через\n" +
                "    тензор инерции", 'res/AnswerImages/15.jpg');
            break;
        case 'sixteen':
            createWindow("16. Уравнение моментов для\n" +
                "    абсолютно твердого тела. Гироскоп", 'res/AnswerImages/16.jpg');
            break;
        case 'seventeen':
            createWindow("17. Основные понятия гидродинамики\n" +
                "    (капельная жидкость,давление, идеальная жидкость).\n"+
                " Описание движения жидкости(способы Лагранжа и Эйлера, линии тока,трубка тока)", 'res/AnswerImages/17.jpg');
            break;
        case 'eighteen':
            createWindow("18. Статика жидкости\n" +
                "    (условие равновесия несжимаемой жидкости, закон Паскаля, ззакон Архимеда, барометрическая формула)",'res/AnswerImages/18.jpg');
            break;
        case 'nineteen':
            createWindow("19. Динамика идеальной жидкости\n" +
                "    (Уравнение Эйлера, Уравнение Бернулли). Следствия из уравнений Бернулли: распределение давления в однородном потоке,\n" +
                "    зависимость давления от скорости струи, формула Торичелли", 'res/AnswerImages/19.jpg');
            break;
        case 'twenty':
            createWindow("20. Динамическое и\n" +
                "    статическое давление. Измерение давления в струе. Реакция вытекающей струи", 'res/AnswerImages/20.jpg');
            break;
        case 'twentyOne':
            createWindow("21. Силы вязкого трения.\n" +
                "    Течение вязкой жидкости (формула Пуазейля, работа жидкости при течении)", 'res/AnswerImages/21.jpg');
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
        case 'twentyFive':
            createWindow("25. Средняя энергия молекул.\n" +
                "    Теплоемкость газа.", 'res/AnswerImages/25.jpg');
            break;
        case 'twentySix':
            createWindow("26. Адиабатический и \n" +
                "    политропический процесс", 'res/AnswerImages/26.jpg');
            break;
        case 'twentySeven':
            createWindow("27. Распределение молекул\n" +
                "    по скоростям(Распределение Максвела)", 'res/AnswerImages/27.jpg');
            break;
        case 'twentyEight':
            createWindow("28. Распределение Больцмана.\n" +
                "    Обобщенный закон распределения молекул по энергиям",'res/AnswerImages/28.jpg');
            break;
        case 'twentyNine':
            createWindow("29. Обратимый и необратимый процесс,\n" +
                "    цикл. Первое начало термодинамики", 'res/AnswerImages/29.jpg');
            break;
        case 'thirty':
            createWindow("30. КПД теплового двигателя.\n" +
                "    Цикл Карно", 'res/AnswerImages/30.jpg');
            break;
        case 'thirtyOne':
            createWindow("31. Второе начало термодинамики.\n" +
                "    Неравенство Клазиуса. Энтропия", 'res/AnswerImages/31.jpg');
            break;
        case 'thirtyTwo':
            createWindow("32. Электический заряд. Закон сохранения заряда.\n" +
                "    Взаимодействие электрических зарядов. Закон Кулона",'res/AnswerImages/32.jpg');
            break;
        case 'thirtyThree':
            createWindow("33. Напряженность электростатического поля.\n" +
                "    Силовые линии. Потенциал. Принцип суперпозиции электрических полей.",'res/AnswerImages/33.jpg');
            break;
        case 'thirtyFive':
            createWindow("35. Работа электростатических\n" +
                "    сил. Потенциальность электростатического поля. Связь потенциала и напряженности",'res/AnswerImages/35.jpg');
            break;
        case 'thirtySix':
            createWindow("36. Электрический диполь\n" +
                "    (потенциал и поле, создаваемые диполем)",'res/AnswerImages/36.jpg');
            break;
        case 'thirtySeven':
            createWindow("37. Элетрический диполь\n" +
                "    (силы, действующие на диполь со стороны электрического поля, энергия диполя в электрическом поле)",'res/AnswerImages/37.jpg');
            break;
        case 'thirtyEight':
            createWindow("38. Поляризуемость молекул,\n" +
                "    вектор поляризации вещества. Связанный заряд", 'res/AnswerImages/38.jpg');
            break;
        case 'thirtyNine':
            createWindow("39. Вектор электрической\n" +
                "    индукции. Теорема Гаусса в веществе. Граничные услвия для векторов электрической индукции и напряженности\n" +
                "    (40 вопрос)",'res/AnswerImages/39.jpg');
            break;
        case 'forty':
            createWindow("40. Проводники в электрическом поле.\n" +
                "    Свободные заряды и граничные условия для вектора напряженности электрического поля",'res/AnswerImages/40.jpg');
            break;
        case 'fortyOne':
            createWindow("41. Электрическая емкость\n" +
                "    уединенного проводника. Конденсатор",'res/AnswerImages/41.jpg');
            break;
        case 'fortyTwo':
            createWindow("42. Емкость плоского,\n" +
                "    сферического и цилиндрического конденсаторов. Последовательное и параллельное\n" +
                "    включение конденсаторов",'res/AnswerImages/42.jpg');
            break;
        case 'fortyThree':
            createWindow("43. Электрическая энергия\n" +
                "    (конденсатора, системы зарядов, электрического поля)",'res/AnswerImages/43.jpg');
            break;
        case 'fortyFour':
            createWindow("44. Стационарный электрический\n" +
                "    ток(плотность тока, ток через площадку, электрическое поле стационарного тока, отсутствие зарядов в\n" +
                "        объеме)", 'res/AnswerImages/44.jpg');
            break;
        case 'fortyFive':
            createWindow("45. Закон Ома",'res/AnswerImages/45.jpg');
            break;
    }

    function createWindow(head,imgSrc){
        lastObject = {head:head,src:imgSrc};
        localStorage.setItem('lastObject',JSON.stringify(lastObject));
    }
} );