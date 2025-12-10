import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { Button } from "@/components/ui/button";

type PaginationProps = {
  prev: () => void;
  next: () => void;
  totalPage: number;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({
  currentPage,
  totalPage,
  totalPages,
  prev,
  next,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-between text-gray-600">
      <Button
        variant="outline"
        size="sm"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <LuArrowLeft />
      </Button>
      <p className="text-sm">{`${currentPage}/${totalPage}`}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        <LuArrowRight />
      </Button>
    </div>
  );
};
export default Pagination;
