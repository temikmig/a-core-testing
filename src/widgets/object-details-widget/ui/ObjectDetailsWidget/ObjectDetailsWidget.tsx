import { type TreeNode } from "@/entities/tree/model/types";
import styles from "./ObjectDetailsWidget.module.css";
import { Checkbox, Stack, Text, TextArea } from "@alphacore/ui-kit";
import { Table } from "@/shared/ui";
import { formatValue } from "@/shared/lib";

interface ObjectDetailsWidgetProps {
  node?: TreeNode;
}

type Property = {
  name: string;
  value: string | null;
  measure?: string | null;
  valueType: string;
};

export const ObjectDetailsWidget = ({ node }: ObjectDetailsWidgetProps) => {
  if (!node) {
    return (
      <Stack>
        <Text variant="Font2">Выберите класс</Text>
      </Stack>
    );
  }

  return (
    <section className={styles.objectDetails}>
      <Stack style={{ width: 850 }}>
        <Text variant="Font3">Описание</Text>
        <TextArea
          className={styles.inputDescription}
          placeholder="Описание"
          value={node.description || ""}
          onChange={() => {}}
        />
      </Stack>

      <Stack style={{ width: 850 }}>
        <Text variant="Font3">Свойства</Text>
        {node.properties.length === 0 ? (
          <Text variant="Font2">Свойства отсутствуют</Text>
        ) : (
          <Table<Property>
            data={node.properties}
            columns={[
              {
                key: "name",
                title: "Название",
                width: 450,
              },
              {
                key: "value",
                title: "Значение по умолчанию",
                width: 220,
                render: (value, row) => {
                  const val = formatValue(value, row.valueType);

                  if (typeof val === "boolean") {
                    return <Checkbox checked={val} />;
                  }

                  return val;
                },
              },
              {
                key: "measure",
                title: "Единица измерения",
                width: 180,
              },
            ]}
          />
        )}
      </Stack>

      <Stack style={{ width: 430 }}>
        <Text variant="Font3">Связи</Text>
        {node.relations.length === 0 ? (
          <Text variant="Font2">Связи отсутствуют</Text>
        ) : (
          <Table<{ name: string }>
            selectable
            data={node.relations}
            columns={[
              {
                key: "name",
                title: "Название класса",
              },
            ]}
          />
        )}
      </Stack>
    </section>
  );
};
