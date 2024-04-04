import {BigTableProps} from "../../components/Charts/Table/BigTableForStudents";

const boxTitle = 'Студенты курса "Название курса"';
const columnName = 'Студенты';
const columnCount = 'ID студента';
const labelText = 'Поиск студента...';

const uniqueUserNames = `
user_name               user_id
abrosimovaoe            3280716
akimovnv                3280673
alenatresh              2882692
anastasiiashadchneva    3272654
andrey_andreew          1329024
antondnn                3276453
antoni_chupis           1645155
antonkireew             2994713
balashovasa             3287845
bazhutinaov             3280674
boitsev                   30996
bondarevskijmn          3280688
braunve                 3280671
burbelaas               3280711
cherepanovaev           3280724
chursinovys             3280721
dajbageds               3280677
demidovaee              3280672
dgluschenko             2683038
dubravinna              3280690
dvolchek                3280680
dvolchek                3280674
dvolchek                    144
dvolchek                3280686
dvolchek                 269892
dvolchek                2882692
dvolchek                3284024
dvolchek                3280667
dvolchek                3280730
dvolchek                3280688
dvolchek                3280697
dvolchek                3280711
dyachenkoov             3280723
dyakonovasg             3280732
egmichailova              64123
evsikovks               3296507
ezhovaga                3280685
fadeevrv                3280702
fastmotor               2851926
gadzhieva_elvira        3283529
gorbunovaa              3287846
gorumo                  3280680
gorumo                  3280696
gorumo                      158
gorumo                  3280690
grafeeva                 236789
gudisea                 3280725
hodyrevan               3280680
holodnayaev             3296508
ibatullinaav            3283532
id_brunetochka          2886618
id160430089              484680
kazymovaya              3280670
komarovdi               3280704
konyaev-alexsandr        325428
kotovaly                3280694
kozminyhms              3280713
kozyrevaes              3280707
krapivinasa             3281153
krylovaos               3280722
kucheruksv              3280681
kushmanovati            3280705
kuznecovaem             3280676
lactea                  3279111
larkk31                 3211558
lazutkinn               3280708
lazyrinms               3287847
lohnevaei               3280912
lyalikovavg             3284350
mariia_i                2885609
markinaekal             3280734
martyshevdv             3280687
matveevamn              3280666
matveyukov              3280686
mdobrobaba              2039114
mengyas                 3280736
mezan                   3280679
mihajlovaev             3280706
mileniniv               3280693
mironovaekal            3281157
mishchenkoma            3280715
muravevalv              3280731
novikovaea              3280717
obedkovaav              3280712
oegorova                3280728
oegorova                3280699
oegorova                 847852
oegorova                3280685
oegorova                3283781
oegorova                3282369
OlgaStrelnikova          269892
parnovaim               3280718
pavlovatv               3280684
petrik                   184725
petrovake               3280703
petrovarts              3280733
plotnikoviv             3280692
polikarpovoa            3280678
ponkratovaaa            3280701
popovaanvl              3280735
popovaverval            3284024
ratnersv                3287849
reshetnikovams          3287851
rezaiann                3287850
rigosikos               3280699
rogozinaiv              3280698
ryattelav               3280730
rylevagv                3280682
salihover               3280710
samohinavalo            3281650
savelevmm               3280689
semenovnn               3280669
shchitovaaa             3296509
shishkovavm             3280695
shulikavg               3280700
silaevama               3283533
sivakovia               3280675
sizovny                 3282369
skopincevan             3280667
smolchenkomy            3280728
soa_                    3092694
sobolevama              3280668
solodilovasv            3280696
sorokinasofig           3283885
suprun_a                3283781
tanyaahtanya             638515
tishchenkodv            3280697
troyanovaa              3280720
ulyanovay               3281154
vlasovne                3280714
volkovayv               3280719
vorobevmy               3280911
xmmmmm                  3094901
yakovlevairn            3283451
yurevaoa                3280729
zamulinaov              3280683
zaripovagm              3283822
zhmurinaad              3283821
zlobnovaai              3280709
zyryanovamo             3282368
`;


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


const rowsStudents = [
    {
        "username": "abrosimovaoe",
        "completion_status": "Прошел курс",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "akimovnv",
        "completion_status": "Не начал",
        "days_online": 20,
        "time_on_course": 45,
        "video_watching": 20,
        "text_book_scrolling": 10,
        "promblems_solving": 30,
        "forum_activity": 5
    },
    {
        "username": "alenatresh",
        "completion_status": "Начал, но не завершил",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 15
    },
    {
        "username": "anastasiiashadchneva",
        "completion_status": "Прошла курс",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "andrey_andreew",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "antondnn",
        "completion_status": "Прошел курс",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "antoni_chupis",
        "completion_status": "Не начал",
        "days_online": 22,
        "time_on_course": 48,
        "video_watching": 25,
        "text_book_scrolling": 13,
        "promblems_solving": 35,
        "forum_activity": 7
    },
    {
        "username": "antonkireew",
        "completion_status": "Начал, но не завершил",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "balashovasa",
        "completion_status": "Прошел курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "bazhutinaov",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 28,
        "text_book_scrolling": 12,
        "promblems_solving": 45,
        "forum_activity": 8
    },
    {
        "username": "boitsev",
        "completion_status": "Прошел курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "bondarevskijmn",
        "completion_status": "Не начал",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "braunve",
        "completion_status": "Прошел курс",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "burbelaas",
        "completion_status": "Не начал",
        "days_online": 20,
        "time_on_course": 45,
        "video_watching": 20,
        "text_book_scrolling": 10,
        "promblems_solving": 30,
        "forum_activity": 5
    },
    {
        "username": "cherepanovaev",
        "completion_status": "Прошел курс",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "chursinovys",
        "completion_status": "Начал, но не завершил",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "dajbageds",
        "completion_status": "Прошел курс",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "demidovaee",
        "completion_status": "Не начал",
        "days_online": 22,
        "time_on_course": 48,
        "video_watching": 25,
        "text_book_scrolling": 13,
        "promblems_solving": 35,
        "forum_activity": 7
    },
    {
        "username": "dgluschenko",
        "completion_status": "Прошел курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "dubravinna",
        "completion_status": "Не начал",
        "days_online": 21,
        "time_on_course": 50,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 40,
        "forum_activity": 8
    },
    {
        "username": "dvolchek",
        "completion_status": "Прошел курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "dyachenkoov",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 28,
        "text_book_scrolling": 12,
        "promblems_solving": 45,
        "forum_activity": 8
    },
    {
        "username": "dyakonovasg",
        "completion_status": "Прошел курс",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "egmichailova",
        "completion_status": "Не начал",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "evsikovks",
        "completion_status": "Прошел курс",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "ezhovaga",
        "completion_status": "Не начал",
        "days_online": 20,
        "time_on_course": 45,
        "video_watching": 20,
        "text_book_scrolling": 10,
        "promblems_solving": 30,
        "forum_activity": 5
    },
    {
        "username": "fadeevrv",
        "completion_status": "Прошел курс",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "fastmotor",
        "completion_status": "Не начал",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 32,
        "text_book_scrolling": 16,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "gadzhieva_elvira",
        "completion_status": "Прошла курс",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "gorbunovaa",
        "completion_status": "Не начал",
        "days_online": 22,
        "time_on_course": 48,
        "video_watching": 25,
        "text_book_scrolling": 13,
        "promblems_solving": 35,
        "forum_activity": 7
    },
    {
        "username": "gorumo",
        "completion_status": "Прошел курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "grafeeva",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 28,
        "text_book_scrolling": 12,
        "promblems_solving": 45,
        "forum_activity": 8
    },
    {
        "username": "gudisea",
        "completion_status": "Прошел курс",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "hodyrevan",
        "completion_status": "Не начал",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "holodnayaev",
        "completion_status": "Прошел курс",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "ibatullinaav",
        "completion_status": "Не начал",
        "days_online": 20,
        "time_on_course": 45,
        "video_watching": 20,
        "text_book_scrolling": 10,
        "promblems_solving": 30,
        "forum_activity": 5
    },
    {
        "username": "id_brunetochka",
        "completion_status": "Прошла курс",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "id160430089",
        "completion_status": "Не начал",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "kazymovaya",
        "completion_status": "Прошла курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "komarovdi",
        "completion_status": "Не начал",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "konyaev-alexsandr",
        "completion_status": "Прошел курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 32,
        "text_book_scrolling": 16,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "kotovaly",
        "completion_status": "Не начал",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "kozminyhms",
        "completion_status": "Прошел курс",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "kozyrevaes",
        "completion_status": "Не начал",
        "days_online": 22,
        "time_on_course": 48,
        "video_watching": 25,
        "text_book_scrolling": 13,
        "promblems_solving": 35,
        "forum_activity": 7
    },
    {
        "username": "krapivinasa",
        "completion_status": "Прошла курс",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "krylovaos",
        "completion_status": "Не начал",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "kucheruksv",
        "completion_status": "Прошел курс",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "kushmanovati",
        "completion_status": "Не начал",
        "days_online": 21,
        "time_on_course": 50,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 40,
        "forum_activity": 8
    },
    {
        "username": "kuznecovaem",
        "completion_status": "Прошла курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 32,
        "text_book_scrolling": 16,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "lactea",
        "completion_status": "Не начал",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "larkk31",
        "completion_status": "Прошел курс",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "lazutkinn",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 28,
        "text_book_scrolling": 12,
        "promblems_solving": 45,
        "forum_activity": 8
    },
    {
        "username": "lazyrinms",
        "completion_status": "Прошел курс",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "lohnevaei",
        "completion_status": "Не начал",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 40,
        "forum_activity": 8
    },
    {
        "username": "lyalikovavg",
        "completion_status": "Прошел курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "mariia_i",
        "completion_status": "Не начал",
        "days_online": 20,
        "time_on_course": 45,
        "video_watching": 20,
        "text_book_scrolling": 10,
        "promblems_solving": 30,
        "forum_activity": 5
    },
    {
        "username": "markinaekal",
        "completion_status": "Прошла курс",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "martyshevdv",
        "completion_status": "Не начал",
        "days_online": 22,
        "time_on_course": 48,
        "video_watching": 25,
        "text_book_scrolling": 13,
        "promblems_solving": 35,
        "forum_activity": 7
    },
    {
        "username": "matveevamn",
        "completion_status": "Прошел курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 32,
        "text_book_scrolling": 16,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "matveyukov",
        "completion_status": "Не начал",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "mdobrobaba",
        "completion_status": "Прошел курс",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "mengyas",
        "completion_status": "Не начал",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "mezan",
        "completion_status": "Прошел курс",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "mihajlovaev",
        "completion_status": "Не начал",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "mileniniv",
        "completion_status": "Прошел курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "mironovaekal",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 28,
        "text_book_scrolling": 12,
        "promblems_solving": 45,
        "forum_activity": 8
    },
    {
        "username": "mishchenkoma",
        "completion_status": "Прошел курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "muravevalv",
        "completion_status": "Не начал",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "novikovaea",
        "completion_status": "Прошла курс",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "obedkovaav",
        "completion_status": "Не начал",
        "days_online": 22,
        "time_on_course": 48,
        "video_watching": 25,
        "text_book_scrolling": 13,
        "promblems_solving": 35,
        "forum_activity": 7
    },
    {
        "username": "oegorova",
        "completion_status": "Прошла курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "olga_strelnikova",
        "completion_status": "Не начал",
        "days_online": 25,
        "time_on_course": 56,
        "video_watching": 30,
        "text_book_scrolling": 15,
        "promblems_solving": 40,
        "forum_activity": 8
    },
    {
        "username": "parnovaim",
        "completion_status": "Прошел курс",
        "days_online": 26,
        "time_on_course": 58,
        "video_watching": 32,
        "text_book_scrolling": 16,
        "promblems_solving": 50,
        "forum_activity": 10
    },
    {
        "username": "pavlovatv",
        "completion_status": "Не начал",
        "days_online": 27,
        "time_on_course": 62,
        "video_watching": 38,
        "text_book_scrolling": 20,
        "promblems_solving": 60,
        "forum_activity": 13
    },
    {
        "username": "petrik",
        "completion_status": "Прошел курс",
        "days_online": 28,
        "time_on_course": 60,
        "video_watching": 35,
        "text_book_scrolling": 18,
        "promblems_solving": 55,
        "forum_activity": 12
    },
    {
        "username": "petrovake",
        "completion_status": "Не начал",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "petrovarts",
        "completion_status": "Прошел курс",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "plotnikoviv",
        "completion_status": "Не начал",
        "days_online": 24,
        "time_on_course": 54,
        "video_watching": 29,
        "text_book_scrolling": 14,
        "promblems_solving": 48,
        "forum_activity": 9
    },
    {
        "username": "polikarpovoa",
        "completion_status": "Прошел курс",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    },
    {
        "username": "ponkratovaaa",
        "completion_status": "Не начал",
        "days_online": 23,
        "time_on_course": 52,
        "video_watching": 28,
        "text_book_scrolling": 12,
        "promblems_solving": 45,
        "forum_activity": 8
    },
    {
        "username": "popovaanvl",
        "completion_status": "Прошла курс",
        "days_online": 29,
        "time_on_course": 65,
        "video_watching": 42,
        "text_book_scrolling": 22,
        "promblems_solving": 65,
        "forum_activity": 14
    },
    {
        "username": "popovaverval",
        "completion_status": "Не начал",
        "days_online": 30,
        "time_on_course": 70,
        "video_watching": 40,
        "text_book_scrolling": 20,
        "promblems_solving": 65,
        "forum_activity": 15
    }
];

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
