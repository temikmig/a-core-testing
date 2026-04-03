export type TreeNode = {
  id: number;
  name: string;
  description?: string | null;
  isAssigned: boolean;
  inLibrary: boolean;
  properties: {
    name: string;
    value: string | null;
    valueType: string;
    measure?: string | null;
  }[];
  relations: {
    name: string;
  }[];
  children: TreeNode[];
};

export type ApiTreeNode = {
  id: string;
  name?: string | null;
  label?: string | null;
  description?: string | null;
  is_assigned?: boolean;
  in_library?: boolean;
  properties?:
    | {
        name: string;
        value: string | null;
        value_type: string;
        measure: string | null;
      }[]
    | null;

  relations?:
    | {
        name: string;
      }[]
    | null;

  children?: ApiTreeNode[] | null;
};

export type TreeQueryResponse = {
  tree: ApiTreeNode;
};
