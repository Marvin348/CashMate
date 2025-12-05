import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import CategorySelect from "../transaction/CategorySelect";
import { Button } from "../ui/button";
import { RiResetLeftLine } from "react-icons/ri";

type Filters = {
  type: string;
  date: string;
  category: string;
  search: string;
};

type FiltersPanelProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  defaultFilters: Filters;
};

const FiltersPanel = ({
  filters,
  setFilters,
  defaultFilters,
}: FiltersPanelProps) => {
  return (
    <div>
      <div className="text-right">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setFilters(defaultFilters)}
        >
          <RiResetLeftLine />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="text-gray-600 text-xs">Type</label>
          <Select
            value={filters.type}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, type: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Wähle einen Typen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Einkommen</SelectItem>
              <SelectItem value="expense">Ausgaben</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-gray-600 text-xs">Datum</label>
          <Input
            type="date"
            value={filters.date}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, date: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="text-gray-600 text-xs">Kategorie</label>
          <CategorySelect
            value={filters.category}
            onSelect={(cat) =>
              setFilters((prev) => ({ ...prev, category: cat }))
            }
          />
        </div>
        <div className="">
          <label className="text-gray-600 text-xs">Suche</label>
          <Input
            placeholder="Suche..."
            value={filters.search}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, search: e.target.value }))
            }
          />
        </div>
      </div>
    </div>
  );
};
export default FiltersPanel;
