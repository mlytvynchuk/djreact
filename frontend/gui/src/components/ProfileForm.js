import React, {Component} from 'react';
import axios from 'axios'
import {Select,Button} from "antd";
const {Option} = Select;
class ProfileForm extends Component {
    state = {
        groups: [],
        'username': null,
        'email': null,
        'group': null,
    };
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/groups/')
            .then(res => {
                this.setState({
                    groups: res.data
                });

            })
    };
    handleSubmit = (event,requestType,profileID) => {
        event.preventDefault();
        const { username, email, group } = this.state;
        let profile = {username:username, email:email, group:group};
        this.props.changeProfile(profile,requestType,profileID);
        this.forceUpdate();
    };
    render() {
        const handleSelectChange = (value) => {
            this.setState({
                group: value,
            })
        };
        const {groups} = this.state;
        const groupList = groups.map(group => {
            return (
                <Option key={group.id} value={group.id}>{group.name}</Option>
            )
        });
        const handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        };
        return (
            <div className="row">

                <div className="col m6">
                    <form onSubmit={(event) => this.handleSubmit(event, this.props.requestType, this.props.profileID)}>
                        <input className="ant-input" type="text" placeholder="Enter username" onChange={handleChange} name="username" />
                        <br/>
                        <br/>
                        <input className="ant-input" type="email" placeholder="Enter email" onChange={handleChange} name="email" />
                        <br/>
                        <br/>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a Group"
                            optionFilterProp="children"
                            onChange={handleSelectChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {groupList}
                        </Select>
                        <br />
                        <br />
                        <div>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>
                    </form>
                    {/*{this.state.username}*/}
                    <br />
                    {/*{this.state.email}*/}
                    <br />
                    {/*{this.state.group}*/}
                </div>

            </div>
        );
    }
}

export default ProfileForm;