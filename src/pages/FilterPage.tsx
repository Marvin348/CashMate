import FiltersPanel from "@/components/filter/FiltersPanel";
import { useState } from "react";
import useTransactionsStore from "@/storage/useTransactionsStore";
import GridTransactions from "@/components/transaction/GridTransactions";

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

  console.log(filteredData);

  return (
    <div>
      <div className="mt-4 custom-shadow p-4 rounded-md">
        <div className="mb-6 sm:mb-10">
          <h2 className="font-bold text-xl">Alles auf einen Blick</h2>
          <p className="text-sm text-gray-600">
            Filtere deine Einträge nach Kategorie oder Zeitraum, um genau zu
            sehen, wohin dein Geld geht.
          </p>
        </div>
        <div className="">
          <FiltersPanel setFilters={setFilters} filters={filters} defaultFilters={defaultFilters} />
        </div>
      </div>
      <div className="mt-6 custom-shadow p-4 rounded-md">
        <h2 className="font-bold text-lg mb-4">Transactionen</h2>
        <GridTransactions data={filteredData} />
      </div>
    </div>
  );
};
export default FilterPage;
