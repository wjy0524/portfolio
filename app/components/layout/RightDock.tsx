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
        fixed z-50 bg-white shadow-xl
        transition-transform duration-300 ease-out
        flex flex-col

        /* ================= Mobile ================= */
        inset-0
        ${isOpen ? "translate-y-0" : "translate-y-full"}

        /* ================= Desktop ================= */
        lg:inset-auto
        lg:top-0 lg:right-0
        lg:h-screen
        lg:w-[640px]
        lg:border-l
        lg:translate-y-0
        ${isOpen ? "lg:translate-x-0" : "lg:translate-x-full"}
      `}
    >
      {/* ================= Header ================= */}
      <div className="h-14 px-4 flex items-center justify-between border-b shrink-0">
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-black"
        >
          ← Close
        </button>
      </div>

      {/* ================= Scrollable Content ================= */}
      <div
        className="
          flex-1
          overflow-y-auto
          p-6
          pb-28
          lg:pb-6
        "
        style={{
          paddingBottom: "calc(7rem + env(safe-area-inset-bottom))",
        }}
      >
        {children}
      </div>
    </div>
  );
}
