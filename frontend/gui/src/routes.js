import React from 'react';
import { Route } from 'react-router-dom'
import ProfileList from './components/ProfilesList'
import GroupsList from './components/GroupsList'

// import GroupList from './components/GroupListView'
// import ProfileDetail from './components/ProfileDetailView'
// import UpdateProfile from './components/UpdateProfile'
const BaseRouter = () => (
    <div>
        <Route path="/groups/" component={GroupsList} />
        <Route exact path='/' component={ProfileList} />
        {/*<Route path="/users/:profileID/" component={ProfileDetail} />*/}
        {/*<Route path='/update' component={UpdateProfile} />*/}
    </div>

);
export default BaseRouter;