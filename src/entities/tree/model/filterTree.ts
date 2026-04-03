import type { TreeNode } from "./types";

type Filters = {
  assigned: boolean | null;
  library: boolean | null;
};

export const filterTree = (
  nodes: TreeNode[] = [],
  query: string,
  filters: Filters,
): TreeNode[] => {
  const q = query.toLowerCase();

  const matchFilters = (node: TreeNode) => {
    if (filters.assigned !== null && node.isAssigned !== filters.assigned) {
      return false;
    }

    if (filters.library !== null && node.inLibrary !== filters.library) {
      return false;
    }

    return true;
  };

  const matchQuery = (node: TreeNode) => node.name.toLowerCase().includes(q);

  const walk = (nodes: TreeNode[]): TreeNode[] => {
    const result: TreeNode[] = [];

    for (const node of nodes) {
      const filteredChildren = node.children ? walk(node.children) : [];

      const selfMatches = matchQuery(node) && matchFilters(node);

      const hasMatchingChildren = filteredChildren.length > 0;

      if (selfMatches || hasMatchingChildren) {
        result.push({
          ...node,
          children: filteredChildren,
        });
      }
    }

    return result;
  };

  const hasFilters =
    filters.assigned !== null || filters.library !== null || query.length > 0;

  if (!hasFilters) return nodes;

  return walk(nodes);
};
