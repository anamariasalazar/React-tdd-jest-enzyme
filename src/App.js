import "./App.css";
import Login from "./Resorces/Login";
import TaskPlanner from "./Resorces/TaskPlanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import { initialState, themeReducer } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { Button } from "@material-ui/core";


function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider  value={{ state, dispatch }}>
      <Button onClick={() => {
        if (state.isDarkMode) {
          dispatch("SET_LIGHT_MODE");
        } else {
        dispatch("SET_DARK_MODE");
        }
      }}>
      Cambio
      </Button>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/TaskPlanner" element={<TaskPlanner />} />
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
