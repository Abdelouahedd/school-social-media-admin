import React, {lazy} from "react";
import {Route, Switch} from "react-router-dom";


const Main = lazy(() => import("../component/main/Main"));
const ListStudents = lazy(() => import("../component/UsersManage/students/ListStudents"))
const UpdateStudent = lazy(() => import("../component/UsersManage/students/UpdateStudent"));
const ListProfs = lazy(() => import("../component/UsersManage/professeurs/ListProfs"));
const UpdateProf = lazy(() => import("../component/UsersManage/professeurs/UpdateProf"));

const Routes = () => (
    <Switch>
        <Route path='/' component={Main} exact/>
        <Route path='/listEtudiant' component={ListStudents} exact/>
        <Route path="/updateStudent/:id" component={UpdateStudent} exact/>
        <Route path='/listProfs' component={ListProfs} exact/>
        <Route path="/updateProf/:id" component={UpdateProf} exact/>
    </Switch>
);
export default Routes;