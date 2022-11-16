import { getLatestBook, getProgrammingBook } from "./api";
import "./components";
import "./views";

const main = async () => {
  const [latest, programming] = await Promise.all([
    getLatestBook(),
    getProgrammingBook(),
  ]);

  const listBookElm = document.querySelectorAll("list-book");
  for (const listBook of listBookElm) {
    listBook.books = { latest, programming };
  }
};

export default main;
