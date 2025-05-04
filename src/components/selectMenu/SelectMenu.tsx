'use client'

type SelectMenuProps = {
  options?: {
    id: string;
    label: string;
  }[];
  className?: string;
  ariaLabel: string;
};

const SelectMenu: React.FC<SelectMenuProps> = ({ options, className, ariaLabel }: SelectMenuProps) => {
  return (
    <div >
      <select className={className} aria-label={ariaLabel}>
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
