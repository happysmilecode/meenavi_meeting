import React from "react";
import { Box, Paper, Button, useTheme } from "@mui/material";

import Header from "../../components/Header";
import SelectBox from "../../components/SelectBox";
import { tokens } from "../../theme";

const DeleteMeeting = () => {
  const options = [
    { value: "option1", label: "一般会議" },
    { value: "option2", label: "経営会議" },
    { value: "option3", label: "報告会議" },
    { value: "option1", label: "ブレスト会議" },
    { value: "option2", label: "理事会" },
    { value: "option3", label: "総会" },
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Meeting" subtitle="Delete Meeting" />
      <Box height="75vh">
        <Paper
          color={colors.primary[100]}
          style={{ backgroundColor: colors.primary[400] }}
        >
          <Box p={2}>
            <SelectBox options={options} indicator="会議選択" />
          </Box>
          <Box p={2}>
            <Button
              variant="contained"
              style={{
                color: colors.primary[400],
                backgroundColor: colors.blueAccent[400],
              }}
            >
              会議削除
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default DeleteMeeting;
