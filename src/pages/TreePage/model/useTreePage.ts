import {
  type TreeQueryResponse,
  TREE_QUERY,
  mapTree,
  filterTree,
  findNode,
} from "@/entities/tree";
import { type TreeFilters } from "@/features/tree-filters";
import { useToggleAllNodes } from "@alphacore/ui-kit";
import { useQuery } from "@apollo/client/react";
import { useMemo, useState } from "react";

export const useTreePage = () => {
  const { data, loading } = useQuery<TreeQueryResponse>(TREE_QUERY);

  const tree = useMemo(() => {
    if (!data?.tree) return [];
    return [mapTree(data.tree)];
  }, [data]);

  const [filters, setFilters] = useState<TreeFilters>({
    search: "",
    assigned: null,
    library: null,
  });

  const setSearch = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      search: value,
    }));
  };

  const onFiltersChange = (next: Partial<typeof filters>) => {
    setFilters((prev) => ({
      ...prev,
      ...next,
    }));
  };

  const filteredTree = useMemo(() => {
    return filterTree(tree, filters.search, {
      assigned: filters.assigned,
      library: filters.library,
    });
  }, [tree, filters]);

  const [expandedNodes, setExpandedNodes] = useState(new Set<number>());
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);

  const selectedNode = useMemo(() => {
    return findNode(tree, selectedNodeId);
  }, [tree, selectedNodeId]);

  const toggleAll = useToggleAllNodes({
    treeData: tree,
    setExpandedNodes,
  });

  return {
    loading,

    tree,
    filteredTree,

    filters,
    setSearch,
    onFiltersChange,

    expandedNodes,
    setExpandedNodes,

    selectedNodeId,
    setSelectedNodeId,
    selectedNode,

    toggleAll,
  };
};
