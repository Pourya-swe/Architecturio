import { BrowserRouter } from "react-router";
import AppRouter from "./Router";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "./styles/main.scss";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
