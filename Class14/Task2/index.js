class Book {
    #maxItems;
    constructor(author, title, description, publishers, price) {
        this.author = author;
        this.title = title;
        this.description = description;
        this.publishers = publishers;
        this.price = price;
        this.#maxItems = 10;
        // this.discountPrice = function(items) {
        //     return items * (this.price - 20);
        // };
    }
    discountPrice (items) {
        return items * (this.price - 20);
    }
}

const english = new Book('Chirag', 'Fullstack Interviews', 'Jarur padhna', 'Geekster', '1000');

class History extends Book{
    constructor(edition, author, title, description, publishers, price) {
        super(author, title, description, publishers, price);
        this.edition = edition;
    }

    discountPrice (items) {
        return items * (this.price - 60);
    }

    getAge () {
        return (new Date()).getTime() - (new Date(edition)).getTime();
    }
}

const HistoryBook = new History('01-01-1897', 'Chirag', 'Fullstack Interviews', 'Jarur padhna', 'Geekster', '1000');