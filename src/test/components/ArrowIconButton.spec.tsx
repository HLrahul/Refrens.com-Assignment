import { render, fireEvent } from "@testing-library/react";
import { ArrowDownButton, ArrowUpButton } from "../../components/ui/ArrowIconButtons";

describe("ArrowDownButton", () => {
  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(
      <ArrowDownButton onClick={handleClick} />
    );
    fireEvent.click(getByLabelText("scrollDownIconButton"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("ArrowUpButton", () => {
  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByLabelText } = render(<ArrowUpButton onClick={handleClick} />);
    fireEvent.click(getByLabelText("scrollUpIconButton"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
