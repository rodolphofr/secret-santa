import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SetupPage from ".";

test("Pagina de configuracao deve ser renderizada", () => {
  const { container } = render(
    <MemoryRouter>
      <SetupPage
        participants={[]}
        addParticipant={jest.fn()}
        deleteParticipant={jest.fn()}
      />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
