import {getStudentEnding} from '../../utils/utils';
import {CourseAnalyticsProps} from '../../components/Sections/CommonSection/CommonSection';
import {VideoSectionProps} from '../../components/Sections/VideoSection/VideoSection';
import {DocumentSectionProps} from '../../components/Sections/DocumentSection/DocumentSection';

////это данные CourseAnalytics
const chartDonut = [
    {value: 10, label: 'Прошли курс'},
    {value: 20, label: 'Начали, не прошли'},
    {value: 15, label: 'Не начали'},
]

const aboutCountOfStudents = {
    value: '864',
    value_additional_text: getStudentEnding(parseInt('864', 10)),
    label: 'Количество студентов, записавшихся на курс'
}
const averageTimeToEnroll = {value: '10:54', value_additional_text: 'минут', label: 'Среднее время регистрации на курс'}
const headerData = {courseId: 123, courseName: 'Название курса'}


const chartDonutProblems = [
    {value: 70, label: '70% задач решены с \n первой попытки'},
    {value: 16, label: '16% задач решены со \n второй попытки'},
    {value: 14, label: '14% задач решены с \n третьей и более попыток'},
]


export const courseAnalyticsProps: CourseAnalyticsProps = {
    donut: chartDonutProblems,
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
const videoHeaderText = 'Просмотр видео материалов'

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

const tableData = {
    boxTitle: boxTitle,
    columnName: columnName,
    columnCount: columnCount,
    labelText: labelText,
    data: csvData
}


export const videoSectionProps: VideoSectionProps = {
    tableData: tableData,
    lineChartData: lineChartData,
    headerText: videoHeaderText
};
///здесь заканчиваются данные VideoSection


///это данные DocumentSection

const distinctScrollingData = `
pdf name,scrolling amount, medianTime
1._Введение_в_науку_о_данных.pdf,16747,15
1.Введение.pdf,50,67
10._NoSQL_хранилища_2021.pdf,44,46
11._Redis_2021.pdf,39,31
12._MongoDB_2021.pdf,37,58
13._Cassandra_2021.pdf,38,32
14._Neo4j_2021.pdf,31,21
2._Инструменты_обработки_данных.pdf,252,20
2.Python.pdf,420,22
3._Визуализация_данных.pdf,186,12
4._Анализ_и_преобразование_данных.pdf,160,11
5._Работа_с_временными_рядами.pdf,36,10
5._Работа_с_временными_рядами_2022.pdf,81,1
6._Системы_управления_базами_данных.pdf,103,2
7._Проектирование_структурированных_данных.pdf,133,23
8._Запросы_на_языке_SQL.pdf,81,34
9._Объекты_базы_данных.pdf,48,45
LogisticRegression.pdf,37,67
norm_МГК.pdf,39,53
SVM.pdf,31,43
Классификаторы_KNN_и_наивный_байес_fin.pdf,32,27
Кластеризация_fin.pdf,30,76
Подкрепление.pdf,43,78
Регрессия_fin.pdf,39,65
Ресемплинг.pdf,29,54
Энтропия_и_ДПР.pdf,31,32
,0,12
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

const documentHeaderText = 'Просмотр pdf документов'
const boxTitleScrolling = 'Количество уникальных просмотров pdf документов';
const columnNameScrolling = 'pdf документ';
const columnMedian = 'Медиана (мин.)'
const columnCountScrolling = 'Число просмотров';
const labelTextScrolling = 'Поиск названия pdf документа...';

const boxTitleSearchedTerms = 'Поиск по слову в pdf документах';
const columnNameSearchedTerms = 'Слова';
const columnCountSearchedTerms = 'Количество поисков';
const labelTextSearchedTerms = 'Поиск слова...';

const tableScrollingData = {
    boxTitle: boxTitleScrolling,
    columnName: columnNameScrolling,
    columnCount: columnCountScrolling,
    columnMedian,
    labelText: labelTextScrolling,
    data: distinctScrollingData
}
const tableSearchedTermsData = {
    boxTitle: boxTitleSearchedTerms,
    columnName: columnNameSearchedTerms,
    columnCount: columnCountSearchedTerms,
    labelText: labelTextSearchedTerms,
    data: searchedPDFTearms
}


const pageData = `
page, count
x_module,21013
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/pdfbook/0/,53534
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b3c2a3cc716b434397c089c31fafeddc/64bc9d18c729445583f29013f3772398,23019
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/9fbe3b3f0d55488b8287412f935981d6/01e4e7833f2746faa6ad2d5d2ab4f9b4,22735
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/68b4180d60b8412d8da23484f370bd02/a069095d9ede4b8ea2d92ababd6e5a31,23923
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/course,8292
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a2a413c671134a989bbed1781c030756/2277f96f8751433b9cbda5382f03d044,15194
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b1faa0a35d794207bba406d2be1e9285/ac6b1937ac934d73b2af5fe18b6f854d,20012
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a4cffffbad70416bafa2b5a67525c1c8/c9f95fe64ee144b493b8b3864bb0581a,9253
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/484762194a504410855c71caa954ca7b/3e9b4d8b02ef461aab3fe79a82f954bf,11365
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/cbf1ecb85bf7450fb4ec716fe59f0f03/f70d5986af0843a5ba1be40b5d52ea3e,8579
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b66d79f0b8ca4b78bc2de7b9555d7286/a5db68bf79e944419d52014684b6f719,6504
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/080cb770c2974b679b8b326e0bc0d0fa,6816
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/68b4180d60b8412d8da23484f370bd02/c48a54a751a443eba557b11a1e94d3e6,1865
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/123bf1103a954d9ea145f4bb17acb6f8/e21a44f250d247b0b84006f4a81a1b16,2402
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b3c2a3cc716b434397c089c31fafeddc/23aa86be09724185921eb54e624efbae,1389
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a2a413c671134a989bbed1781c030756/8799df5fc731471f91295f6cf18fa2e7,1247
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/999ad798797b4a3a9623b8fee69b05b0/b025fc32653d4df89aefc0ce578ee48d,1448
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/cff236d4fb7c43e98ac5bf4aa7ded990/c7b3dabbea574ae9a4896d239e33cdcf,1472
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/0bbb69c3f41b46acbd92369f05d1e85f/49a4ad64116149e3802ccab9b335e2a6,1699
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/3ad687a87ed5456fb03022b08598f646,1103
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/9fbe3b3f0d55488b8287412f935981d6/9e6c016f23e140de94d55f5537790e7e,1030
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b1faa0a35d794207bba406d2be1e9285/7959e07c46ee440ba932a31906ed70de,857
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a4cffffbad70416bafa2b5a67525c1c8/d07c2c0ac7bb4a328545827e192e5b52,771
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b66d79f0b8ca4b78bc2de7b9555d7286/fae56b3995574e01becd2cdf741456b8,571
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/14190293cbc540feb11490a690e39cc1/9480a56a077c4a759c5965e77170d99f,1103
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e71eb50ddf6e4f759a76f6c13441ede9/cb6523d05390460ba4863213951b86c5,836
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a1cc086a5cf34dcaae06eb6f0ba39f4f/c7f80c840c03431f87b53c5029b02686,1195
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/33096dc4c8d64d46937f3abe7a6bb0bc,738
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/cbf1ecb85bf7450fb4ec716fe59f0f03/c49f95fd3a894f88bc971cfdf37da659,576
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/484762194a504410855c71caa954ca7b/8efc4e76687a46c5b1e44bb158c1228e,556
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/16463d231909400498b55f1e27ff9fa9/c02500091dc949b6b0ad69288abcf63b,588
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/38719609bff540739be088c7e325eb95/6d5c7518d2a249f1a6479ffefe788094,850
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/0bbb69c3f41b46acbd92369f05d1e85f/403fc3ffa3ec4b1fa0b28151f302e369,459
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/75516ca1a9de4da99228ec3c029749c1,512
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/29a8dd81360e4cd9aef9fd31c5f6ec29,517
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/c2baff7ed8cb4af2a9fef0af8b72ea02/cebade3260a24525b2c1879e8a3dd1a2,509
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/4684cc57487a4f9ea4a2a0d7eef42655,469
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e71eb50ddf6e4f759a76f6c13441ede9/a44070d49d9e4b2389acc6d4792f3ac0,310
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/45ae60bd04f943a79d72a71be089dfc0/d54120bd3ed54990abff3c7a5b369920,453
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/f2d9d5651e64479b8aece0048a66db87/d0e62a6e6653488eb0f104346bb53507,282
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/140309fa25ab4594b2fa728294a07e3c,370
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@83efba44fe44425da81e6e267f2d8801,165
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a0cba4be6c4641b68e4b64eefa7c9b9b/8684cd0ad5f9412e9cfd495126aa2495,232
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/14190293cbc540feb11490a690e39cc1/34d9bc5232ff4fcdbf3ec691447a5be4,175
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/f2d9d5651e64479b8aece0048a66db87/6a566d1371964028a8d0841f83b919b7,235
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/cff236d4fb7c43e98ac5bf4aa7ded990/ed76f12ad9614ffda7d9fdbeecb54e85,129
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a4cffffbad70416bafa2b5a67525c1c8/c9f95fe64ee144b493b8b3864bb0581a/10,113
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@61115a34bed74f0b9d1cf3106bc63c22,110
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a0cba4be6c4641b68e4b64eefa7c9b9b/ec576d6a97b040a3bd4d3b8df0f8fb18,253
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b3c2a3cc716b434397c089c31fafeddc/64bc9d18c729445583f29013f3772398/10,84
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/123bf1103a954d9ea145f4bb17acb6f8/8cfdadca98c348698fb27d1c6f3caa0e,133
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e0d796766693492face446db21392cbb/3bdc7624bc85442fb2c0d6ab883277e6,78
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a1cc086a5cf34dcaae06eb6f0ba39f4f/017f99a84f644cbba643589183ccb6b1,125
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@00fe454c647e41f8af8b3a5354a60c3a,62
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4a27fc7733e6459ca293d4e1e336b06d,62
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/38719609bff540739be088c7e325eb95/611e20f03a584e8a9cdaa85141e4ad07,80
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9301dac8c12348948186925ce24f20cb,61
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/d9a8d9f57596407c8e2e8c04518b5d14/8d6e557be12641ebbf1f910cdbd29a13,182
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/c2baff7ed8cb4af2a9fef0af8b72ea02/c1581666a77f41198cb76bca209a5be1,66
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ca7528f3ef45404f96f2e8f0dcc0ffce,54
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e743e84e9e9a4aaab1f84d957c2f104b,50
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/b6566d5978594b7ab3ceedbfe79c4f97,67
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/0bbb69c3f41b46acbd92369f05d1e85f/d5fb00464a004edb90c1365bfe0261ad,91
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e0d796766693492face446db21392cbb/ef103cec2d9f4787857e0001559569a6,67
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e71eb50ddf6e4f759a76f6c13441ede9/d04fd67002d54f71a4e63afa30d443ed,64
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/080cb770c2974b679b8b326e0bc0d0fa/12,48
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/f81bf48134cb4e58bd0156fd23e4f2c6,114
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a0cba4be6c4641b68e4b64eefa7c9b9b/42a28f08e32e4fc5825cde1447faf61a,94
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/999ad798797b4a3a9623b8fee69b05b0/bbe2eeca956c4c6b8a317fb14fcab07c,72
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/81c17e483fbe41e697993ca413332e72/a0fdf7f36aab4847ab8f0381c27b333f,42
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@89e8e62d5c904961a37907d8e59d0719,42
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@eb5f233a818e4d318b9088411294d22e,42
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5753ef82ed0e429d82699075ef2e8128,41
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@b24ba52e2a734393813b7bdf9e5b88af,36
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/45ae60bd04f943a79d72a71be089dfc0/cc24704946594067985dabbe231cbfe6,38
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3b4c958e40a448ebad91cce9e507860c,35
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@79ba0dd0ecb74c068bd44d01fe6d8fc9,34
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c463a6a5f81e453ba5defa543240e2e5,33
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@89fc3f535ed3417fa4b593c2cbedaeea,32
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@db2d1bcb7c5c4fd2bda98b8786fcbfb9,32
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a1cc086a5cf34dcaae06eb6f0ba39f4f/c7f80c840c03431f87b53c5029b02686/11,30
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/f2d9d5651e64479b8aece0048a66db87/97db5f63cbc54030a471753d0cd14332,85
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a1cc086a5cf34dcaae06eb6f0ba39f4f/c7f80c840c03431f87b53c5029b02686/12,30
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d86df5148b7d45d8a40f324a6fc6a6e8,28
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/198282712f5d4a248cdfb5cd6dc9b240/d66db96fbee742308c7210a178991204,56
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e91d4f8dbf2e4ee997f7686cde2fc30c,27
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@67d143f69f414a91acae2a0dc30c9355,27
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@41a21fb40a3e4a82aedc2abb4ebd38a4,27
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@61d825025c1c4cdeb186826a3b752ebb,26
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@81e0bcd914fa495b8afabd25efb73c38,24
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@b59bb66c5a9943a5912e894a807353fe,24
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9c808a47b6494c17a3b3ec66d2fc6ac0,24
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9174759210534e8982cc6246f5c43d32,23
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4c79adf0604d4e0e89d840e2650777b4,23
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@22ea8990a9fe41acb96110af1ec30af2,23
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@0bb1a2b5c08e4eae89f9cbce206c26e4,21
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@95a75a6daf2e4805979cecd6f75200c6,20
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@672f732716b94827aa7fe9c0341f8b24,19
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a292985d1f284477a43f4144b81f3094,19
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@825f49017d0b4f3bb2b06240544d6b76,19
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c17a9b98628e4c8c9d4eb755ef781770,19
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@130b9421576f43a9a7ba8fa461c2bc7d,19
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2e0c3adce02d4729a82c7fc81457a177,18
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/81c17e483fbe41e697993ca413332e72/ab944340649f42fcb070deace49d1e95,31
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4f308da2d7e84a2887a1271f5fd4378e,17
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4de6f7e51819493b853fb8e79437532b,17
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@bbcfd7539404426fbdacc05deae9afc4,16
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@6bca613253564b6d8f813b4fd85c8587,16
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9b57bef0731b4e0e9e890cc25ac0fca0,16
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@cd044e5ea0d84604824b78f36979b38c,16
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@fb05b8c22e53429398de36c0a0f2dd6c,16
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/instructor,15
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@706d9b00ef104fbd8bce84ea8d3fad04,15
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@93c72fa94f7949b482f1775130d26923,15
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@00799e06d77f4ac7b3d34a6f4715c25b,15
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f43b5ad12c024157a7612906df7ce065,15
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5eb5372a23ca42b4b452b840ec56e986,15
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a0dfb345e3fa418287d6be07d8f36b5a,14
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7e8b18484bd84159a77f438cb73b722e,14
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d4e9f3e418f544b88cccddfdd32bf164,14
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/9fbe3b3f0d55488b8287412f935981d6/01e4e7833f2746faa6ad2d5d2ab4f9b4/10,14
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5f546233a926458c8aead14b4810cbda,14
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@0fbd34972f6240d8bb6795946de50fe8,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f835ce316ba4414990facd7f0068087e,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7bc22ee2ad0c4f9f9f857a84a31976c7,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@14d733534fd04d4180a66a11f329e0b9,13
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/770ef51296644d7d8227fa09f5395140,25
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d9ec90ee1965439abf2c663c4e754c87,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5c3afe2798d54033a8d0e49a11d36d6e,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ad8ca514ca304a2aad1ef65d0e4b3d81,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c7755e52123648168456a9fbbe5bb9a0,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@183162e06cf84a27bfe5e59499f70db0,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@73995714d5cf447aa684daa2e2b67f3c,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5bf25490ff6c4f45aa51e24443300341,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1e0caa46fd7b42368ea6b9577ba1defd,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@404bf1b4d7e0449ba04ef9211b13a5d3,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2cb0202ebc514c28b37102ff42c8a382,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@6c0fd8b688984017a2d380e1775f305c,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@90a6c3ce65b34b0b8358257be685b652,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@26980c973a3641f3832cdc365d446249,11
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@35fe28f2699440508f792932c6a408a4,11
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@321b7c8f71f14486a4b92833c7d890cf,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@373f5d18b2394f93a63c57ec1e5e77a1,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e92067477e3f4a799203310a0696cbfb,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@fba08fd7eed14228ade228ef91426e2e,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e7d00b8058a44abfb572caa7fb342d64,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@de02773bfc1248f2923e5e596ab9fe71,10
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/81c17e483fbe41e697993ca413332e72/eba0a68957ae4bf1a7ef669aac4c64ab,21
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@8b9701118e334bdfbeb1ebfa294d710e,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@81a76457d02648ebbf9142fd8dc702b0,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7aa19867f5cc4878a6ac1a6e064bb217,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@6622b434df254adca8c49a6e0052fc5d,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@57f3b681ae2c464684465532565ad6f0,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@57bf88b8639c4077847f0f18276fbe99,10
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f847eea4e0e34e729275d06c6d303e9a,9
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b66d79f0b8ca4b78bc2de7b9555d7286/a5db68bf79e944419d52014684b6f719/10,9
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c03e1c53f0744f5fb98c1b162745729b,9
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3c1bc938ffab48b69ac3876c2421d215,9
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3c719d606ff6450bb416cb597d852b1c,9
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7e35991f428d46f3a9fde6d0f2e1b846,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@eeb66228e96c414bb159e14ddbf7b82f,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a87dd142a5ee490289cfb7f3007bbfa4,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ff9eb771df684ba1adc3601113c00be7,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4b9fe99b067844558b03f3e06ecd9dca,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1ed0edd23a3548b4b60a2ef4fbaecf7f,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@197d9b7ac7444ef6a1605f923a040235,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f4acac41066945549e9b38782bfa9097,8
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@339fdfaee5e0494ab82c0e3fdc370791,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d409a417ff964b04bd74858c3a562c0b,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@8aa870f48d374d86ba5b80d1a89b6d34,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@db2ff7c40dce4dc98e8733374d273d15,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ddb75b22dfea45f4ad42c91a0b5abf89,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7b2ef6d884f947258160c8d99c6f2de3,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@77a9efdc200c4cfba842b04ea615bb35,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@6ebd0ee72b054a3a9664388abf21a758,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ec4dc0fcbe0e429bb84b0ac58a71df0b,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@66211db3024349129d70fb795efedd56,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1e59976627704b02b8b334c2d594c552,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1ed87db72b484bf2bd33971f47422bdb,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@21fdc65c52c84c41b064c230e98c8cc0,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@25904798eff04dbfab8e22e1cde4d956,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ac3648ef33244c408228365b4502cc25,7
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f8317981ffed466bab92d3f8d9f3d51a,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@32b74651050349d18b7ee3702e7a3612,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@fdeb9adb40a4428da895f6fada23b5bb,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@47e06a7809a247869d737776e7e7e8c4,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c82828c63e1f4550a3b1abb35dd207ac,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@369d6c4704f5487696f6df024cabda04,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a49641a5efcb467e99ed074b42688d13,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c7e76d8c988947568814d7a59b6e8d2b,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ee57e50fb88340b28b85c6fd405de590,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ef0db220e1f54ff3be28a0e89b089159,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@6fee8b0a9b394140a533d2bd728dce72,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f1edb5df7297494fb9483bdf856c4691,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e1a952dc75914a1fb480dbb82e671a8c,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@855a2d925c9b492ea3becb893a22c346,6
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@861645c42c3b48f8a02512224df1671b,5
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e0d796766693492face446db21392cbb/76694e7f86fd440a8e9ee076ea32b144,5
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/bookmarks,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@191f8ac0e95a4e23a1189d50e55da229,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@217dc126b87e4574950bb7be1f45b972,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@23b7525c90d44c1fae8bb81bef8997a2,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2cb0704784464689a05cc81e75607457,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@32ab61ecbdff48b79df08b7dc08cffca,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@555d56eff3db4a9f9504c737d337c834,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@6be94b47239f423d94c0e5734dcb9226,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@72fa261a5ad44226ba980ac45a48b8e2,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@78ee6d8ec55448efa25a244d4d52807a,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ccb1d70b556f4be9ac11c4fcdab19c43,5
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a75bfe885db44f219de5ef6d64bc01e0,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4643965bf2f844c98f611c5cd9acb52f,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a0e034278b214c608be30d8a15c8456e,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@890e1ddfc00446888c575590f0767aed,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@96aebaccda6a425283c85f5b4716ced1,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5ca1c1f307e746a29df1d8a609b40a59,4
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@f81bf48134cb4e58bd0156fd23e4f2c6/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@eeb66228e96c414bb159e14ddbf7b82f,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@dd20175fffdf4eb598073b6645432cd0,4
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@f81bf48134cb4e58bd0156fd23e4f2c6/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c7755e52123648168456a9fbbe5bb9a0,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@db4247c867e0485abbf659484ba6cc09,4
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3f932434130b4629ac03768f0ceae4fe,4
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a292985d1f284477a43f4144b81f3094,3
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1eb229d476734237960539427dc903dd,3
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@3ad687a87ed5456fb03022b08598f646/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2cb0202ebc514c28b37102ff42c8a382,3
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@64bc9d18c729445583f29013f3772398/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f43b5ad12c024157a7612906df7ce065,3
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9995cca35a484180a5104593579193f5,3
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7f48a9ddf4dd41a5af2ff846a489058d,3
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/080cb770c2974b679b8b326e0bc0d0fa/11,3
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@24332a9801e84bcd82e3588d29a1b4db,3
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e71eb50ddf6e4f759a76f6c13441ede9/cb6523d05390460ba4863213951b86c5/13,3
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2d4dbdd204c04da8ad4947e14c12c592,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@25c27af6870f4d65a29a27259026caae,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5a44d48ce12d4a4d9d2551b64729528f,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1135383a234b4c0d8bc5a1f083304099,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5f69307313274b4fa5677397029dd3ad,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@3ad687a87ed5456fb03022b08598f646/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f835ce316ba4414990facd7f0068087e,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@64bc9d18c729445583f29013f3772398/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@0bb1a2b5c08e4eae89f9cbce206c26e4,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@64bc9d18c729445583f29013f3772398/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2e0c3adce02d4729a82c7fc81457a177,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@25904798eff04dbfab8e22e1cde4d956,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7f48a9ddf4dd41a5af2ff846a489058d,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@8347d1e62e3c42788e1e16beb9d84e89,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@bbe2eeca956c4c6b8a317fb14fcab07c/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@cd044e5ea0d84604824b78f36979b38c,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@8d922f64cc0b425db4748d0ea1aee151,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@90b8023df78d4abc82d3defbaa91988e,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@91ae544bac134385ab75dc42866bd15b,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@93e3013d7a274f2e84d9cb2543403241,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9a115f51860543d2b599292487588932,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9f0f8d684de741e590b1b4b1f9b33ed4,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@bcb61d0357974367843deba788049f9b,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@cc419cdd15ce4cc0b5c88eb4df0d1498,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d250086885964645b09d1ce723d9a760,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d536de0d4f2a43399ddcdd1c0d3c1659,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@dc8d533ac0de45008fbddf3c60829c41,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ebc5849dab654e90a83c8b40acef9f0c,2
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/0bbb69c3f41b46acbd92369f05d1e85f/49a4ad64116149e3802ccab9b335e2a6/12,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@23aa86be09724185921eb54e624efbae/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3f932434130b4629ac03768f0ceae4fe,2
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@0fbd34972f6240d8bb6795946de50fe8,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@64bc9d18c729445583f29013f3772398/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a49641a5efcb467e99ed074b42688d13,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@01e4e7833f2746faa6ad2d5d2ab4f9b4/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@61d825025c1c4cdeb186826a3b752ebb,1
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@29b1dc3299d34b0ab787b4178807a8e5,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@8d6e557be12641ebbf1f910cdbd29a13/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5f546233a926458c8aead14b4810cbda,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@d0e62a6e6653488eb0f104346bb53507/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ec4dc0fcbe0e429bb84b0ac58a71df0b,1
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@23062b4c94924a9a91245f065b555026,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f1edb5df7297494fb9483bdf856c4691,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@dd20175fffdf4eb598073b6645432cd0,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@db2ff7c40dce4dc98e8733374d273d15,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@8d6e557be12641ebbf1f910cdbd29a13/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1ed87db72b484bf2bd33971f47422bdb,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/home,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@3ad687a87ed5456fb03022b08598f646/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9f0f8d684de741e590b1b4b1f9b33ed4,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d409a417ff964b04bd74858c3a562c0b,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9a115f51860543d2b599292487588932,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@78ee6d8ec55448efa25a244d4d52807a,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@77a9efdc200c4cfba842b04ea615bb35,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@73995714d5cf447aa684daa2e2b67f3c,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@5bf25490ff6c4f45aa51e24443300341,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@26980c973a3641f3832cdc365d446249,1
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c6a8b5369d6e44debd18fcc1d8b594a0,1
https://apps.openedu.ru/learning/course/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@sequential+block@b025fc32653d4df89aefc0ce578ee48d/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@191f8ac0e95a4e23a1189d50e55da229,1
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/080cb770c2974b679b8b326e0bc0d0fa/10,1
`


const boxTitlePages = 'Популярность страниц курса';
const columnNamePages = 'Ссылка';
const columnCountPages = 'Количество поисков';
const labelTextPages = 'Поиск ссылки...';

const tablePages = {
    boxTitle: boxTitlePages,
    columnName: columnNamePages,
    columnCount: columnCountPages,
    labelText: labelTextPages,
    data: pageData
}

const videoLink = `
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/123bf1103a954d9ea145f4bb17acb6f8/e21a44f250d247b0b84006f4a81a1b16,399,50
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/080cb770c2974b679b8b326e0bc0d0fa/12,1,67
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/3ad687a87ed5456fb03022b08598f646,284,54
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/c2baff7ed8cb4af2a9fef0af8b72ea02/cebade3260a24525b2c1879e8a3dd1a2,57,45
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@191f8ac0e95a4e23a1189d50e55da229,1,46
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@23b7525c90d44c1fae8bb81bef8997a2,1,48
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@25904798eff04dbfab8e22e1cde4d956,1,56
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2cb0704784464689a05cc81e75607457,1,21
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@339fdfaee5e0494ab82c0e3fdc370791,1,23
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@66211db3024349129d70fb795efedd56,1,67
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7b2ef6d884f947258160c8d99c6f2de3,1,29
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@8b9701118e334bdfbeb1ebfa294d710e,1,28
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ac3648ef33244c408228365b4502cc25,1,27
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@c03e1c53f0744f5fb98c1b162745729b,1,34
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d409a417ff964b04bd74858c3a562c0b,1,35
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/14190293cbc540feb11490a690e39cc1/9480a56a077c4a759c5965e77170d99f,223,39
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/140309fa25ab4594b2fa728294a07e3c,85,97
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/b6566d5978594b7ab3ceedbfe79c4f97,8,56
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/68b4180d60b8412d8da23484f370bd02/a069095d9ede4b8ea2d92ababd6e5a31,5903,32
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/999ad798797b4a3a9623b8fee69b05b0/b025fc32653d4df89aefc0ce578ee48d,357,37
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e71eb50ddf6e4f759a76f6c13441ede9/cb6523d05390460ba4863213951b86c5,153,56
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@1e59976627704b02b8b334c2d594c552,2,2
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@2e0c3adce02d4729a82c7fc81457a177,2,23
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4b9fe99b067844558b03f3e06ecd9dca,2,11
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@57f3b681ae2c464684465532565ad6f0,2,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@672f732716b94827aa7fe9c0341f8b24,2,17
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@78ee6d8ec55448efa25a244d4d52807a,2,25
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@7e8b18484bd84159a77f438cb73b722e,2,21
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@90a6c3ce65b34b0b8358257be685b652,2,11
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@d86df5148b7d45d8a40f324a6fc6a6e8,2,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@db2ff7c40dce4dc98e8733374d273d15,2,13
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e92067477e3f4a799203310a0696cbfb,2,14
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ec4dc0fcbe0e429bb84b0ac58a71df0b,2,15
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/1f04e176f3ab4e57aa8279610f03fc06/080cb770c2974b679b8b326e0bc0d0fa,904,16
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/75516ca1a9de4da99228ec3c029749c1,146,17
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/f2d9d5651e64479b8aece0048a66db87/6a566d1371964028a8d0841f83b919b7,80,18
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3c1bc938ffab48b69ac3876c2421d215,3,19
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@57bf88b8639c4077847f0f18276fbe99,3,20
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@77a9efdc200c4cfba842b04ea615bb35,3,21
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@a292985d1f284477a43f4144b81f3094,3,22
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/38719609bff540739be088c7e325eb95/6d5c7518d2a249f1a6479ffefe788094,139,25
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/81c17e483fbe41e697993ca413332e72/ab944340649f42fcb070deace49d1e95,4,29
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/9fbe3b3f0d55488b8287412f935981d6/01e4e7833f2746faa6ad2d5d2ab4f9b4,6943,31
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a0cba4be6c4641b68e4b64eefa7c9b9b/8684cd0ad5f9412e9cfd495126aa2495,57,38
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a4cffffbad70416bafa2b5a67525c1c8/c9f95fe64ee144b493b8b3864bb0581a,1897,87
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/cff236d4fb7c43e98ac5bf4aa7ded990/c7b3dabbea574ae9a4896d239e33cdcf,262,88
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/e0d796766693492face446db21392cbb/ef103cec2d9f4787857e0001559569a6,10,78
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/f2d9d5651e64479b8aece0048a66db87/d0e62a6e6653488eb0f104346bb53507,91,77
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@26980c973a3641f3832cdc365d446249,4,65
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@61d825025c1c4cdeb186826a3b752ebb,4,56
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@f835ce316ba4414990facd7f0068087e,4,54
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@fb05b8c22e53429398de36c0a0f2dd6c,4,45
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/81c17e483fbe41e697993ca413332e72/a0fdf7f36aab4847ab8f0381c27b333f,5,47
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@00799e06d77f4ac7b3d34a6f4715c25b,5,47
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@0bb1a2b5c08e4eae89f9cbce206c26e4,5,65
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@73995714d5cf447aa684daa2e2b67f3c,5,57
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@93c72fa94f7949b482f1775130d26923,5,48
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@95a75a6daf2e4805979cecd6f75200c6,5,40
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@ad8ca514ca304a2aad1ef65d0e4b3d81,5,32
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b66d79f0b8ca4b78bc2de7b9555d7286/a5db68bf79e944419d52014684b6f719,1417,34
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@22ea8990a9fe41acb96110af1ec30af2,6,35
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/0bbb69c3f41b46acbd92369f05d1e85f/49a4ad64116149e3802ccab9b335e2a6,364,45
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/b8f2ca7be6ba4412964f1b2803e33bc6/33096dc4c8d64d46937f3abe7a6bb0bc,195,43
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@130b9421576f43a9a7ba8fa461c2bc7d,7,34
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@4c79adf0604d4e0e89d840e2650777b4,7,45
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a1cc086a5cf34dcaae06eb6f0ba39f4f/c7f80c840c03431f87b53c5029b02686/11,8,56
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a2a413c671134a989bbed1781c030756/2277f96f8751433b9cbda5382f03d044,4694,67
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@41a21fb40a3e4a82aedc2abb4ebd38a4,8,76
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@67d143f69f414a91acae2a0dc30c9355,8,62
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@9c808a47b6494c17a3b3ec66d2fc6ac0,8,78
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/0bbb69c3f41b46acbd92369f05d1e85f/403fc3ffa3ec4b1fa0b28151f302e369,76,87
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/5967a352d9f4470ab988ac44f81e268d/4684cc57487a4f9ea4a2a0d7eef42655,94,65
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a0cba4be6c4641b68e4b64eefa7c9b9b/ec576d6a97b040a3bd4d3b8df0f8fb18,50,54
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a1cc086a5cf34dcaae06eb6f0ba39f4f/c7f80c840c03431f87b53c5029b02686/12,9,43
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@3b4c958e40a448ebad91cce9e507860c,9,32
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@89fc3f535ed3417fa4b593c2cbedaeea,9,12
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@e91d4f8dbf2e4ee997f7686cde2fc30c,9,23
https://courses.openedu.ru/courses/course-v1:ITMOUniversity+DATANTECH2035+summer_2022_1/courseware/a4cffffbad70416bafa2b5a67525c1c8/c9f95fe64ee144b493b8b3864bb0581a/10,10,34
https://courses.openedu.ru/xblock/block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@vertical+block@b24ba52e2a734393813b7bdf9e5b88af,10,43
`


const boxTitleVideos = 'Популярность видеоматериалов';
const columnNameVideos = 'Ссылка';
const columnCountVideos = 'Количество поисков';
const columnPercent = 'Процент просмотра (медиана)';
const labelTextVideos = 'Поиск ссылки...';

const tableVideos = {
    boxTitle: boxTitleVideos,
    columnName: columnNameVideos,
    columnCount: columnCountVideos,
    additionalColumn: columnPercent,
    labelText: labelTextVideos,
    data: videoLink
}


const problems = `
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4483ea411f0e49559fbb4a255974b4dd,87
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@44c1efffe7944e9588a1a4a25b9fe313,76
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@44c907884f514aabbe5fdda25513e8cf,56
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@44e2caf1feec4185b7197bc7a995fbf2,34
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4568947814f0441880a528808e18298b,35
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4598338ea1db40d0ac41145c52e5a416,38
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@471fd10c6dc64b33ab248582befb9cc5,45
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@475868397348404889c68de9d817c6d4,76
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4959b64d70994af99c96ef03d6611e35,43
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4ace374a49b34835b83fe7d4f8d48d2d,56
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4ad92002b5054c718a01f5770110dd00,21
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4b83e4efa313427598a5918b746ffd83,23
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4db2c2a903f646748effc81d687dc23b,14
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4f7cd32af4334c85999ab803fe1c91ac,17
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@4fcf1044cc72457e9e801ec9c36275ac,21
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@af4a3cfaf8d0472982a51181bde880e3,38
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@afb576e184b74114aaf4f7f81b882421,85
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b1d6708238fd4ac09678ed5711818d6d,58
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b223e154dea64dc2953e29fe4036afc9,76
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b26d2be1a72748528f8ae5195ae6871c,45
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b341ed911cac4fc0b21d282ca2828d5d,27
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b4f0aba41f344652abcf8601b0505b8a,20
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b516f320c4b449758d0fc0532c1a098c,21
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b6009a399c3e48d5b9fb6c357d49caf3,23
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b8d1eee512184194bf156b7c8bf53e64,26
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@b926c9d4f40d480ab8d4c725fee8893f,17
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@ba675b552cce460cb4561f89ffc2fdc6,72
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@baa8cb7857c543ecab22270677e3a94c,21
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@bb6906307a5d4b52a6bb3ff4c937493a,16
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@bc3b6aba9c424aa89c5422a08fbc4d28,6
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@bca273723b8e4df7a44643ac4beab40a,40
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@bd177feb9d9841449c78e927d590979c,56
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@c04e38fe97b2439cb8da052d9207ef6e,58
block-v1:ITMOUniversity+DATANTECH2035+summer_2022_1+type@problem+block@c10779456d83475eadb62504705d2d0e,43
`

const boxTitleProblems = 'Сложность задач';
const columnNameProblems = 'Задача';
const columnCountProblems = 'Процент успешных решений (медиана)';
const labelTextProblems = 'Поиск задачи...';

const tableProblems = {
    boxTitle: boxTitleProblems,
    columnName: columnNameProblems,
    columnCount: columnCountProblems,
    labelText: labelTextProblems,
    data: problems
}


export const documentSectionProps: DocumentSectionProps = {
    tableScrollingData: tableScrollingData,
    // tableSearchedTermsData: tableSearchedTermsData,
    tableSearchedTermsData: tablePages,
    headerText: documentHeaderText
}




