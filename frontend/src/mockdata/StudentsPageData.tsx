import {StudentData, CompletionStatus} from '../models/students';
import {StudentsCommonTableProps} from '../components/Charts/Table/StudentsCommonTable'

const studentsRowData = `
username,completion_status,days_online,time_on_course,video_watching,text_book_scrolling,promblems_solving,forum_activity
abrosimovaoe,completed,25,56,30,15,50,10
akimovnv,not_started,20,45,20,10,30,5
alenatresh,in_progress,30,70,40,20,60,15
anastasiiashadchneva,completed,28,60,35,18,55,12
andrey_andreew,not_started,23,52,29,14,48,9
antondnn,completed,27,62,38,20,60,13
antoni_chupis,not_started,22,48,25,13,35,7
antonkireew,in_progress,29,65,42,22,65,14
balashovasa,completed,26,58,35,18,55,12
bazhutinaov,not_started,23,52,28,12,45,8
boitsev,completed,30,70,40,20,65,15
bondarevskijmn,not_started,24,54,29,14,48,9
braunve,completed,25,56,30,15,50,10
burbelaas,not_started,20,45,20,10,30,5
cherepanovaev,completed,28,60,35,18,55,12
chursinovys,in_progress,29,65,42,22,65,14
dajbageds,completed,27,62,38,20,60,13
demidovaee,not_started,22,48,25,13,35,7
dgluschenko,completed,26,58,35,18,55,12
dubravinna,not_started,21,50,30,15,40,8
dvolchek,completed,30,70,40,20,65,15
dyachenkoov,not_started,23,52,28,12,45,8
dyakonovasg,completed,29,65,42,22,65,14
egmichailova,not_started,24,54,29,14,48,9
evsikovks,completed,25,56,30,15,50,10
ezhovaga,not_started,20,45,20,10,30,5
fadeevrv,completed,28,60,35,18,55,12
fastmotor,not_started,26,58,32,16,50,10
gadzhieva_elvira,completed,27,62,38,20,60,13
gorbunovaa,not_started,22,48,25,13,35,7
gorumo,completed,30,70,40,20,65,15
grafeeva,not_started,23,52,28,12,45,8
gudisea,completed,29,65,42,22,65,14
hodyrevan,not_started,24,54,29,14,48,9
holodnayaev,completed,25,56,30,15,50,10
ibatullinaav,not_started,20,45,20,10,30,5
id_brunetochka,completed,28,60,35,18,55,12
id160430089,not_started,29,65,42,22,65,14
kazymovaya,completed,30,70,40,20,65,15
kazymovaya,completed,30,70,40,20,65,15
komarovdi,not_started,25,56,30,15,50,10
konyaev-alexsandr,completed,26,58,32,16,50,10
kotovaly,not_started,27,62,38,20,60,13
kozminyhms,completed,23,52,29,14,48,9
kozyrevaes,not_started,22,48,25,13,35,7
krapivinasa,completed,29,65,42,22,65,14
krylovaos,not_started,30,70,40,20,65,15
kucheruksv,completed,24,54,29,14,48,9
kushmanovati,not_started,21,50,30,15,40,8
kuznecovaem,completed,26,58,32,16,50,10
lactea,not_started,27,62,38,20,60,13
larkk31,completed,28,60,35,18,55,12
lazutkinn,not_started,23,52,28,12,45,8
lazyrinms,completed,24,54,29,14,48,9
lohnevaei,not_started,25,56,30,15,40,8
lyalikovavg,completed,30,70,40,20,65,15
mariia_i,not_started,20,45,20,10,30,5
markinaekal,completed,29,65,42,22,65,14
martyshevdv,not_started,22,48,25,13,35,7
matveevamn,completed,26,58,32,16,50,10
matveyukov,not_started,27,62,38,20,60,13
mdobrobaba,completed,23,52,29,14,48,9
mengyas,not_started,28,60,35,18,55,12
mezan,completed,25,56,30,15,50,10
mihajlovaev,not_started,24,54,29,14,48,9
mileniniv,completed,30,70,40,20,65,15
mironovaekal,not_started,23,52,28,12,45,8
mishchenkoma,completed,26,58,35,18,55,12
muravevalv,not_started,27,62,38,20,60,13
novikovaea,completed,29,65,42,22,65,14
obedkovaav,not_started,22,48,25,13,35,7
oegorova,completed,30,70,40,20,65,15
olga_strelnikova,not_started,25,56,30,15,40,8
parnovaim,completed,26,58,32,16,50,10
pavlovatv,not_started,27,62,38,20,60,13
petrik,completed,28,60,35,18,55,12
petrovake,not_started,29,65,42,22,65,14
petrovarts,completed,23,52,29,14,48,9
plotnikoviv,not_started,24,54,29,14,48,9
polikarpovoa,completed,30,70,40,20,65,15
ponkratovaaa,not_started,23,52,28,12,45,8
popovaanvl,completed,29,65,42,22,65,14
popovaverval,not_started,30,70,40,20,65,15
`

const students: Array<StudentData> = studentsRowData
    .trim()
    .split('\n')
    .slice(1) // Пропускаем строку с заголовками
    .map((row, index) => {
        const [username, completionStatus, daysOnline, timeOnCourse, videoWatching, textbookScrolling, problemsSolving, forumActivity] = row.split(',');
        console.log(completionStatus)
        return {
            id: index + 1,
            username: username,
            completionStatus: CompletionStatus[completionStatus.toUpperCase()],
            daysOnline: parseInt(daysOnline, 10),
            timeOnCourse: parseInt(timeOnCourse, 10),
            videoWatching: parseInt(videoWatching, 10),
            textbookScrolling: parseInt(textbookScrolling, 10),
            problemsSolved: parseInt(problemsSolving, 10),
            forumActivity: parseInt(forumActivity, 10)
        };
    });

const boxTitleStudents = 'Студенты курса "Название курса"';
const username = 'Имя пользователя';
const completionStatus = 'Степень завершённости';
const daysOnline = 'Дни активности';
const timeOnCourse = 'Часы на курсе';
const videoWatching = 'Просмотры видео';
const textbookScrolling = 'Главы учебника';
const promblemsSolving = 'Решённые задачи';
const forumActivity = 'Вопросы на форуме';

export const studentSearchPageProps: StudentsCommonTableProps = {
    boxTitle: boxTitleStudents,
    username: username,
    completionStatus: completionStatus,
    daysOnline: daysOnline,
    timeOnCourse: timeOnCourse,
    videoWatching: videoWatching,
    textbookScrolling: textbookScrolling,
    promblemsSolving: promblemsSolving,
    forumActivity: forumActivity,
    students: students
};
