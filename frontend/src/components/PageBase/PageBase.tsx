import './PageBase.css'
import {ReactNode} from "react";

type PageBaseProps = {
    children?: ReactNode;
};

export default function PageBase(props: PageBaseProps) {

    const windowHeight = window.innerHeight;
    return (
        <div className="page-base fullscreen">
            <div style={{height: windowHeight}}></div>
            <div className={"bg_image"}>
                {/*<img src="./Rectangle.svg"/>*/}
                Привет, тут текст
            </div>
            <div style={{height: windowHeight}}></div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
