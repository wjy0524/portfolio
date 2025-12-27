type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function RightDock({
  isOpen,
  onClose,
  children,
}: Props) {
  return (
    <div
      className={`
        fixed top-0 right-0 z-50 h-screen
        bg-white border-l shadow-xl
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        w-[640px]   /* ✅ 여기서 폭 조절 */
      `}
    >
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b">
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-black"
        >
          ← Close
        </button>
      </div>

      {/* ✅ Scrollable Content */}
      <div className="h-[calc(100vh-56px)] overflow-y-auto p-6">
        {children}
      </div>
    </div>
  );
}
