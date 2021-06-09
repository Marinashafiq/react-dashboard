import PaginationButtons from "../../../components/Pagination/Pagination";
import { tableContent } from "../../../utils/Constants";
import TableExampleComponent from "../../../components/TableExample/TableExample";
import { useState } from "react";
const Tables = () => {
  const [page, setPage] = useState(1);

  const handlePagination = (value) => {
    setPage(value);
  };
  return (
    <>
      <TableExampleComponent branches={tableContent.data} />
      <div className="d-flex justify-content-center">
        <PaginationButtons
          paging={tableContent.paging}
          handlePagination={handlePagination}
          page={page}
        />
      </div>
    </>
  );
};

export default Tables;
