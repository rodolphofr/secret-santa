import { fireEvent, render, screen } from "@testing-library/react";
import Footer from ".";

// adicionar sufixo mock em todo funcao mockada
const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate
}));

describe("quando nao existem participantes suficientes", () => {
  test("a brincadeira não pode ser iniciada", () => {
    render(<Footer participants={[]} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  const participantes = ["Ana", "Lucio", "Cassandra", "Marcelo"];

  test("a brincadeira pode ser iniciada", () => {
    render(<Footer participants={participantes} />);

    expect(screen.getByRole("button")).not.toBeDisabled();
  });


  test("a brincadeira foi iniciada", () => {
    render(<Footer participants={participantes} />);

    fireEvent.click(screen.getByRole("button"));

    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith("/draw");
  });
});
