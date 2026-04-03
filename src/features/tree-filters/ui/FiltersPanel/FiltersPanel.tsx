import { SearchInput } from "../SearchInput/SearchInput";
import { FilterSelect } from "../FilterSelect";
import type { TreeFilters } from "../../model/types";
import { Stack } from "@alphacore/ui-kit";
import styles from "./FiltersPanel.module.css";

type Props = {
  filters: TreeFilters;
  setSearch: (value: string) => void;
  onFiltersChange: (next: Partial<TreeFilters>) => void;
};

export const FiltersPanel = ({
  filters,
  setSearch,
  onFiltersChange,
}: Props) => {
  return (
    <Stack className={styles.panel}>
      <FilterSelect
        label="Присвоенные"
        value={filters.assigned}
        onChange={(val) => onFiltersChange({ assigned: val })}
      />
      <FilterSelect
        label="В библиотеке"
        value={filters.library}
        onChange={(val) => onFiltersChange({ library: val })}
      />
      <SearchInput value={filters.search} onChange={setSearch} />
    </Stack>
  );
};
