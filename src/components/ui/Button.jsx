// src/components/ui/Button.jsx
export function Button({ children, className = "", ...props }) {
  return (
    <button className={`transition-all cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  );
}
