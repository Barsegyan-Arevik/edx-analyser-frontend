import * as React from 'react';
import './Header.css'

export type HeaderProps = {
    text: string;
    style?: React.CSSProperties;
}

export default function Header(props: HeaderProps) {
    return (
        <div className={'header'} style={props.style}>
            {props.text}
        </div>
    );
}
