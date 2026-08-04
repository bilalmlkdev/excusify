// src/components/layout/MainGrid.jsx
export function MainGrid({ left, right }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-8">
        {left}
      </div>
      <div className="lg:col-span-7 flex flex-col gap-6">{right}</div>
    </div>
  );
}
