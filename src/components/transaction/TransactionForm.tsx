import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CategorySelect from "./CategorySelect";
import IconPicker from "./IconPicker";
import useTransactionsStore from "@/storage/useTransactionsStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TransactionFormProps = {
  type: "income" | "expense";
  onClose: () => void;
};

const TransactionForm = ({ type, onClose }: TransactionFormProps) => {
  const addTransaction = useTransactionsStore((state) => state.addTransaction);

  const formShema = z.object({
    icon: z.string("Icon auswählen"),
    name: z.string().min(3, "Name eingeben"),
    amount: z.number("Betrag eingeben"),
    category: z.string("Kategroy auswählen"),
    date: z.string().date("Ungültiges Datum"),
  });

  type TransactionFormData = z.infer<typeof formShema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: zodResolver(formShema),
  });

  const onSubmit = (data: TransactionFormData) => {
    addTransaction({
      ...data,
      type,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div>
          <IconPicker
            onSelect={(icon) =>
              setValue("icon", icon, { shouldValidate: true })
            }
          />
          {errors.icon && (
            <div className="error-message">{errors.icon.message}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 text-xs">Name</label>
          <Input type="text" {...register("name")} />
          {errors.name && (
            <div className="error-message">{errors.name.message}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 text-xs">Betrag</label>
          <Input
            type="number"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <div className="error-message">{errors.amount.message}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 text-xs">Kategorie</label>
          <CategorySelect
            onSelect={(category) =>
              setValue("category", category, { shouldValidate: true })
            }
          />
          {errors.category && (
            <div className="error-message">{errors.category.message}</div>
          )}
        </div>
        <div>
          <label className="text-gray-600 text-xs">Datum</label>
          <Input type="date" {...register("date")} />
          {errors.date && (
            <div className="error-message">{errors.date.message}</div>
          )}
        </div>
      </div>
      <div className="mt-6 text-right">
        <Button variant="outline" type="submit" size="sm">
          Hinzufügen
        </Button>
      </div>
    </form>
  );
};
export default TransactionForm;
