import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { AuthPage } from "./scenes/auth";
import { getValue } from "./data/utils";
import MeetingList from "./scenes/meeting/MeetingList";
import AddMeeting from "./scenes/meeting/AddMeeting";
import DeleteMeeting from "./scenes/meeting/DeleteMeeting";
import MeetingType from "./scenes/meeting_type";
import Prompt from "./scenes/prompt";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const loginFlag = getValue("login");
    console.log("loginFlag", loginFlag);
    if (loginFlag === "false") {
      setIsLogined(false);
    } else {
      setIsLogined(true);
    }
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      {!isLogined ? (
        <AuthPage />
      ) : (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/meeting_list" element={<MeetingList />} />
                <Route path="/meeting_add" element={<AddMeeting />} />
                <Route path="/meeting_delete" element={<DeleteMeeting />} />
                <Route path="/meeting_type" element={<MeetingType />} />
                <Route path="/meeting_prompt" element={<Prompt />} />
                <Route path="/profile" element={<Form />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      )}
    </ColorModeContext.Provider>
  );
}

export default App;
