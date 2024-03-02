// Пока работает неправильно!!!!

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [startValue, setStartValue] = React.useState(3); // Начальное значение слайдера
  const [endValue, setEndValue] = React.useState(19); // Конечное значение слайдера
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      // newValue - это массив, где первый элемент - начальное значение, а второй - конечное значение
      setStartValue(newValue[0]);
      setEndValue(newValue[1]);
    }
  };

  return (
    <Box sx={{ width: '70%', paddingLeft: '50px' }}>
      <BarChart
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(startValue - 1, endValue) }))}
        skipAnimation={skipAnimation}
      />
      <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
        }
        label="skipAnimation"
        labelPlacement="end"
      />
      <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography>
      <Slider
        value={[startValue, endValue]}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        min={1}
        max={20}
        aria-labelledby="input-item-number"
      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
} as const;

const series = [
  {
    label: 'series 1',
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,
    ],
  },
].map((s) => ({ ...s, highlightScope }));

const dataset = []

//
// data = {
//     'username': ['andrey_andreew', 'mihajlovaev', 'pavlovatv', 'fadeevrv', 'mileniniv', 'xmmmmm', 'bondarevskijmn', 'sobolevama', 'kazymovaya', 'skopincevan', 'id_brunetochka', 'krylovaos', 'zamulinaov', 'tishchenkodv', 'lazutkinn', 'savelevmm', 'OlgaStrelnikova', 'burbelaas', 'shishkovavm', 'vlasovne', 'muravevalv', 'kushmanovati', 'akimovnv', 'dajbageds', 'smolchenkomy', 'matveyukov', 'yurevaoa', 'kozyrevaes', 'kuznecovaem', 'kucheruksv', 'cherepanovaev', 'dgluschenko', 'markinaekal', 'dyachenkoov', 'vorobevmy', 'obedkovaav', 'novikovaea', 'tanyaahtanya', 'id160430089', 'kotovaly', 'abrosimovaoe', 'ponkratovaaa', 'soa_', 'fastmotor', 'polikarpovoa', 'parnovaim', 'petrovarts', 'ulyanovay', 'zlobnovaai', 'mishchenkoma', 'mezan', 'sivakovia', 'semenovnn', 'antoni_chupis', 'troyanovaa', 'alenatresh', 'antondnn', 'ryattelav', 'petrovake', 'antonkireew', 'bazhutinaov', 'rigosikos', 'lactea', 'konyaev-alexsandr', 'popovaanvl', 'martyshevdv', 'hodyrevan', 'demidovaee', 'matveevamn', 'dubravinna', 'shulikavg', 'kozminyhms', 'mengyas', 'rylevagv', 'chursinovys', 'rogozinaiv', 'plotnikoviv', 'krapivinasa', 'ezhovaga', 'lohnevaei', 'braunve', 'dvolchek', 'mironovaekal', 'dyakonovasg', 'solodilovasv', 'samohinavalo', 'sizovny', 'komarovdi', 'silaevama', 'gadzhieva_elvira', 'ibatullinaav', 'volkovayv', 'zyryanovamo', 'gudisea', 'zhmurinaad', 'suprun_a', 'lyalikovavg', 'popovaverval', 'sorokinasofig', 'yakovlevairn', 'salihover', 'balashovasa', 'ratnersv', 'rezaiann', 'mariia_i', 'reshetnikovams', 'gorbunovaa', '', 'anastasiiashadchneva', 'zaripovagm', 'evsikovks', 'mdobrobaba', 'holodnayaev', 'shchitovaaa'],
//     'time_sec': [916969.158098, 987916.973749, 358814.826067, 1250497.125808, 45097.614908, 751992.172617, 54805.231977, 3592626.879868, 117706.204575, 717.533192, 442734.404789, 177966.585073, 1013978.782188, 49674.981237, 529557.331475, 270311.65697, 114205.292826, 3171175.911422, 92803.208128, 527885.289903, 19075.013011, 1851498.141546, 4114909.074228, 944714.070599, 888245.658485, 273173.491715, 1021973.576212, 479030.130778, 59734.105516, 586576.669021, 824903.333262, 528179.157482, 494856.996331, 3616245.209037, 81791.161032, 36021.658373, 14.588043, 5057810.775664, 12214.1835, 3786050.818924, 435809.815595, 11717.542582, 668174.11926, 9130.828096, 492957.734809, 380872.628707, 44923.697477, 4423.280884, 1025482.396669, 3012056.623242, 240536.623473, 183450.698217, 3524.542704, 341736.801846, 694801.296596, 109758.898567, 29131.699871, 853872.547283, 1780373.58909, 7292476.38807, 564932.81674, 701437.762333, 712970.245721, 1544687.407925, 14853.571963, 1126272.809536, 358828.572985, 582554.289293, 11438.910539, 619809.222109, 294558.759605, 1136361.084183, 986974.003087, 276443.829944, 16282.908038, 178265.174709, 1268386.252168, 5426377.06177, 197726.627409, 373283.052959, 8906.531264, 5.278412, 1212243.975779, 962528.499003, 498765.357035, 22427.785586, 53371.762029, 5249.058667, 367400.5167, 718341.0832, 325062.486957, 348493.951629, 38991.211572, 433923.482871, 257988.5859, 128716.719473, 140389.968539, 611047.133652, 950.704899, 10261.079315, 172966.445953, 7741.428233, 619690.963075, 0.0, 64628.558798, 167761.642463, 251285.792058, 3891939.685437, -123.984848, 3417.866754, 823.796439, 3629.983657, 737.789907, 0.479819]
// }
