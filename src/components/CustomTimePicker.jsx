import React from "react";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ja } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const CustomTimePicker = () => {
  return (
    <LocalizationProvider adapterLocale={ja} dateAdapter={AdapterDateFns}>
      <TimePicker sx={{ width: "100%" }} label="時間選択" />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
