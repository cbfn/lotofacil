import { useLoto } from "../../store/useLoto";

export default function Games() {
  const { games, total } = useLoto();

  return (
    <div className="bg-gray-100 border-l border-gray-300 md:col-span-4">
      <nav className="px-5 py-4 border-b border-gray-300 flex flex-row items-center">
        <h2 className="text-2xl mr-auto">Meus jogos</h2>
        <h4 className="font-medium">
          Total:{" "}
          <span className="text-2xl">
            {total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </h4>
      </nav>
      <div className="p-5 game-content">
        {games.length ? (
          <ul className="flex flex-col w-full">
            {games?.map((game, i) => (
              <li
                key={i + 1}
                className="relative flex flex-col bg-gray-50 border p-3 rounded-md mb-5"
              >
                <h3 className="font-medium text-sm text-gray-600 uppercase">
                  Jogo {i + 1}
                </h3>
                <div className="flex flex-row gap-2 my-2">
                  {game
                    ?.toString()
                    .split(",")
                    .map((g, j) => (
                      <div
                        key={g + j + 1}
                        className="flex shadow w-8 h-8 border-gray-200 rounded-md bg-white justify-center items-center"
                      >
                        {g}
                      </div>
                    ))
                    .sort((a, b) => a.props.children - b.props.children)}
                </div>
                <div
                  className="absolute right-3 cursor-pointer"
                  onClick={() => {
                    // handleDeleteGame(games[i]);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum jogo adicionado!</p>
        )}
      </div>
    </div>
  );
}
