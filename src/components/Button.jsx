export function Button({ children, className, ...otherProps }) {
  return (
    <button {...otherProps} className={`button ${className}`}>
      {children}
    </button>
  )
}
