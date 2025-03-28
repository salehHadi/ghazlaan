import { lazy, Suspense } from "react";
import Locading from "./components/Locading.js";
import { Route, Routes } from "react-router-dom";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./styles/theme/index.js";

const HomePage = lazy(() => import("./pages/HomePage.js"));

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Locading />}>
          <Routes>
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Container>
  );
}

export default App;
