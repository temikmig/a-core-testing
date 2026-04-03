import { Input } from "@/shared/ui";
import { SearchIcon } from "@/shared/ui";
import styles from "./SearchInput.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Найти классы"
      IconBefore={<SearchIcon />}
      className={styles.input}
    />
  );
};
