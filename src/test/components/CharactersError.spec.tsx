import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react";
import CharactersError from "../../components/CharactersError";

describe("CharactersError", () => {
  it("should render the error message", () => {
    const errorMessage = "An error occurred.";

    render(<CharactersError error={{ message: errorMessage }} />);

    const error = screen.getByText(`Error: ${errorMessage}`);
    expect(error).toBeInTheDocument();
  });

  it("should render a default error message when no error is provided", () => {
    render(<CharactersError />);

    const defaultError = screen.queryByText("Error: Something went wrong.");
    expect(defaultError).toBeInTheDocument();
  });
});
