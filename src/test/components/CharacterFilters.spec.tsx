import "@testing-library/jest-dom"

import { fireEvent, render, screen } from "@testing-library/react";
import CharacterFilters from "../../components/CharacterFilters";

describe("CharacterFilters", () => {
  it("should open the modal when the button is clicked", () => {
    const filter = {
      status: "",
      location: "",
      episode: "",
      gender: "",
      species: "",
      type: "",
    };
    const onFilterChange = jest.fn();

    render(
      <CharacterFilters filter={filter} onFilterChange={onFilterChange} />
    );

    const filterButton = screen.getByRole("button", { name: "Filter" });
    fireEvent.click(filterButton);

    const modal = screen.getByRole("dialog", { name: "Filter Characters" });
    expect(modal).toBeInTheDocument();
  });
});
