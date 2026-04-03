import { Checkbox, Text } from "@alphacore/ui-kit";
import styles from "./Table.module.css";
import type { TableProps } from "../model/types";

export const Table = <T,>({
  data,
  columns,
  selectable = false,
}: TableProps<T>) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {selectable && (
            <th className={styles.checkboxCell}>
              <Checkbox checked={false} />
            </th>
          )}

          {columns.map((col) => (
            <th key={String(col.key)} style={{ width: col.width }}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => {
          return (
            <tr key={i}>
              {selectable && (
                <td className={styles.checkboxCell}>
                  <Checkbox checked={false} />
                </td>
              )}

              {columns.map((col) => {
                const value = row[col.key];

                return (
                  <td key={String(col.key)}>
                    {col.render ? (
                      col.render(value, row)
                    ) : (
                      <Text variant="Font1">{String(value ?? "")}</Text>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
