// src/components/modals/KeyboardHelpModal.jsx
import KeyboardHelp from "../sections/KeyboardHelp";

export default function KeyboardHelpModal({ open, onClose, isDark }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md">
        <KeyboardHelp isDark={isDark} onClose={onClose} />
      </div>
    </div>
  );
}
