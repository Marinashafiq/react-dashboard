import React from "react";
import { injectIntl } from "react-intl";
import PaginationButtons from "../../../components/Pagination/Pagination";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <PaginationButtons />
        </div>
      </>
    );
  }
}

export default injectIntl(Tables);
