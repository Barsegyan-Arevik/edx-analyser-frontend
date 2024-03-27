import getStudentEnding from "../utils";
import { CourseAnalyticsProps } from "../components/unionParts/CourseAnalytics/CourseAnalytics";
import { VideoSectionProps } from "../components/unionParts/VideoSection/VideoSection";
import { DocumentSectionProps } from "../components/unionParts/DocumentSection/DocumentSection";

////это данные CourseAnalytics
const chartDonut = [
    { value: 10, label: 'Прошли курс' },
    { value: 20, label: 'Начали, не прошли' },
    { value: 15, label: 'Не начали' },
]

const aboutCountOfStudents = { value: '864', value_additional_text: getStudentEnding(parseInt('864', 10)), label: 'Количество студентов, записавшихся на курс' }
const averageTimeToEnroll = { value: '10:54', value_additional_text: 'минут', label: 'Среднее время регистрации на курс' }
const headerData = {courseId: 123, courseName: 'Название курса'}

export const courseAnalyticsProps: CourseAnalyticsProps = {
    donut: chartDonut,
    aboutCountOfStudents: aboutCountOfStudents,
    aboutAverageTimeToEnroll: averageTimeToEnroll,
    headerData: headerData
};
///здесь заканчиваются данные CourseAnalytics



///это данные VideoSection
const boxTitle = 'Общее время просмотра видео для каждого пользователя';
const columnName = 'Студенты';
const columnCount = 'Время (сек.)';
const labelText = 'Поиск студента...';
const videoHeaderText = "Просмотр видео материалов"

// CSV-строка с данными
const csvData = `
andrey_andreew,916969.158098
mihajlovaev,987916.973749
pavlovatv,358814.826067
fadeevrv,1250497.125808
mileniniv,45097.614908
xmmmmm,751992.172617
bondarevskijmn,54805.231977
sobolevama,3592626.879868
kazymovaya,117706.204575
skopincevan,717.533192
id_brunetochka,442734.404789
krylovaos,177966.585073
zamulinaov,1013978.782188
tishchenkodv,49674.981237
lazutkinn,529557.331475
savelevmm,270311.65697
OlgaStrelnikova,114205.292826
burbelaas,3171175.911422
shishkovavm,92803.208128
vlasovne,527885.289903
muravevalv,19075.013011
kushmanovati,1851498.141546
akimovnv,4114909.074228
dajbageds,944714.070599
smolchenkomy,888245.658485
matveyukov,273173.491715
yurevaoa,1021973.576212
kozyrevaes,479030.130778
kuznecovaem,59734.105516
kucheruksv,586576.669021
cherepanovaev,824903.333262
dgluschenko,528179.157482
markinaekal,494856.996331
dyachenkoov,3616245.209037
vorobevmy,81791.161032
obedkovaav,36021.658373
novikovaea,14.588043
tanyaahtanya,5057810.775664
id160430089,12214.1835
kotovaly,3786050.818924
abrosimovaoe,435809.815595
ponkratovaaa,11717.542582
soa_,668174.11926
fastmotor,9130.828096
polikarpovoa,492957.734809
parnovaim,380872.628707
petrovarts,44923.697477
ulyanovay,4423.280884
zlobnovaai,1025482.396669
mishchenkoma,3012056.623242
mezan,240536.623473
sivakovia,183450.698217
semenovnn,3524.542704
antoni_chupis,341736.801846
troyanovaa,694801.296596
alenatresh,109758.898567
antondnn,29131.699871
ryattelav,853872.547283
petrovake,1780373.58909
antonkireew,7292476.38807
bazhutinaov,564932.81674
rigosikos,701437.762333
lactea,712970.245721
konyaev-alexsandr,1544687.407925
popovaanvl,14853.571963
martyshevdv,1126272.809536
hodyrevan,358828.572985
demidovaee,582554.289293
matveevamn,11438.910539
dubravinna,619809.222109
shulikavg,294558.759605
kozminyhms,1136361.084183
mengyas,986974.003087
rylevagv,276443.829944
chursinovys,16282.908038
rogozinaiv,178265.174709
plotnikoviv,1268386.252168
krapivinasa,5426377.06177
ezhovaga,197726.627409
lohnevaei,373283.052959
braunve,8906.531264
dvolchek,5.278412
mironovaekal,1212243.975779
dyakonovasg,962528.499003
solodilovasv,498765.357035
samohinavalo,22427.785586
sizovny,53371.762029
komarovdi,5249.058667
silaevama,367400.5167
gadzhieva_elvira,718341.0832
ibatullinaav,325062.486957
volkovayv,348493.951629
zyryanovamo,38991.211572
gudisea,433923.482871
zhmurinaad,257988.5859
suprun_a,128716.719473
lyalikovavg,140389.968539
popovaverval,611047.133652
sorokinasofig,950.704899
yakovlevairn,10261.079315
salihover,172966.445953
balashovasa,7741.428233
ratnersv,619690.963075
rezaiann,0.0
mariia_i,64628.558798
reshetnikovams,167761.642463
gorbunovaa,251285.792058
,3891939.685437
zaripovagm,3417.866754
evsikovks,823.796439
mdobrobaba,3629.983657
holodnayaev,737.789907
shchitovaaa,0.479819
`;

const lineChartData = `
time,count
2022-06-30,963
2022-07-01,1347
2022-07-02,1605
2022-07-03,2573
2022-07-04,1899
2022-07-05,1612
2022-07-06,1327
2022-07-07,1797
2022-07-08,666
2022-07-09,1074
2022-07-10,915
2022-07-11,1745
2022-07-12,1083
2022-07-13,953
2022-07-14,694
2022-07-15,388
2022-07-16,507
2022-07-17,730
2022-07-18,883
2022-07-19,837
2022-07-20,1047
2022-07-21,1185
2022-07-22,593
2022-07-23,617
2022-07-24,790
2022-07-25,1215
2022-07-26,1165
2022-07-27,1324
2022-07-28,1724
2022-07-29,415
2022-07-30,1001
2022-07-31,897
2022-08-01,1118
2022-08-02,1434
2022-08-03,1507
2022-08-04,1037
2022-08-05,824
2022-08-06,543
2022-08-07,739
2022-09-10,34
2022-09-11,378
`;

const tableData = {boxTitle: boxTitle, columnName: columnName, columnCount: columnCount, labelText: labelText, data: csvData}


export const videoSectionProps: VideoSectionProps = {
    tableData: tableData,
    lineChartData: lineChartData,
    headerText: videoHeaderText
};
///здесь заканчиваются данные VideoSection



///это данные DocumentSection

const distinctScrollingData = `
pdf name,scrolling amount
1._Введение_в_науку_о_данных.pdf,16747
1.Введение.pdf,50
10._NoSQL_хранилища_2021.pdf,44
11._Redis_2021.pdf,39
12._MongoDB_2021.pdf,37
13._Cassandra_2021.pdf,38
14._Neo4j_2021.pdf,31
2._Инструменты_обработки_данных.pdf,252
2.Python.pdf,420
3._Визуализация_данных.pdf,186
4._Анализ_и_преобразование_данных.pdf,160
5._Работа_с_временными_рядами.pdf,36
5._Работа_с_временными_рядами_2022.pdf,81
6._Системы_управления_базами_данных.pdf,103
7._Проектирование_структурированных_данных.pdf,133
8._Запросы_на_языке_SQL.pdf,81
9._Объекты_базы_данных.pdf,48
LogisticRegression.pdf,37
norm_МГК.pdf,39
SVM.pdf,31
Классификаторы_KNN_и_наивный_байес_fin.pdf,32
Кластеризация_fin.pdf,30
Подкрепление.pdf,43
Регрессия_fin.pdf,39
Ресемплинг.pdf,29
Энтропия_и_ДПР.pdf,31
,0
`;


const searchedPDFTearms = `
count_number,word
21,
4,count
3,транспон
3,GROUP BY
2,f
2,дисперсия
2,EXPIRE
2,с
2,медиана
2,LIKE
2,reshape
2,nump
2,ч
2,numpy
2,медиан
2,EXPIREAT
2,диспер
2,трансп
1,decimal
1,DISTINCT
1,drop
1,EXPIREA
1,for
1,functio
1,GROUP
1,havi
1,having
1,idex
1,ilo
1,iloc
1,iloc.
1,IN
1,index
1,insert
1,join
1,len
1,LIK
1,like
1,lkbyf
1,lo
1,loc
1,Loc
1,mas
1,masha
1,nhf
1,nhfyc
1,nu
1,NU
1,NUM
1,NUMER
1,PERSIST
1,PERSISTEXPIREAT
1,REFERENCE
1,REFERENCES
1,res
1,resha
1,RPUSH
1,s
1,SADD
1,shape
1,SMEMBERS
1,so
1,sok
1,sokve
1,solve
1,SYS
1,to_char
1,value
1,vt
1,z
1,zip
1,zr
1,выборочная диспер
1,выборочная дисперс
1,выборочная дисперси
1,выборочная дисперсия
1,ДАТА
1,дисперп
1,дисперси
1,ме
1,между
1,методом
1,методомо
1,неч
1,нечет
1,содерж
1,содержит
1,сорт
1,сортир
1,списки
1,среднее
1,срез
1,сщ
1,таблиц
1,таблица
1,таблица 1
1,так
1,ТЕК
1,ТЕКУ
1,ТЕКУЩ
1,тран
1,транспог
1,транспони
1,транспонир
1,транспониро
1,трас
1,трасп
1,ф
1,фак
1,фактор
1,фильтр
1,чg
1,чет
1,!
1,!4
1,.head
1,|
1,a
1,abkm
1,aP
1,aPE
1,arr
1,array
1,c
1,cht
1,cjh
1,cjl
1,data
1,data.head
1,de
`;

const documentHeaderText = "Просмотр pdf документов"
const boxTitleScrolling = 'Количество уникальных просмотров pdf документов';
const columnNameScrolling = 'pdf документ';
const columnCountScrolling = 'Число просмотров';
const labelTextScrolling = 'Поиск названия pdf документа...';

const boxTitleSearchedTerms = 'Поиск по слову в pdf документах';
const columnNameSearchedTerms = 'Слова';
const columnCountSearchedTerms = 'Количество поисков';
const labelTextSearchedTerms = 'Поиск слова...';

const tableScrollingData = { boxTitle: boxTitleScrolling, columnName: columnNameScrolling, columnCount: columnCountScrolling, labelText: labelTextScrolling, data: distinctScrollingData }
const tableSearchedTermsData = { boxTitle: boxTitleSearchedTerms, columnName: columnNameSearchedTerms, columnCount: columnCountSearchedTerms, labelText: labelTextSearchedTerms, data: searchedPDFTearms }

export const documentSectionProps: DocumentSectionProps = {
    tableScrollingData: tableScrollingData,
    tableSearchedTermsData: tableSearchedTermsData,
    headerText: documentHeaderText
}


