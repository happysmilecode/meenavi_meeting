import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { ja } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const CustomDatePicker = () => {
  return (
    <LocalizationProvider adapterLocale={ja} dateAdapter={AdapterDateFns}>
      <DatePicker
        sx={{ width: "100%" }}
        label="日付選択"
        className="meenavi-datepicker"
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
