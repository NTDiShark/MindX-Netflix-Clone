import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { router } from "./constants/router";
import MainLayout from "./layouts/MainLayout";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path={router.HOME}
            element={
              <MainLayout>
                <HomeScreen />
              </MainLayout>
            }
          />
          <Route
            path={router.SEARCH}
            element={
              <MainLayout>
                <SearchScreen />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
