/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";

export default function AutoComplete({
  label,
  value,
  handleChange,
  name,
  error,
  helperText,
  isMultiple,
  data,
  key_en,
  key_ar,
}) {
  const lang = useSelector((state) => state.lang);
  return (
    <Autocomplete
      multiple={isMultiple}
      options={data}
      value={isMultiple ? value : { ...value }}
      onChange={(event, value) => handleChange(name, value)}
      getOptionLabel={(option) =>
        option[key_ar] || option[key_en]
          ? lang === "en"
            ? option[key_en]
            : option[key_ar]
          : ""
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          fullWidth
          variant="outlined"
          error={error}
          helperText={error && helperText}
        />
      )}
    />
  );
}
