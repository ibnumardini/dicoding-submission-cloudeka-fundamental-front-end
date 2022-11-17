class ItemBook extends HTMLElement {
  #id;
  #authors;
  #img;
  #title;
  #subtitle;
  #url;

  set book({ authors, id, image, subtitle, title, url }) {
    this.#id = id;
    this.#img = image;
    this.#title = title;
    this.#authors = authors;
    this.#url = url;

    const pluckSub = subtitle.slice(0, 55);
    this.#subtitle = subtitle.length > 55 ? `${pluckSub}...` : subtitle;

    this.render();
  }

  render() {
    this.innerHTML = `<a href="${this.#url}" target="_blank">
      <div class="card_book" id="${this.#id}">
          <img src="${this.#img}" alt="${this.#title}" />
          <div class="card_book_desc">
            <h1 class="card_book_title">${this.#title}</h1>
            <p class="card_book_subtitle">${this.#subtitle}</p>
            <h3 class="card_book_author">( ${this.#authors} )</h3>
          </div>
      </div>
    </a>`;
  }
}

export default ItemBook;
