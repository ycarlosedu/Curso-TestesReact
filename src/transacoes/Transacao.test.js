import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./transacao";

describe("Componente de transação do extrato", () => {
  it("O snapshot do componente deve permanecer o mesmo", () => {
    const { container } = render(
      <Transacao data="08/09/2020" tipo="saque" valor="20.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
