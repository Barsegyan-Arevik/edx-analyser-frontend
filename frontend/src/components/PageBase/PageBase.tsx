import './PageBase.css'
import * as React from 'react'
import { ReactNode } from 'react'

type PageBaseProps = {
    children?: ReactNode;
};

export default function PageBase(props: PageBaseProps) {
    return (
        <div className="page-base fullscreen">
            <div className="content">
                {props.children}
            </div>
            {/*<footer className="footer"/>*/}
            {/*<footer className='footer'>*/}
            {/*    <div className="waves">*/}
            {/*        <div className="wave" id="wave1"></div>*/}
            {/*        <div className="wave" id="wave2"></div>*/}
            {/*        <div className="wave" id="wave3"></div>*/}
            {/*        <div className="wave" id="wave4"></div>*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    )
}
