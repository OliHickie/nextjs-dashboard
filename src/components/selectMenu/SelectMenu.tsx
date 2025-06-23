'use client'

type SelectMenuProps = {
  options?: {
    id: string;
    label: string;
  }[];
  className?: string;
  ariaLabel: string;
  onChange?: (id: string) => void;
};

const SelectMenu: React.FC<SelectMenuProps> = ({ options, className, ariaLabel, onChange }: SelectMenuProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div >
      <select className={className} aria-label={ariaLabel} onChange={handleChange}>
        {options && options.length > 0 ? (
          options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.label}
        </option>
          ))
        ) : (
          <option value="null">-</option>
        )}
      </select>
    </div>
  );
};

export default SelectMenu;
