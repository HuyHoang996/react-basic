import React from "react";
import './Book.scss';
import { toast } from "react-toastify";

class ListBook extends React.Component {

    state = {
        id: 0,
        name: '',
        author: ''
    }

    handleDeleteBook = (book) => {
        this.props.handleDeleteBook(book)
    }

    handleEditBook = (book) => {
        this.setState({
            id: book.id,
            name: book.name,
            author: book.author
        })
    }

    handleOnClickSave = () => {
        let book = this.state
        this.props.handleEditBook(book)
        this.setState({
            id: 0,
            name: '',
            author: ''
        })
        toast.success("Book Edited !")
    }

    onChangeEditName = (event) => {
        this.setState({
            name: event.target.value
        })
        return this.state.name
    }

    onChangeEditAuthor = (event) => {
        this.setState({
            author: event.target.value
        })
        return this.state.author
    }

    render() {
        let { listBooks } = this.props
        return (

            <div >

                {
                    listBooks.map((item, index) => {
                        return (
                            <div className="book-item" key={item.id}>
                                <span>
                                    {this.state.name === '' || this.state.author === '' ?
                                        <span className="content"> {item.id} - {item.name} - {item.author}</span>
                                        :
                                        <> {this.state.id === item.id ?
                                            <span>
                                                {item.id} - <input className="name" value={this.state.name} onChange={(event) => this.onChangeEditName(event)}></input>
                                                <span>
                                                    <input className="author" value={this.state.author} onChange={(event) => this.onChangeEditAuthor(event)}></input>
                                                </span>
                                            </span>
                                            :
                                            <span className="content"> {item.id} - {item.name} - {item.author}</span>

                                        }
                                        </>
                                    }
                                </span>
                                <span className="btn-site">
                                    {this.state.id === 0 ?
                                        <span><button className="btn-edit" onClick={() => this.handleEditBook(item)}>Edit</button></span>
                                        :
                                        <>{this.state.id !== 0 && this.state.id === item.id ?
                                            < span > <button className="btn-edit" onClick={() => this.handleOnClickSave()}>Save</button></span>
                                            :
                                            <span><button className="btn-edit" onClick={() => this.handleEditBook(item)}>Edit</button></span>
                                        }
                                        </>
                                    }
                                    <span><button className="btn-delete" onClick={() => this.handleDeleteBook(item)}>Delete</button></span>
                                </span>
                            </div>
                        )
                    })
                }

            </div >

        )
    }
}
export default ListBook;