import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import FetchLoader from "../../components/ui/FetchLoader";

describe("FetchLoader", () => {
  it("renders the component with the correct props", () => {
    const { getByRole } = render(<FetchLoader />);

    const spinner = getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveAttribute("aria-label", "Loading");
    expect(spinner).toHaveAttribute("aria-busy", "true");

    const container = spinner.parentElement;
    expect(container).toHaveStyle({
      position: "relative",
      height: "10vh",
      width: "100%",
      padding: "10px 0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
  });
});
