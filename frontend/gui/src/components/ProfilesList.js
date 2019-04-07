import React, {Component} from 'react';
import axios from 'axios'
import Profiles from '../components/Profiles'
class ProfilesList extends Component {
    state = {
        profiles: [],
        visible: false,

    };

    changeProfile = (person,requestType,profileID) => {


        switch (requestType) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/users/', person)
                    .then(res =>
                    {
                        const {profiles} = this.state;
                        profiles.push(res.data);
                        this.setState({profiles});
                        console.log(res)
                    })
                    .catch(err => console.log(err));
                break;
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/users/${profileID}/`, person)
                    .then(res =>
                    {
                        axios.get('http://127.0.0.1:8000/api/users/')
                            .then(response => {
                                this.setState({profiles: response.data})
                            })
                    })
                    .catch(err => console.log(err));
                break;
            default:
                break;
        }



    };
     componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(res => {
                this.setState({
                    profiles: res.data
                });
            })
     }
    makeForceUpd = () =>{
           this.forceUpdate();
         };
    render(){

        const deleteProfile = id => {
            axios.delete(`http://127.0.0.1:8000/api/users/${id}/`)
                .then(response => {
                    axios.get('http://127.0.0.1:8000/api/users/')
                        .then(res => {
                            this.setState(
                                {profiles: res.data}
                            )
                        })
                });
        };
        return (
            <div>
                <Profiles profiles={this.state.profiles} changeProfile={this.changeProfile} deleteProfile={deleteProfile} />
            </div>
        );
    }
}

export default ProfilesList;