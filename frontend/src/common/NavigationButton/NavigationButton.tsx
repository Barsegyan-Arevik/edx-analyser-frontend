import './NavigationButton.css'

type NavigationButtonProps = {
    direction: string;
    onClick: () => void;
    style?: React.CSSProperties;
}

// NavigationButton -- компонент
// react components function vs class
// !!! functional: const NavigationButton = (props: NavigationButtonProps) => {}
// class: NavigationButton EXTENDS render(props: NavigationButtonProps) {}

// props: NavigationButtonProps -- параметры (properties)
// суть в переиспользовании
// компоненты параметры состояния
// параметры идут сверху от родителя
// !!! react state
// setState()
// this.state =
// !!! hooks: setState(), useEffect()
// const [chartData, setChartData] = useState(null)

// в каждом файле может быть несколько компонент
// export -- можем увидеть из других файлов
// default -- может быть только одна
// default -- import NavigationButton
// no default -- import { NavigationButton, ... }
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
