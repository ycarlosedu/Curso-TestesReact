import { render, screen, fireEvent } from "@testing-library/react";
import Conta from "./Conta";
import React from "react";

describe("Componente de conta", () => {
  it("Exibir o saldo da conta com formatação monetaria", () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");
    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Chama a função de realizar transacao quando clicar no botão", () => {
    const funcaoRealizarTransancao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransancao} />);

    fireEvent.click(screen.getByText("Realizar operação"));
    expect(funcaoRealizarTransancao).toHaveBeenCalled();
  });
});
