'use client'

type SelectMenuProps = {
  options: {
    id: string;
    label: string;
  }[];
  className?: string;
};

const SelectMenu: React.FC<SelectMenuProps> = ({ options, className }: SelectMenuProps) => {
  return (
    <div >
      <select className={className}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
