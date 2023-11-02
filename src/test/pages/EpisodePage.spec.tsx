import "@testing-library/jest-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import EpisodesPage from "../../pages/EpisodesPage";

const queryClient = new QueryClient();

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

describe("EpisodesPage", () => {
  it("should render the search input", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <EpisodesPage />
      </QueryClientProvider>
    );
    const searchInputElement = screen.getByPlaceholderText(/Search/i);
    expect(searchInputElement).toBeInTheDocument();
  });
});
