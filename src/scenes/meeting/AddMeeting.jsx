import React from "react";
import {
  Box,
  Paper,
  Button,
  TextField,
  Grid,
  Item,
  useTheme,
} from "@mui/material";

import Header from "../../components/Header";
import { Text } from "../../components/Text";
import SelectBox from "../../components/SelectBox";
import CustomDatePicker from "../../components/CustomDatePicker";
import { tokens } from "../../theme";

const AddMeeting = () => {
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
      <Header title="Meeting" subtitle="Add Meeting" />
      <Box height="75vh">
        <Paper
          color={colors.primary[100]}
          style={{ backgroundColor: colors.primary[400] }}
        >
          <Box p={2}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="会議名"
              name="address2"
              sx={{ gridColumn: "span 3" }}
              placeholder="会議名を入力してください"
            />
          </Box>
          <Box p={2}>
            <SelectBox options={options} indicator="会議選択" />
          </Box>
          <Box p={2}>
            <Grid container spacing={2} className="custom-grid">
              <Grid item xs={6} md={6}>
                <CustomDatePicker></CustomDatePicker>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box>YYYY-MM-DD HH形式で日時を入力してください</Box>
                <Box>例：2023-07-25 13</Box>
              </Grid>
            </Grid>
          </Box>
          <Box p={2}>
            <Button
              variant="contained"
              style={{
                color: colors.primary[400],
                backgroundColor: colors.blueAccent[400],
              }}
            >
              会議追加
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddMeeting;
