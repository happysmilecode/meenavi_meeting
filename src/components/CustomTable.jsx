import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { tokens } from "../theme";

export function CustomTable() {
  const defaultMaterialTheme = createTheme();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        title="会議一覧表"
        style={{
          backgroundColor: colors.primary[400],
          color: colors.primary[100],
        }}
        columns={[
          { title: "会議日時", field: "date" },
          { title: "会議名", field: "name" },
          { title: "会議種別", field: "type" },
          { title: "進行役リンク", field: "server_link" },
          { title: "参加者リンク", field: "client_link" },
        ]}
        data={[
          {
            date: "2021-01-01 14時",
            name: "",
            type: "総会",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
          {
            date: "2021-05-01 14時",
            name: "",
            type: "報告会議",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
          {
            date: "2022-06-16 14時",
            name: "",
            type: "報告会議",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
          {
            date: "2023-01-01 14時",
            name: "",
            type: "総会",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
          {
            date: "2022-06-16 14時",
            name: "",
            type: "報告会議",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
          {
            date: "2023-01-01 14時",
            name: "",
            type: "総会",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
          {
            date: "2022-06-16 14時",
            name: "",
            type: "報告会議",
            server_link: "進行役URL",
            client_link: "参加者URL",
          },
        ]}
        options={{
          selection: true,
          sorting: true,
          pageSizeOptions: [5, 10],
          addRowPosition: "last",
          headerStyle: {
            backgroundColor: colors.primary[400],
            color: colors.primary[100],
          },
          rowStyle: {
            backgroundColor: colors.primary[400],
            color: colors.primary[100],
          },
        }}
        localization={{
          body: {
            emptyDataSourceMessage: "エントリーなし",
            addTooltip: "追加",
            deleteTooltip: "削除",
            editTooltip: "編集",
            filterRow: {
              filterTooltip: "フィルター",
            },
            editRow: {
              deleteText: "この行を本当に削除しますか？",
              cancelTooltip: "キャンセル",
              saveTooltip: "保存",
            },
          },
          grouping: {
            placeholder: "列をドラッグしてグループ化します...",
            groupedBy: "グループ化された項目:",
          },
          header: {
            actions: "アクション",
          },
          pagination: {
            labelDisplayedRows: "{count}件中{from}-{to}件目",
            labelRowsSelect: "行",
            labelRowsPerPage: "ページごとの行数:",
            firstAriaLabel: "最初のページ",
            firstTooltip: "最初のページ",
            previousAriaLabel: "前のページ",
            previousTooltip: "前のページ",
            nextAriaLabel: "次のページ",
            nextTooltip: "次のページ",
            lastAriaLabel: "最後のページ",
            lastTooltip: "最後のページ",
          },
          toolbar: {
            addRemoveColumns: "列の追加または削除",
            nRowsSelected: "選択された行数: {0}行",
            showColumnsTitle: "列の表示",
            showColumnsAriaLabel: "列の表示",
            exportTitle: "エクスポート",
            exportAriaLabel: "エクスポート",
            searchTooltip: "検索",
            searchPlaceholder: "検索",
          },
        }}
        actions={[
          {
            tooltip: "選択したユーザーをすべて削除",
            icon: "delete",
            onClick: (evt, data) => alert("削除されました。"),
          },
        ]}
      />
    </ThemeProvider>
  );
}
