import { PAGE_TEXT } from "@/constants/page-text";

type PageHeaderProps = {
  type: "income" | "expense" | "filter";
};

const PageHeader = ({ type }: PageHeaderProps) => {
  const page = PAGE_TEXT[type];
  return (
    <>
      <h2 className="font-bold text-xl">{page.title}</h2>
      <p className="text-sm text-gray-600">{page.subtitle}</p>
    </>
  );
};
export default PageHeader;
