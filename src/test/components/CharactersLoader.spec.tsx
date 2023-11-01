import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

describe("LoadingSpinner", () => {
  it("should render the spinner", () => {
    render(<LoadingSpinner />);

    const spinners = screen.getAllByRole("progressbar");
    expect(spinners).toHaveLength(1);
  });

  it("should set the height and width of the container", () => {
    render(<LoadingSpinner />);

    const containers = screen.getAllByRole("progressbar");
    containers.forEach((container) => {
      expect(container).toHaveStyle({ height: "80vh", width: "100%" });
    });
  });

  it("should center the spinner horizontally and vertically", () => {
    render(<LoadingSpinner />);

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
