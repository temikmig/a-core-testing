import { Tree as TreeKit } from "@alphacore/ui-kit";
import type { TreeNode } from "@/entities/tree/model/types";
import styles from "./TreeSidebarWidget.module.css";

type TreeSidebarWidgetProps = {
  tree: TreeNode[];
  expandedNodes: Set<number>;
  setExpandedNodes: React.Dispatch<React.SetStateAction<Set<number>>>;
  selectedNodeId: number | null;
  setSelectedNodeId: (id: number) => void;
};

export const TreeSidebarWidget = ({
  tree,
  expandedNodes,
  setExpandedNodes,
  selectedNodeId,
  setSelectedNodeId,
}: TreeSidebarWidgetProps) => {
  return (
    <aside className={styles.treeSidebar}>
      <TreeKit
        treeData={tree}
        height={600}
        width={375}
        expandedNodes={expandedNodes}
        setExpandedNodes={setExpandedNodes}
        selectedNodeIds={selectedNodeId ? [selectedNodeId] : []}
        withCheckbox
        clearParent
        onSelectNode={(node) => {
          setSelectedNodeId(node.id);
        }}
      />
    </aside>
  );
};
