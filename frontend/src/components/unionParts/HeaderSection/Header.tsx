import * as React from 'react';
import './Header.css'

export type HeaderProps = {
    text: string;
}

export default function Header(props: HeaderProps){
    return (
        <div className={"header"}>
            {/*сюда нужно передавать с помощью пропса название курса*/}
            {props.text}
            {/*Аналитика по курсу "Название курса"*/}
        </div>
    );
};
