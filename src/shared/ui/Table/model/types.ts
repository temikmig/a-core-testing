export type Column<T> = {
  key: keyof T;
  title: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  width?: number;
};

export type TableProps<T> = {
  data: T[];
  columns: Column<T>[];

  selectable?: boolean;
  selected?: Set<number>;
  onToggleRow?: (index: number) => void;
};
