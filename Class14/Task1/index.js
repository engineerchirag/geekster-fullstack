// OOPs


function Book(author, title, description, publishers, price) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.publishers = publishers;
    this.price = price;
    // this.discountPrice = function(items) {
    //     return items * (this.price - 20);
    // };
}

const english = new Book('Chirag', 'Fullstack Interviews', 'Jarur padhna', 'Geekster', '1000');
const math = new Book('Amit', 'Beyond Maths', 'Jarur padhna', 'Ambani', '500');
// math.bookDetail = function() {
//     return this.author;
// }

Book.prototype.discountPrice = function(items) {
    return items * (this.price - 20);
};

// Object.prototype.happy = function() {
//     return 'Yes';
// }

function History (edition, author, title, description, publishers, price) {
    Book.call(this, author, title, description, publishers, price);
    this.edition = edition;
    this.discountPrice = function(items) {
        return items * (this.price - 60);
    };
    this.getAge = function () {
        return (new Date()).getTime() - (new Date(edition)).getTime();
    }
}

History.prototype = Object.create(Book.prototype);

const HistoryBook = new History('01-01-1897', 'Chirag', 'Fullstack Interviews', 'Jarur padhna', 'Geekster', '1000');



