export const formatValue = (
  value: string | null | undefined,
  valueType?: string,
): string | boolean => {
  if (value === null || value === undefined) return "";

  switch (valueType) {
    case "bool": {
      const boolValue =
        typeof value === "boolean" ? value : value === "true" || value === "1";

      return boolValue ? true : false;
    }

    default:
      return String(value);
  }
};
