import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationComponent({paging , page , handlePagination}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        color="primary"
        page={page}
        count={paging.total_pages}
        showFirstButton
        showLastButton
        onChange={(e , value) => handlePagination(value)}
      />
    </div>
  );
}
