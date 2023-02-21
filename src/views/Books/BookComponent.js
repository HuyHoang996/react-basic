import React from "react";
import { toast } from "react-toastify";
import AddBooks from "./AddBooks";
import './Book.scss';
import ListBook from "./ListBook";

class BookComponent extends React.Component {

    state = {
        listBooks: [
            { id: 1, name: 'Giáo án Yasuo', author: 'Thỏ Bảy Màu' },
            { id: 2, name: 'Giáo án Tristana', author: 'idol Tớ Hận Cậu' },
            { id: 3, name: 'Giáo án Master-Yi', author: 'Cowsep' },
        ]

    }

    addNewBook = (book) => {
        this.setState({
            listBooks: [...this.state.listBooks, book]
        })
    }

    booksQuantity = () => {
        return this.state.listBooks.length;
    }

    handleDeleteBook = (book) => {
        let currentBooks = this.state.listBooks;
        currentBooks = currentBooks.filter(item => item.id !== book.id)
        this.setState({
            listBooks: currentBooks
        })
        toast.success("Deleted !")

    }

    handleEditBook = (book) => {
        let { listBooks } = this.state
        let listBooksCopy = [...listBooks]
        let bookIndex = listBooksCopy.findIndex(item => item.id === book.id)
        listBooksCopy[bookIndex].name = book.name
        listBooksCopy[bookIndex].author = book.author
        if (book.name === '' || book.author === '') {
            toast.error("Missing required !")
            return;
            //(undifined, null, empty) => false
        } else {
            this.setState({
                listBooks: listBooksCopy
            })
        }
    }

    render() {
        return (
            <>
                <div className="book-container">
                    <div >
                        <AddBooks addNewBook={this.addNewBook} booksQuantity={this.booksQuantity()} />
                    </div>
                    <div className="list-book">
                        <ListBook listBooks={this.state.listBooks}
                            handleDeleteBook={this.handleDeleteBook}
                            handleEditBook={this.handleEditBook}
                        />
                    </div>
                </div>
            </>
        )
    }
}
export default BookComponent;