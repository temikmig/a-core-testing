import type { ApiTreeNode, TreeNode } from "./types";

export const mapTree = (node: ApiTreeNode): TreeNode => {
  return {
    id: Number(node.id),
    name: node.name ?? node.label ?? "Unnamed",
    description: node.description ?? null,

    isAssigned: node.is_assigned ?? false,
    inLibrary: node.in_library ?? false,

    properties: (node.properties ?? []).map((p) => ({
      name: p.name,
      value: p.value,
      valueType: p.value_type,
      measure: p.measure ?? undefined,
    })),

    relations: node.relations ?? [],

    children: (node.children ?? []).map(mapTree),
  };
};
