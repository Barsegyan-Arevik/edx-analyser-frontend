import './PageBase.css'
import * as React from 'react';
import {ReactNode} from 'react';

type PageBaseProps = {
    children?: ReactNode;
};

export default function PageBase(props: PageBaseProps) {
    return (
        <div className="page-base fullscreen">
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
