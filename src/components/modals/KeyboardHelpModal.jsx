// src/components/modals/KeyboardHelpModal.jsx
import KeyboardHelp from "../sections/KeyboardHelp";

export default function KeyboardHelpModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md">
        <KeyboardHelp onClose={onClose} />
      </div>
    </div>
  );
}
