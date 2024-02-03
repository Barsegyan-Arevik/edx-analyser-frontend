import NavigationButton from './NavigationButton'
import './NavigationPanel.css'

type NavigationPanelProps = {
    showBackButton: boolean;
    showContinueButton: boolean;
}

export default function NavigationPanel(props: NavigationPanelProps) {
    return (
        <div className="navigation-panel">
            {props.showBackButton ? (
                <NavigationButton
                    direction="<< Back"
                    onClick={() => {}}
                    style={{ gridColumn: 1, marginLeft: 0 }}
                />
            ) : null}
            {props.showContinueButton ? (
                <NavigationButton
                    direction="Continue >>"
                    onClick={() => {}}
                    style={{ gridColumn: 3, marginRight: 0 }}
                />
            ) : null}
        </div>
    )
}
