import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY_OPTIONS } from "@/constants/categorys";

type CategorySelectProps = {
  onSelect: (value: string) => void;
};

const CategorySelect = ({ onSelect }: CategorySelectProps) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Wähle eine Kategorie" />
      </SelectTrigger>

      <SelectContent className="z-100">
        <SelectGroup>
          <SelectLabel>Kategorie</SelectLabel>

          {CATEGORY_OPTIONS.map((cat) => (
            <SelectItem key={cat.value} value={cat.value}>
              {cat.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default CategorySelect;
