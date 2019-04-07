import React, {Component} from 'react';
import {Button, Checkbox} from "antd";

class GroupForm extends Component {
    state = {
        name: null,
        is_video: false,
        is_data_analytics: false,
        is_voice_analytics: false,
        is_services_analytics: false
    };

    handleSubmit = (event,requestType,groupID) => {
        event.preventDefault();
        let group = {...this.state}
        this.props.changeGroup(group, requestType,groupID)

    };
    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        });
        console.log(this.state)
    };
    handleCheck = (e) => {
        if (e.target.checked){
            this.setState({
                [e.target.name]: true,
            })
        }
        else {
            this.setState({
                [e.target.name]: false,
            })
        }
        console.log(this.state)

    }
    render() {

        return (
            <div className="row">

                <div className="col m6">
                    <form onSubmit={(event) => this.handleSubmit(event, this.props.requestType, this.props.groupID)}>
                        <input className="ant-input" type="text" placeholder="Enter username" onChange={this.handleChange} name="name" />
                        <br/>
                        <br/>
                        <Checkbox onChange={this.handleCheck} name="is_video">Video</Checkbox>
                        <Checkbox onChange={this.handleCheck} name={"is_data_analytics"}>Data Analytics</Checkbox>
                        <br/><br/>
                        <Checkbox onChange={this.handleCheck} name={"is_voice_analytics"} defaultChecked={false}>Voice Analytics</Checkbox>
                        <Checkbox onChange={this.handleCheck} name={"is_services_analytics"}>Service Analytics</Checkbox>
                        <br/>
                        <br/>
                        <div>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>
                    </form>

                    <br />
                    <br />
                </div>

            </div>
        );
    }
}

export default GroupForm;