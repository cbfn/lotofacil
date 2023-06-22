import LotofacilLogo from "../../assets/lotofacil-logo.svg";
import { useLoto } from "../../store/useLoto";

export default function Simulator() {
  const {
    totalNumbers,
    handleTotalNumberChoise,
    selectedNumbers,
    handleResetSelectedNumber,
    handleAddGame,
    handleSelectNumber,
  } = useLoto();
  return (
    <div className="flex flex-col md:col-span-2">
      <header className="py-3 border-b border-[#a7348b] bg-[#a7348b]">
        <h1>
          <img src={LotofacilLogo} width={200} alt="Simulador Lotofácil" />
        </h1>
      </header>

      <div className="p-5 flex flex-col">
        <label htmlFor="qtdNumber">Selecione a quantidade de números</label>
        <select
          id="qtdNumber"
          className="border border-gray-200 mt-4 p-3 rounded-md"
          onChange={handleTotalNumberChoise}
        >
          <option value={15} defaultChecked>
            15
          </option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
        </select>
        <ul className="flex flex-row gap-4 flex-wrap my-8 w-full justify-start">
          {[...Array(totalNumbers)].map((_, index) => (
            <li
              className={`w-8 h-8 block rounded-md border border-gray-200 justify-center cursor-pointer items-center flex ${
                selectedNumbers.includes(index + 1)
                  ? "bg-[#a7348b] text-white font-medium border-[#a7348b]"
                  : ""
              }`}
              key={index + 1}
            >
              <button
                type="button"
                className="w-8 h-8 block"
                onClick={handleSelectNumber}
                value={index + 1}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-4 justify-between">
          <button
            type="button"
            className="font-medium border border-[#a7348b] rounded-md text-[#a7348b] p-5 mt-4 flex-1"
            onClick={handleResetSelectedNumber}
          >
            Resetar
          </button>
          <button
            type="button"
            className="bg-[#a7348b] rounded-md font-medium text-white p-5 mt-4 flex-1"
            onClick={handleAddGame}
          >
            Adicionar Jogo
          </button>
        </div>
      </div>
    </div>
  );
}
