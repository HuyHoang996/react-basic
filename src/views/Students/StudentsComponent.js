import React from "react";
import AddStudent from "./AddStudent";
import StudentManament from "./StudentManament";
import './Student.scss'
import { toast } from "react-toastify";
class StudentComponent extends React.Component {

    state = {
        students: [
            { id: 1, name: 'Ngô Huy Hoàng', birth: 1996, address: 'Hà Nội' },
            { id: 2, name: 'Nguyễn Đình Long', birth: 1996, address: 'Hà Nội' },
            { id: 3, name: 'Nguyễn Mạnh Hoà', birth: 1996, address: 'Hà Nội' },
            { id: 4, name: 'Tạ Quốc Hưng', birth: 1996, address: 'Hà Nội' }
        ]
    }

    addStudent = (student) => {
        this.setState({
            students: [...this.state.students, student]
        })
    }

    updateStudent = (student) => {
        if (student.name === "" || this.state.birth === "" || this.state.address === "") {
            toast.error("Missing required, update failed !")
            return
        }
        let studentsCoppy = this.state.students
        //  let studentsCoppy = [...this.state.students]  <<< Kết quả giống cách viết bên trên.
        let studentIndex = studentsCoppy.findIndex(item => item.id === student.id)

        studentsCoppy[studentIndex] = student
        this.setState({
            students: studentsCoppy
        })
        toast.success('Updated !')
    }

    deleteStudent = (student) => {
        // let studentsCoppy = this.state.students
        let studentsCoppy = [...this.state.students]
        studentsCoppy = studentsCoppy.filter(item => item.id !== student.id)
        this.setState({
            students: studentsCoppy
        })
        console.log(studentsCoppy);
        toast.success('Deleted')
    }

    render() {

        return (
            <div className="content-container">
                <AddStudent addStudent={this.addStudent} />
                <div className="student-manament">
                    <StudentManament
                        listStudent={this.state.students}
                        deleteStudent={this.deleteStudent}
                        updateStudent={this.updateStudent}
                    />
                </div>
            </div>
        )
    }
}
export default StudentComponent;