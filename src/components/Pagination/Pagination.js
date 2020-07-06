import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationComponent() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination
        color="primary"
        count={10}
        showFirstButton
        showLastButton
        onChange={handleChange}
      />
    </div>
  );
}
