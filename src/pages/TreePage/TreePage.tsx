import { HeaderWidget } from "@/widgets/header-widget";
import { ObjectDetailsWidget } from "@/widgets/object-details-widget";
import { TreeSidebarWidget } from "@/widgets/tree-sidebar-widget";
import { useTreePage } from "./model";
import { Button, Stack } from "@alphacore/ui-kit";

import styles from "./TreePage.module.css";

export const TreePage = () => {
  const {
    filteredTree,
    selectedNode,
    selectedNodeId,
    setSelectedNodeId,
    expandedNodes,
    setExpandedNodes,
    toggleAll,
    filters,
    setSearch,
    onFiltersChange,
  } = useTreePage();

  return (
    <Stack className={styles.page}>
      <HeaderWidget
        filters={filters}
        onFiltersChange={onFiltersChange}
        setSearch={setSearch}
      />
      <Stack className={styles.buttons}>
        <Button onClick={() => toggleAll.toggleExpandAll(false)}>
          Свернуть все
        </Button>
        <Button onClick={() => toggleAll.toggleExpandAll(true)}>
          Развернуть все
        </Button>
      </Stack>
      <Stack className={styles.body}>
        <TreeSidebarWidget
          tree={filteredTree}
          expandedNodes={expandedNodes}
          setExpandedNodes={setExpandedNodes}
          selectedNodeId={selectedNodeId}
          setSelectedNodeId={setSelectedNodeId}
        />
        <ObjectDetailsWidget node={selectedNode} />
      </Stack>
    </Stack>
  );
};
