import React, {Component} from 'react';
import axios from "axios";
import Groups from '../components/Groups'
class GroupsList extends Component {
    state = {
        groups: []
    };
    changeGroup = (group,requestType,groupID) => {
        switch (requestType) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/groups/', group)
                    .then(response => {
                        axios.get('http://127.0.0.1:8000/api/groups/')
                            .then(res =>{
                                this.setState({groups:res.data})
                            })
                    })
                    .catch(err => console.log(err));
                break;
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/groups/${groupID}/`, group)
                    .then(response => {
                        axios.get('http://127.0.0.1:8000/api/groups/')
                            .then(res =>{
                                this.setState({groups:res.data})
                            })
                    })
                    .catch(err => console.log(err));
                break;
        }
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/groups/')
            .then(res => {
                this.setState({
                    groups: res.data
                });
            })
     }
    render() {
        const deleteGroup = id => {
            axios.delete(`http://127.0.0.1:8000/api/groups/${id}/`)
                .then(response => {
                    axios.get('http://127.0.0.1:8000/api/groups/')
                        .then(res => {
                            this.setState(
                                {profiles: res.data}
                            )
                        })
                });
        };
        return (
            <div>
               <Groups groups={this.state.groups} deleteGroup={deleteGroup} changeGroup={this.changeGroup} />
            </div>
        );
    }
}

export default GroupsList;