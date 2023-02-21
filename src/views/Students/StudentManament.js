import React from "react";
import { toast } from "react-toastify";
import './Student.scss'

class StudentManament extends React.Component {

    state = {
        id: '',
        name: '',
        birth: '',
        address: ''
    }

    handleOnClickEdit = (student) => {
        this.setState({
            id: student.id,
            name: student.name,
            birth: student.birth,
            address: student.address,
        })
        // this.props.editStudent(student)
    }

    handleOnClickSave = (student) => {
        student = this.state
        this.props.updateStudent(student)
        this.setState({
            id: '',
            name: '',
            birth: '',
            address: ''
        })
    }

    handleOnClickDelete = (student) => {
        this.props.deleteStudent(student)
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeBirth = (event) => {
        if (isNaN(event.target.value)) {
            toast.warning("Need a number !")
            return
        }
        this.setState({
            birth: event.target.value
        })

    }

    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    render() {
        let listStudent = this.props.listStudent;
        let condition = true;
        if (this.state.name === '' && this.state.birth === '' && this.state.address === '') {
            condition = false
        }
        return (
            <div>
                {
                    listStudent.map((item, index) => {
                        return (
                            <div className="item-manament" key={item.id}>
                                {!condition ?
                                    <span className="information margin-l-r-10" >
                                        <span className="item-id">{index + 1}</span>
                                        <span className="item-name "> - {item.name}</span>
                                        <span className="item-birth "> - {item.birth}</span>
                                        <span className="item-address "> - {item.address}</span>
                                    </span>
                                    :
                                    <> {condition && item.id === this.state.id ?
                                        <span className="information margin-l-r-10" >
                                            <span className="item-id">{index + 1}</span>
                                            <span> - <input className="item-name "
                                                value={this.state.name}
                                                onChange={(event) => this.handleOnChangeName(event)}
                                            ></input> </span>
                                            <span> - <input className="item-birth "
                                                value={this.state.birth}
                                                onChange={(event) => this.handleOnChangeBirth(event)}
                                            ></input></span>
                                            <span> - <input className="item-address "
                                                value={this.state.address}
                                                onChange={(event) => this.handleOnChangeAddress(event)}
                                            ></input></span>
                                        </span>
                                        :
                                        <span className="information margin-l-r-10" >
                                            <span className="item-id">{index + 1}</span>
                                            <span className="item-name "> - {item.name}</span>
                                            <span className="item-birth "> - {item.birth}</span>
                                            <span className="item-address "> - {item.address}</span>
                                        </span>
                                    }
                                    </>
                                }
                                <span className="manament-btn">
                                    <span>
                                        {!condition ?
                                            <button
                                                className="btn-edit margin-l-r-10"
                                                onClick={() => this.handleOnClickEdit(item)}
                                            >Edit</button>
                                            :
                                            <>
                                                {condition && item.id === this.state.id ?
                                                    <button
                                                        className="btn-save margin-l-r-10"
                                                        onClick={() => this.handleOnClickSave(item)}
                                                    >Save</button>
                                                    :
                                                    <button
                                                        className="btn-edit margin-l-r-10"
                                                        onClick={() => this.handleOnClickEdit(item)}
                                                    >Edit</button>
                                                }
                                            </>
                                        }
                                    </span>

                                    <span><button
                                        className="btn-delete margin-l-r-10"
                                        onClick={() => this.handleOnClickDelete(item)}
                                    >Delete</button></span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default StudentManament;
