import styles from './Button.module.css';

function Button({ children, variant = "solid", disabled }) {
    return (
        <button
            className={`${styles.btn} ${styles[variant]}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
