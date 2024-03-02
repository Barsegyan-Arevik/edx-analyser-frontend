import * as React from 'react';
import PageBase from "../components/PageBase/PageBase";
import CustomTable from "../components/Charts/CustomTable";
import CustomBox from "../components/Charts/CustomBox";
import CustomTableRealData from '../components/Charts/TableHeatMapRealData';
import './StudentSearchPage.css';

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

const rows = uniqueUserNames
    .trim()
    .split('\n')
    .slice(1) // Пропускаем строку с заголовками
    .map((row, index) => {
        const [user, timeSec] = row.trim().split(/\s+/);
        return { id: index + 1, user, timeSec };
    });

export default function StudentSearchPage() {
    const boxTitle = 'Студенты курса "Название курса"';
    const columnName = 'Студенты';
    const columnCount = 'ID студента';
    const labelText = 'Поиск студента...';

    return (
        <PageBase>
            <div className={"student_page"}>
                <div className={"content_inside"}>
                    <CustomTable rows={rows} boxTitle={boxTitle} columnName={columnName} columnCount={columnCount} labelText={labelText} />
                </div>
            </div>
            {/*<CustomBox />*/}
            <footer className="footer">
                {/* Содержимое вашего футера */}
            </footer>
        </PageBase>
    );
};
