//@flow

import './NavigationButton.css'

type NavigationButtonProps = {
    direction: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

export default function NavigationButton(props: NavigationButtonProps) {
    return (
        <button
            className="navigation-button"
            onClick={props.onClick}
            style={props.style}
        >
            {props.direction}
        </button>
    );
}
