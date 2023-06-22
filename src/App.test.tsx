import { render, screen } from "./utils/test-utils";
import App from "./App";

describe("App.tsx", () => {
  it("should render App", () => {
    render(<App />);
    expect(screen.getByText(/Simulador Lotofácil/i)).toBeInTheDocument();
  });
});
