import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react";
import CharactersLoader from "../../components/CharactersLoader";

describe("CharactersLoader", () => {
  it("should render the spinner", () => {
    render(<CharactersLoader />);

    const spinners = screen.getAllByRole("progressbar");
    expect(spinners).toHaveLength(1);
  });

  it("should set the height and width of the container", () => {
    render(<CharactersLoader />);

    const containers = screen.getAllByRole("progressbar");
    containers.forEach((container) => {
      expect(container).toHaveStyle({ height: "80vh", width: "100%" });
    });
  });

  it("should center the spinner horizontally and vertically", () => {
    render(<CharactersLoader />);

    const containers = screen.getAllByRole("progressbar");
    containers.forEach((container) => {
      expect(container).toHaveStyle({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      });
    });
  });
});
