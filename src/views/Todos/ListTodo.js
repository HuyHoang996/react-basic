import React from "react";
import AddTodo from "./AddTodo";
import './Todo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        ListTodos: [
            { id: '1', title: 'Doing homework' },
            { id: '2', title: 'Cooking' },
            { id: '3', title: 'Coding' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })
        toast.success("Add New Todo Complete !")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.ListTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            ListTodos: currentTodos
        })
        toast.success("Deleted !")
    }

    handleEdit = (todo) => {
        let { editTodo, ListTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //update todo
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...ListTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id)
            listTodosCopy[objIndex].title = editTodo.title;
            if (editTodo.title === '') {
                toast.error("Missing required !")
                return;
                //(undifined, null, empty) => false
            } else {
                this.setState({
                    ListTodos: listTodosCopy,
                    editTodo: {}
                })
            }
            toast.success("Updated !")
            return;
        }

        //edit todo
        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeEdit = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;

        this.setState({
            editTodo: editTodoCopy
        })


    }
    render() {
        let { ListTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>check empty obj', isEmptyObj);
        return (

            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {ListTodos && ListTodos.length > 0 && ListTodos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                <span> {isEmptyObj === true ?
                                    <span className="item-site">{index + 1} - {item.title}</span>
                                    :
                                    <> {editTodo.id === item.id ?
                                        <span className="item-site">{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnChangeEdit(event)} /></span>
                                        :
                                        <span className="item-site">{index + 1} - {item.title}</span>

                                    }
                                    </>
                                }
                                </span>
                                <span className="btn-site">
                                    <button className="edit"
                                        onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                </span>
                            </div>
                        )
                    })
                    }

                </div>
            </div>
        )
    }
}
export default ListTodo;