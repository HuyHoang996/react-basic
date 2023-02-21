import React from "react";
import './custom.scss'
class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>> Deleted -', job);
        this.props.deleteJob(job)
    }

    render() {
        console.log('Check props ...', this.props);
        let { arrJobs } = this.props;
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div><button
                        className="btn-show"
                        onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <span><button onClick={() => this.handleOnClickDelete(item)} >x</button></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;