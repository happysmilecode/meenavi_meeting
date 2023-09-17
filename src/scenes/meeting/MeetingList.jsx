import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { CustomTable } from "../../components/CustomTable";
import "./style/meeting_list.scss";

const MeetingList = () => {
  return (
    <Box m="20px">
      <Header title="Meeting" subtitle="Meeting Dashboard" />
      <Box height="75vh">
        <div className="custom-table">
          <CustomTable></CustomTable>
        </div>
      </Box>
    </Box>
  );
};

export default MeetingList;
