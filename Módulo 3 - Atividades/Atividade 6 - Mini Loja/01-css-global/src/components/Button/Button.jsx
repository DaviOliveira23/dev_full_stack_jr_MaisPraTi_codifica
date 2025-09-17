import './Button.css';

function Button({ children, variant = "solid", disabled }) {
    return (
        <button className={`btn ${variant}`} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
