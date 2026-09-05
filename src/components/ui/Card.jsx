// src/components/ui/Card.jsx
export function Card({ children, className = "" }) {
  return (
    <div
      className={`mb-5 divide-y divide-line rounded-lg border-2 border-line bg-surface ${className}`}
    >
      {children}
    </div>
  );
}
