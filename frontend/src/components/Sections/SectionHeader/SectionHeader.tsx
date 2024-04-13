import * as React from 'react';
import './SectionHeader.css'

export type HeaderProps = {
    text: string;
    style?: React.CSSProperties;
}

export default function SectionHeader(props: HeaderProps) {
    return (
        <div className={'header'} style={props.style}>
            {props.text}
        </div>
    );
}
