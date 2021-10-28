import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App, { calcularNovoSaldo } from "./app";

describe("Componente principal", () => {
  describe("Quando o app do banco é aberto", () => {
    it("Mostra o nome do banco", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });
    it("Mostra saldo", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });
    it("disponibiliza botão de transação", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });
  describe("Quando realizar uma transação", () => {
    it("quando realizar saque, o valor diminui", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);
      expect(novoSaldo).toBe(100);
    });
    it("quando saque, transação deve ser realizada", () => {
      render(<App />);
      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");
      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});
