import './PageBase.css'
import NavigationPanel from '../NavigationPanel/NavigationPanel'
import {ReactNode} from "react";

type PageBaseProps = {
    content?: ReactNode;
    showBackButton: boolean;
    showContinueButton: boolean;
};

export default function PageBase(props: PageBaseProps) {
    return (
        <div className="page-base fullscreen">
            {/*<TopPanel />*/}
            <div className={"content"}>
                {props.content}
            </div>
            {/*<NavigationPanel*/}
            {/*    showBackButton={props.showBackButton}*/}
            {/*    showContinueButton={props.showContinueButton}*/}
            {/*/>*/}
        </div>
    )
}
