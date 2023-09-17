import * as React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function SelectBox(props) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menuItems = props.options.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ));

  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel>{props.indicator}</InputLabel>
      <Select
        value={value}
        label={props.indicator}
        onChange={handleChange}
        className="meenavi-card-form-select"
      >
        <MenuItem value="">{props.indicator}</MenuItem>
        {menuItems}
      </Select>
    </FormControl>
  );
}
