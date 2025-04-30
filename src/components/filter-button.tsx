""

interface FilterButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export default function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      className={`filter-btn relative ${isActive ? "filter-active font-medium" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
