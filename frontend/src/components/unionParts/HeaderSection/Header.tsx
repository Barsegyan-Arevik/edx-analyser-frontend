import * as React from 'react';
import './Header.css'

export default function Header(){
    return (
        <div className={"header"}>
            {/*сюда нужно передавать с помощью пропса название курса*/}
            Аналитика по курсу "Название курса"
        </div>
    );
};
