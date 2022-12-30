import { fireEvent, render, screen } from "@testing-library/react";
import Participants from ".";

test("deve estar vazia quando renderizada", () => {
  render(
    <Participants
      participants={[]}
      onDeleteItem={jest.fn()}
    />
  );

  expect(screen.queryAllByRole("listitem")).toHaveLength(0);
});

describe("quando lista estiver preenchida", () => {
  const participantes = ["Ana", "Julian"];

  test("deve apresentar os participantes adicionados", () => {
    render(
      <Participants
        participants={participantes}
        onDeleteItem={jest.fn()}
      />
    );

    expect(screen.queryAllByRole("listitem")).toHaveLength(participantes.length);
  });

  test("participantes podem ser removidos", () => {
    const handleDeleteItem = jest.fn();

    render(
      <Participants
        participants={participantes}
        onDeleteItem={handleDeleteItem}
      />
    );

    const items = screen.queryAllByRole("listitem");
    fireEvent.click(items[1]);
    expect(handleDeleteItem).toHaveBeenCalledTimes(1);
    expect(handleDeleteItem).toHaveBeenCalledWith("Julian");
  });
});
