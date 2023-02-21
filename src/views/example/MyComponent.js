import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 324, title: 'Developer', salary: 2000 },
            { id: 455, title: 'BA', salary: 1800 },
            { id: 177, title: 'Tester', salary: 1000 }
        ]
    }

    addNewJob = (job) => {
        console.log('ADDED new job !', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        console.log('render calling ...', this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <br />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponent;