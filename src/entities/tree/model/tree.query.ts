import { gql } from "@apollo/client";

const TREE_NODE_FRAGMENT = gql`
  fragment TreeNodeFields on TreeNode {
    id
    name
    label
    description
    is_assigned
    in_library
    properties {
      name
      value
      value_type
      measure
    }
    relations {
      name
    }
  }
`;

export const TREE_QUERY = gql`
  ${TREE_NODE_FRAGMENT}

  query Tree {
    tree {
      ...TreeNodeFields
      children {
        ...TreeNodeFields
        children {
          ...TreeNodeFields
          children {
            ...TreeNodeFields
            children {
              ...TreeNodeFields
            }
          }
        }
      }
    }
  }
`;
