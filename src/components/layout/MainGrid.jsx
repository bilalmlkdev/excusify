// src/components/layout/MainGrid.jsx
export function MainGrid({ left, right }) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="flex flex-col gap-6 lg:sticky lg:top-8 lg:col-span-5">
        {left}
      </div>
      <div className="flex flex-col gap-6 lg:col-span-7">{right}</div>
    </div>
  );
}
