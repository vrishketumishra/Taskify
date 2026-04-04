import { Board, Card } from "@prisma/client";

import { BoardTitleForm } from "./board-title-form";
import { BoardOptions } from "./board-options";
import { BoardSearch } from "./board-search";

interface BoardNavbarProps {
  data: Board;
  cards: Card[];
};

export const BoardNavbar = async ({
  data,
  cards
}: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white">
      <BoardTitleForm data={data} />
      <div className="ml-auto flex items-center gap-x-4">
        <BoardSearch cards={cards} />
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};
