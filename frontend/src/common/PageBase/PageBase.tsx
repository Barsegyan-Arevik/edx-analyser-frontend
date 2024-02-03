import './PageBase.css'
import TopPanel from './TopPanel'
import NavigationPanel from './NavigationPanel'
import {ReactNode} from "react";

type PageBaseProps = {
    content?: ReactNode;
    showBackButton: boolean;
    showContinueButton: boolean;
};

export default function PageBase(props: PageBaseProps) {
    return (
        <div className="page-base fullscreen">
            <TopPanel />
            <div className="content">
                {props.content}
            </div>
            {/*<NavigationPanel*/}
            {/*    showBackButton={props.showBackButton}*/}
            {/*    showContinueButton={props.showContinueButton}*/}
            {/*/>*/}
        </div>
    )
}
