import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/Refrens.com Assignment/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render the subtitle", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const subtitleElement = screen.getByText(
      /A web application displaying characters/i
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  it("should render the characters button", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const charactersButtonElement = screen.getByRole("button", {
      name: /Characters/i,
    });
    expect(charactersButtonElement).toBeInTheDocument();
  });

  it("should render the crafted by text", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const craftedByTextElement = screen.getByText(/Crafted By/i);
    expect(craftedByTextElement).toBeInTheDocument();
  });

  it("should render the repo link", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const repoLinkElement = screen.getByRole("link", { name: /Go to Repo/i });
    expect(repoLinkElement).toBeInTheDocument();
  });
});
