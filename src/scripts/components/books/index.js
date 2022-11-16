class ListBook extends HTMLElement {
  #books;
  #perPage = 4;

  set books({ latest, programming }) {
    const { books: latestBooks } = latest;
    const { books: programmingBooks } = programming;

    const dataLatestBooks = latestBooks.slice(0, this.#perPage);

    const [min, max] = this.randomBooks(programmingBooks);
    const dataProgrammingBooks = programmingBooks.slice(min, max);

    this.#books = {
      latest: dataLatestBooks,
      programming: dataProgrammingBooks,
    };

    this.render();
  }

  randomBooks(books) {
    const booksMax = books.length;
    const range = booksMax - this.#perPage - this.#perPage;
    const randomBook = Math.random() * range;

    let min = Math.round(randomBook - this.#perPage);
    let max = Math.round(randomBook);

    if (min < 0 || max > booksMax) {
      min = 0;
      max = this.#perPage;
    }

    return [min, max];
  }

  render() {
    const id = this.parseId();
    const title = this.buildTitle();

    this.innerHTML = `<article id="${id}" class="content__book">
      <div class="content__header">
        <h1 class="title">${title}</h1>
        <button class="btn btn-outline">Selengkapnya &#8702;</button>
      </div>
      <div class="book_list"></div>
    </article>
    `;

    for (const book of this.#books[id]) {
      const bookItemElm = document.createElement("item-book");
      bookItemElm.book = book;

      const bookList = document.querySelector(`#${id} .book_list`);
      bookList.appendChild(bookItemElm);
    }
  }

  parseId() {
    const id = this.id;

    return id.split("-")[0];
  }

  buildTitle() {
    const id = this.parseId();

    return id.charAt(0).toUpperCase() + id.slice(1);
  }
}

export default ListBook;
