import React, { useState } from "react";
import { TableRow } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import { ButtonComponent } from "../Controls/Button/Button";
import { StyledTableCell } from "../Table/StyledTableCell";
import TableComponent from "../Table/Table";

function TableExample({ intl: { messages }, branches }) {
  const lang = useSelector((state) => state.lang);

  const renderBranchesRow = () => {
    if (branches) {
      return branches.map((branch) => (
        <TableRow key={branch.id}>
          <React.Fragment>
            <StyledTableCell content={branch.name_en} />
            <StyledTableCell
              content={<span className="arabic_font">{branch.name_ar}</span>}
            />
            <StyledTableCell
              content={
                lang === "en"
                  ? branch.location_name_en
                  : branch.location_name_ar
              }
            />
            <StyledTableCell
              content={
                lang === "en" ? branch.country_name_en : branch.country_name_ar
              }
            />
            <StyledTableCell
              content={
                lang === "en" ? branch.city_name_en : branch.city_name_ar
              }
            />
            <StyledTableCell
              content={
                <ButtonComponent
                  variant="outlined"
                  content={messages.buttons.view}
                  color="secondary"
                />
              }
            />
          </React.Fragment>
        </TableRow>
      ));
    }
  };

  return (
    <TableComponent
      tableHeaders={[
        messages.branches.name_en,
        messages.branches.name_ar,
        messages.branches.address,
        messages.branches.country,
        messages.branches.city,
      ]}
      actionCols={["edit"]}
      tableBody={renderBranchesRow()}
      list={branches}
    />
  );
}

const TableExampleComponent = injectIntl(TableExample);

export default TableExampleComponent;
