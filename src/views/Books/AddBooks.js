import React from "react";
import { toast } from "react-toastify";
import './Book.scss'

class AddBooks extends React.Component {

    state = {
        name: '',
        author: ''
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAuthor = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    handleOnclickAdd = () => {
        if (!this.state.name || !this.state.author) {
            toast.error("Missing required, failed to Add new book !")
            return;
        }
        let length = this.props.booksQuantity
        console.log(length);
        let book = {
            id: length + 1,
            name: this.state.name,
            author: this.state.author
        }
        this.props.addNewBook(book);
        this.setState({
            name: '',
            author: ''
        })
        toast.success("ADD thanh cong")
    }

    render() {
        let name = this.state.name
        let author = this.state.author

        return (
            <>
                <div>

                    <span><input className="name" type="text" value={name} placeholder="Tên sách" onChange={(event) => this.handleOnChangeName(event)}></input></span>
                    <span><input className="author" type="text" value={author} placeholder="Tên tác giả" onChange={(event) => this.handleOnChangeAuthor(event)}></input></span>
                    <span>
                        <button className="btn-add-book" onClick={() => this.handleOnclickAdd()}>Add</button>
                    </span>

                </div>
            </>
        )
    }
}
export default AddBooks;