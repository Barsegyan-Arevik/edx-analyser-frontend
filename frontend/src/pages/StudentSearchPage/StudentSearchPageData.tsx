import {BigTableProps} from "../../components/Charts/Table/BigTableForStudents";

const students = `
username,completion_status,days_online,time_on_course,video_watching,text_book_scrolling,promblems_solving,forum_activity
abrosimovaoe,Прошел курс,25,56,30,15,50,10
akimovnv,Не начал,20,45,20,10,30,5
alenatresh,Начал но не завершил,30,70,40,20,60,15
anastasiiashadchneva,Прошел курс,28,60,35,18,55,12
andrey_andreew,Не начал,23,52,29,14,48,9
antondnn,Прошел курс,27,62,38,20,60,13
antoni_chupis,Не начал,22,48,25,13,35,7
antonkireew,Начал но не завершил,29,65,42,22,65,14
balashovasa,Прошел курс,26,58,35,18,55,12
bazhutinaov,Не начал,23,52,28,12,45,8
boitsev,Прошел курс,30,70,40,20,65,15
bondarevskijmn,Не начал,24,54,29,14,48,9
braunve,Прошел курс,25,56,30,15,50,10
burbelaas,Не начал,20,45,20,10,30,5
cherepanovaev,Прошел курс,28,60,35,18,55,12
chursinovys,Начал но не завершил,29,65,42,22,65,14
dajbageds,Прошел курс,27,62,38,20,60,13
demidovaee,Не начал,22,48,25,13,35,7
dgluschenko,Прошел курс,26,58,35,18,55,12
dubravinna,Не начал,21,50,30,15,40,8
dvolchek,Прошел курс,30,70,40,20,65,15
dyachenkoov,Не начал,23,52,28,12,45,8
dyakonovasg,Прошел курс,29,65,42,22,65,14
egmichailova,Не начал,24,54,29,14,48,9
evsikovks,Прошел курс,25,56,30,15,50,10
ezhovaga,Не начал,20,45,20,10,30,5
fadeevrv,Прошел курс,28,60,35,18,55,12
fastmotor,Не начал,26,58,32,16,50,10
gadzhieva_elvira,Прошел курс,27,62,38,20,60,13
gorbunovaa,Не начал,22,48,25,13,35,7
gorumo,Прошел курс,30,70,40,20,65,15
grafeeva,Не начал,23,52,28,12,45,8
gudisea,Прошел курс,29,65,42,22,65,14
hodyrevan,Не начал,24,54,29,14,48,9
holodnayaev,Прошел курс,25,56,30,15,50,10
ibatullinaav,Не начал,20,45,20,10,30,5
id_brunetochka,Прошел курс,28,60,35,18,55,12
id160430089,Не начал,29,65,42,22,65,14
kazymovaya,Прошел курс,30,70,40,20,65,15
kazymovaya,Прошел курс,30,70,40,20,65,15
komarovdi,Не начал,25,56,30,15,50,10
konyaev-alexsandr,Прошел курс,26,58,32,16,50,10
kotovaly,Не начал,27,62,38,20,60,13
kozminyhms,Прошел курс,23,52,29,14,48,9
kozyrevaes,Не начал,22,48,25,13,35,7
krapivinasa,Прошел курс,29,65,42,22,65,14
krylovaos,Не начал,30,70,40,20,65,15
kucheruksv,Прошел курс,24,54,29,14,48,9
kushmanovati,Не начал,21,50,30,15,40,8
kuznecovaem,Прошел курс,26,58,32,16,50,10
lactea,Не начал,27,62,38,20,60,13
larkk31,Прошел курс,28,60,35,18,55,12
lazutkinn,Не начал,23,52,28,12,45,8
lazyrinms,Прошел курс,24,54,29,14,48,9
lohnevaei,Не начал,25,56,30,15,40,8
lyalikovavg,Прошел курс,30,70,40,20,65,15
mariia_i,Не начал,20,45,20,10,30,5
markinaekal,Прошел курс,29,65,42,22,65,14
martyshevdv,Не начал,22,48,25,13,35,7
matveevamn,Прошел курс,26,58,32,16,50,10
matveyukov,Не начал,27,62,38,20,60,13
mdobrobaba,Прошел курс,23,52,29,14,48,9
mengyas,Не начал,28,60,35,18,55,12
mezan,Прошел курс,25,56,30,15,50,10
mihajlovaev,Не начал,24,54,29,14,48,9
mileniniv,Прошел курс,30,70,40,20,65,15
mironovaekal,Не начал,23,52,28,12,45,8
mishchenkoma,Прошел курс,26,58,35,18,55,12
muravevalv,Не начал,27,62,38,20,60,13
novikovaea,Прошел курс,29,65,42,22,65,14
obedkovaav,Не начал,22,48,25,13,35,7
oegorova,Прошел курс,30,70,40,20,65,15
olga_strelnikova,Не начал,25,56,30,15,40,8
parnovaim,Прошел курс,26,58,32,16,50,10
pavlovatv,Не начал,27,62,38,20,60,13
petrik,Прошел курс,28,60,35,18,55,12
petrovake,Не начал,29,65,42,22,65,14
petrovarts,Прошел курс,23,52,29,14,48,9
plotnikoviv,Не начал,24,54,29,14,48,9
polikarpovoa,Прошел курс,30,70,40,20,65,15
ponkratovaaa,Не начал,23,52,28,12,45,8
popovaanvl,Прошел курс,29,65,42,22,65,14
popovaverval,Не начал,30,70,40,20,65,15
`

const boxTitleStudents = 'Студенты курса "Название курса"';
const username = 'Имя пользователя';
const completionStatus = 'Степень завершённости';
const daysOnline = 'Дни активности\n(кол-во)';
const timeOnCourse = 'Время на курсе\n(часы)';
const videoWatching = 'Видео\n(кол-во)';
const textbookScrolling = 'Главы учебника\n(кол-во)';
const promblemsSolving = 'Решённые задачи\n(кол-во)';
const forumActivity = 'Вопросы на форуме';

export const studentSearchPageProps: BigTableProps = {
    boxTitle: boxTitleStudents,
    username: username,
    completionStatus: completionStatus,
    daysOnline: daysOnline,
    timeOnCourse: timeOnCourse,
    videoWatching: videoWatching,
    textbookScrolling: textbookScrolling,
    promblemsSolving: promblemsSolving,
    forumActivity: forumActivity,
    data: students
};
