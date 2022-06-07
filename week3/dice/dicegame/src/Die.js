import './Die.css';

const Die = ({face}) => {
    return (
        <i className={`die fas fa-dice-${face} ${"shaking"} fa-5x`} />
    )
};

export default Die;