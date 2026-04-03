import type { TreeNode } from "./types";

export const findNode = (
  nodes: TreeNode[],
  id: number | null,
): TreeNode | undefined => {
  if (!id) return;

  for (const n of nodes) {
    if (n.id === id) return n;
    if (n.children) {
      const res = findNode(n.children, id);
      if (res) return res;
    }
  }
};
