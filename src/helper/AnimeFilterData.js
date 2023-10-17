import { useMemo } from "react";

export function useFilterData(data, query) {
  // Use useMemo to memoize the filtered data and avoid unnecessary re-computation
  const filteredData = useMemo(() => {
    if (query === "") {
      return data;
    }

    return data.filter(
      (item) =>
        item.attributes.canonicalTitle.toLowerCase().includes(query.toLowerCase()) ||
        item.attributes.synopsis.toLowerCase().includes(query.toLowerCase())
    );
  }, [data, query]); 

  // Return the filtered data
  return filteredData;
}