import type { Transaction } from "@/types/transaction";
import { useState } from "react";

export const usePagination = (filteredData: Transaction[]) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = filteredData.slice(startIndex, endIndex);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    pageData,
  };
};
