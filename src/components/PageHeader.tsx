import { PAGE_TEXT } from "@/constants/page-text";

type PageHeaderProps = {
  type: "income" | "expense";
};

const PageHeader = ({ type }: PageHeaderProps) => {
  return (
    <>
      <h2 className="font-bold text-xl">
        {type === "income" ? PAGE_TEXT.income.title : PAGE_TEXT.expense.title}
      </h2>
      <p className="text-sm text-gray-600">
        {type === "income"
          ? PAGE_TEXT.income.subtitle
          : PAGE_TEXT.expense.subtitle}
      </p>
    </>
  );
};
export default PageHeader;
