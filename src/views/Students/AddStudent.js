import React from "react";
import { toast } from "react-toastify";
import './Student.scss'

class AddStudent extends React.Component {

    state = {
        id: 0,
        name: '',
        birth: 0,
        address: '',
    }

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    onChangeBirth = (event) => {
        this.setState({
            birth: event.target.value
        })
    }
    onChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleOnClickAdd = () => {

        if (this.state.name === '' || this.state.birth === 0 || this.state.address === '') {
            toast.error("Missing required!")
            return;
        }

        let student = {
            id: Math.floor(Math.random() * 1010),
            name: this.state.name,
            birth: this.state.birth,
            address: this.state.address,
        }

        this.props.addStudent(student)

        this.setState({
            id: 0,
            name: '',
            birth: '',
            address: ''
        })
        toast.success("Add completed !")

    }
    render() {
        return (
            <span>
                <input
                    className="name margin-l-r-5"
                    type="text"
                    placeholder="Họ và Tên"
                    value={this.state.name}
                    onChange={(event) => this.onChangeName(event)}
                ></input>
                <input
                    className="birth margin-l-r-5"
                    type="number"
                    placeholder="Năm sinh"
                    value={this.state.birth}
                    onChange={(event) => this.onChangeBirth(event)}
                ></input>
                <input
                    className="address margin-l-r-5"
                    type="text"
                    placeholder="Quê quán (tỉnh thành)"
                    value={this.state.address}
                    onChange={(event) => this.onChangeAddress(event)}
                ></input>
                <button className="btn-add margin-l-r-10" onClick={() => this.handleOnClickAdd()}>ADD</button>
            </span>
        )
    }
}
export default AddStudent;