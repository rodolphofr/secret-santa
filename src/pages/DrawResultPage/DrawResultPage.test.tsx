import { act, fireEvent, render, screen } from "@testing-library/react";
import DrawResultPage from ".";


describe("quando brincadeira for iniciada", () => {
  const participantes = ["Ana", "Lucio", "Marcos", "Maciel", "Roberta"];

  const sortear = (participante: string) => {
    const seletorParticipante = screen.getByDisplayValue("Selecione seu nome");
    fireEvent.change(seletorParticipante, { target: { value: participante } });

    const botaoSortear = screen.getByRole("button");
    fireEvent.click(botaoSortear);
  };

  beforeEach(() => render(<DrawResultPage participants={participantes} />));

  test("seletor de participante deve estar vazio", () => {
    expect(screen.queryByDisplayValue("Selecione seu nome")).not.toBeNull();
  });

  test("botao deve estar desabilitado se participante não for selecionado", () => {
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("e participante for deselecionado, botao deve estar desabilitado", () => {
    const seletorParticipante = screen.getByDisplayValue("Selecione seu nome");
    const participante = participantes[4];

    fireEvent.change(seletorParticipante, { target: { value: participante } });
    fireEvent.change(seletorParticipante, { target: { value: "" } });

    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("todos os participantes podem exibir seu amigo secreto", () => {
    const participante = participantes[1];
    sortear(participante);

    const sorteado = screen.getByRole("alert");
    expect(sorteado).toBeInTheDocument();
    expect(sorteado.textContent).not.toEqual(participante);
  });

  test("e o amigo secreto for exibido, entao deve sumir após atingir o valor do timer", () => {
    jest.useFakeTimers();

    sortear(participantes[3]);

    expect(screen.getByRole("alert")).toBeInTheDocument();

    act(() => {
      jest.runAllTimers()
    });

    expect(screen.queryByRole("alert")).toBeNull();
  });
});
