import React from "react";
import { injectIntl } from "react-intl";
import PaginationButtons from "../../../components/Pagination/Pagination";
import { tableContent } from "../../../utlis/constants";
import TableExampleComponent from "../../../components/TableExample/TableExample";
class Tables extends React.Component {
  render() {
    return (
      <>
        <TableExampleComponent branches={tableContent.data} />
        <div className="d-flex justify-content-center">
          <PaginationButtons paging={tableContent.paging} />
        </div>
      </>
    );
  }
}

export default injectIntl(Tables);
