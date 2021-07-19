import './Button.css';

const Button = ({text, colorScheme, onClickFunc}) => {
    return (
        <button
            className='button'
            style={{ backgroundColor: colorScheme.color1, color: colorScheme.color4 }}
            onClick={onClickFunc}

        >
            {text}
        </button>
    )
}

export default Button
