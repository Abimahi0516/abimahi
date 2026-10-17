function Button({ color, size, children }) {
  return (
    <button
      className={`custom-button ${size}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}

export default Button;
