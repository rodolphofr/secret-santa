import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "."

test("quando o input esta vazio, novos participantes não podem ser adicionados", () => {
  render(<Form participants={[]} onInsert={jest.fn()} />);

  expect(screen.getByTestId("participant")).toBeInTheDocument();
  expect(screen.getByTestId("addButton")).toBeDisabled();
});

test("ao inserir nome, input deve ser limpo e manter o foco", async () => {
  const handleInsert = jest.fn();

  render(<Form participants={[]} onInsert={handleInsert} />);

  act(() => { fireEvent.change(screen.getByTestId("participant"), { target: { value: "Cristiane" } }) });
  act(() => { fireEvent.click(screen.getByTestId("addButton")) });

  await waitFor(() => {
    expect(handleInsert).toHaveBeenCalledTimes(1);
    expect(handleInsert).toBeCalledWith("Cristiane");
  });

  expect(screen.getByTestId("participant")).not.toHaveValue();
  expect(screen.getByTestId("participant")).toHaveFocus();
});

test("ao inserir nome duplicado, mensagem de erro deve ser apresentada e depois sumir", async () => {
  render(<Form participants={["Ana Clara"]} onInsert={jest.fn()} />);

  jest.useFakeTimers();

  act(() => { fireEvent.change(screen.getByTestId("participant"), { target: { value: "Ana Clara" } }) });
  act(() => { fireEvent.click(screen.getByTestId("addButton")) });

  await waitFor(() => {
    expect(screen.queryByRole("alert")).toBeVisible();
    expect(screen.queryByRole("alert")?.textContent).toMatch(/participant já adicionado/i);
  });

  act(() => { jest.runAllTimers(); });

  await waitFor(() => {
    expect(screen.queryByRole("alert")).toBeNull();
  });
});

test("valores em branco não são permitidos", async () => {
  render(<Form participants={[]} onInsert={jest.fn()} />);

  act(() => { fireEvent.change(screen.getByTestId("participant"), { target: { value: "     " } }) });
  act(() => { fireEvent.click(screen.getByTestId("addButton")) });

  await waitFor(() => {
    expect(screen.getByRole("alert")).toBeVisible();
    expect(screen.getByRole("alert").textContent).toMatch(/adicione o nome do participant/i);
  });
});
