import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";


const Main = lazy(() => import("../component/main/Main"));
const ListStudents = lazy(() => import("../component/UsersManage/students/ListStudents"))
const UpdateStudent = lazy(() => import("../component/UsersManage/students/UpdateStudent"));
const ListProfs = lazy(() => import("../component/UsersManage/professeurs/ListProfs"));
const UpdateProf = lazy(() => import("../component/UsersManage/professeurs/UpdateProf"));
const ListGroups = lazy(() => import("../component/GroupManage/ListGroups"));
const Group = lazy(() => import("../component/GroupManage/Group"));
const ListEvents = lazy(() => import("../component/EventManage/ListEvents"));

const Routes = () => (
    <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/listEtudiant' component={ListStudents} exact/>
        <Route path="/updateStudent/:id" component={UpdateStudent} exact/>
        <Route path='/listProfs' component={ListProfs} exact/>
        <Route path="/updateProf/:id" component={UpdateProf} exact/>
        <Route path='/listGroups' component={ListGroups} exact/>
        <Route path="/group/:id" component={Group} exact/>
        <Route path='/listEvent' component={ListEvents} exact/>
    </Switch>
);
export default Routes;