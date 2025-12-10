interface InfoButtonProps {
  id: string;
  onToggle: (id: string) => void;
  isOpen: boolean;
}

export function InfoButton({ id, onToggle }: InfoButtonProps) {
  return (
    <button
      type="button"
      className="btn btn-sm"
      onClick={() => onToggle(id)}
      aria-label="Покажи информация"
      style={{ minWidth: '44px', minHeight: '44px' }} // Touch-friendly size
    >
      <i className="fas fa-info-circle"></i>
    </button>
  );
}

interface InfoRowProps {
  id: string;
  isOpen: boolean;
  children: React.ReactNode;
}

export function InfoRow({ id, isOpen, children }: InfoRowProps) {
  if (!isOpen) return null;

  return (
    <tr id={`${id}_info`}>
      <td colSpan={5} className="p-3">
        <p className="mb-0 small">{children}</p>
      </td>
    </tr>
  );
}

