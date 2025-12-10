import FiltersPanel from "@/components/filter/FiltersPanel";
import { useState } from "react";
import useTransactionsStore from "@/storage/useTransactionsStore";
import GridTransactions from "@/components/transaction/GridTransactions";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/filter/Pagination";
import { usePagination } from "@/hooks/usePagination";

type Filters = {
  type: string;
  date: string;
  category: string;
  search: string;
};

const FilterPage = () => {
  const transactions = useTransactionsStore((state) => state.transactions);

  const defaultFilters: Filters = {
    type: "",
    date: "",
    category: "",
    search: "",
  };

  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const filteredData = transactions
    .filter((t) => (filters.type ? t.type === filters.type : true))
    .filter((t) => (filters.date ? t.date === filters.date : true))
    .filter((t) => (filters.category ? t.category === filters.category : true))
    .filter((t) =>
      filters.search
        ? t.name.toLowerCase().includes(filters.search.toLowerCase())
        : true
    );

  const { currentPage, setCurrentPage, totalPages, pageData } =
    usePagination(filteredData);

  return (
    <>
      <div className="custom-shadow p-4 rounded-md">
        <div className="mb-6 sm:mb-10">
          <PageHeader type="filter" />
        </div>
        <div>
          <FiltersPanel
            setFilters={setFilters}
            filters={filters}
            defaultFilters={defaultFilters}
          />
        </div>
      </div>
      <div className="mt-6 custom-shadow p-4 rounded-md">
        <h2 className="font-bold text-lg mb-4">Transaktionen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-x-8">
          <GridTransactions data={pageData} />
        </div>
        <div className="mt-4 max-w-[400px] mx-auto">
          <Pagination
            currentPage={currentPage}
            totalPage={totalPages}
            totalPages={totalPages}
            prev={() => setCurrentPage((p) => Math.max(1, p - 1))}
            next={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
        </div>
      </div>
    </>
  );
};
export default FilterPage;
