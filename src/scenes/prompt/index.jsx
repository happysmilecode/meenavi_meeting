import React from "react";
import { Box, Button, Grid, TextField, useTheme } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { tokens } from "../../theme";
import SelectBox from "../../components/SelectBox";
import Header from "../../components/Header";

const Prompt = ({ openDialog, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const options = [
    { value: "option1", label: "一般会議" },
    { value: "option2", label: "経営会議" },
    { value: "option3", label: "報告会議" },
    { value: "option1", label: "ブレスト会議" },
    { value: "option2", label: "理事会" },
    { value: "option3", label: "総会" },
  ];

  return (
    <Box m="20px">
      <Header title="プロンプト" subtitle="プロンプトダッシュボード" />
      <Box height="75vh">
        <Box p={2} backgroundColor={colors.primary[400]} borderRadius="10px">
          <Grid container spacing={2} className="custom-grid">
            <Grid item xs={4} md={4}>
              <SelectBox options={options} indicator="会議選択" />
            </Grid>
            <Grid item xs={8} md={8}>
              <TextareaAutosize
                placeholder="テキストを入力してください"
                minRows={20}
                style={{
                  width: "100%",
                  padding: "1rem",
                  backgroundColor: colors.grey[600],
                  color: colors.primary[100],
                }}
              ></TextareaAutosize>
              <Button
                variant="contained"
                style={{
                  color: colors.primary[400],
                  backgroundColor: colors.blueAccent[400],
                  width: "100%",
                }}
              >
                種類削除
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Prompt;
