import "@testing-library/jest-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import LocationsPage from "../../pages/LocationsPage";

const queryClient = new QueryClient();

// Mock the window.matchMedia function
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("LocationsPage", () => {
  it("should render the search input", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <LocationsPage />
      </QueryClientProvider>
    );
    const searchInputElement = screen.getByPlaceholderText(/Search/i);
    expect(searchInputElement).toBeInTheDocument();
  });
});
