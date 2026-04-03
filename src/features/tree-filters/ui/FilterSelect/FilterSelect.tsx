import { Select } from "@alphacore/ui-kit";
import styles from "./FilterSelect.module.css";

type Props = {
  label: string;
  value: boolean | null;
  onChange: (value: boolean | null) => void;
};

const options = [
  { label: "Да", value: "true" },
  { label: "Нет", value: "false" },
];

export const FilterSelect = ({ label, value, onChange }: Props) => {
  return (
    <Select
      listing
      placeholder={label}
      variant="fill"
      options={options.map((o) => ({
        ...o,
        checked:
          (o.value === "true" && value === true) ||
          (o.value === "false" && value === false),
      }))}
      onSelect={(opt) => {
        onChange(opt.value === "true" ? true : false);
      }}
      onRemove={() => onChange(null)}
      className={styles.select}
      errorHidden
    />
  );
};
