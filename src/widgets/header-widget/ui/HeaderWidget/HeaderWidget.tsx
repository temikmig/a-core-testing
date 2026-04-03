import styles from "./HeaderWidget.module.css";
import { Text } from "@alphacore/ui-kit";

import { FiltersPanel, type TreeFilters } from "@/features/tree-filters";

type HeaderWidgetProps = {
  filters: TreeFilters;
  onFiltersChange: (next: Partial<TreeFilters>) => void;
  setSearch: (value: string) => void;
};

export const HeaderWidget = ({
  filters,
  setSearch,
  onFiltersChange,
}: HeaderWidgetProps) => {
  return (
    <header className={styles.header}>
      <Text variant="Font3">Классы</Text>
      <FiltersPanel
        filters={filters}
        setSearch={setSearch}
        onFiltersChange={onFiltersChange}
      />
    </header>
  );
};
