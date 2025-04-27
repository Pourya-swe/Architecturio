import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import AppLayout from "./AppLayout";

// Mock child components
jest.mock("../NavBar/NavBar", () => {
  return function MockNavBar() {
    return <div data-testid="navbar">NavBar</div>;
  };
});

jest.mock("../Footer/Footer", () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

// Mock Outlet component
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div data-testid="outlet">Outlet Content</div>,
}));

describe("AppLayout Component", () => {
  const renderAppLayout = () => {
    return render(
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    );
  };

  it("renders without crashing", () => {
    renderAppLayout();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("outlet")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders with correct structure", () => {
    renderAppLayout();
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass("main");
  });
});
