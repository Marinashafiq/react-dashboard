import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { StyledTableCell } from "./StyledTableCell";
// import DataNotFound from "components/DataNotFound/DataNotFound";

const TableComponent = ({ tableHeaders, actionCols, tableBody , list}) => {
  return (
    <>
      <TableContainer className="my-5" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeaders.map((heading, index) => {
                return (
                  <StyledTableCell
                    key={index}
                    content={<span className="bold_font">{heading}</span>}
                  />
                );
              })}
              {actionCols.map((action, index) => {
                return <StyledTableCell key={index} />;
              })}
            </TableRow>
          </TableHead>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </TableContainer>
      {/* {list && list.length === 0 && (
        <DataNotFound />
      )} */}
    </>
  );
};

export default TableComponent;
