import React from "react";
import { TableCell } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const StyledTableCell = ({ content }) => {
  const StyledCell = withStyles((theme) => ({
    head: {
      background: theme.palette.primary,
      color: theme.palette.common.white,
      fontSize: 12,
      textAlign: "center",
      minWidth: 120,
    },
    body: {
      textAlign: "center",
      fontSize: 14,
    },
  }))(TableCell);
  return <StyledCell>{content}</StyledCell>;
};
