function Button({ children, variant = "solid", disabled }) {
    const base =
        "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition border focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
        solid: "bg-primary text-white hover:bg-primary-hover border-transparent",
        outline:
            "bg-transparent border-primary text-primary hover:bg-primary hover:text-white",
        ghost:
            "bg-transparent text-text hover:bg-border",
    };

    return (
        <button
            className={`${base} ${variants[variant]}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
