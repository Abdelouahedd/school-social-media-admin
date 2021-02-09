import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Tabs} from "antd";
import UpdateProfile from "../UI/UpdateProfile";
import UpdateSecurity from "../UI/UpdateSecurity";


function UpdateStudent(props) {

    const {id} = useParams();
    let location = useLocation();
    const [student, setStudent] = useState(location.state);
    const [title, setTitle] = useState("Account Settings - Profile");

    useEffect(() => {
        console.log("Hello world !!", id, " -- ", student);
    }, [id])

    const handleChnageTab = (key) => {
        key == 1 ? setTitle("Account Settings - Profile") : setTitle("Account Settings - Security")
    }


    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                    <div className="container-fluid">
                        <div className="page-header-content">
                            <div className="row align-items-center justify-content-between pt-3">
                                <div className="col-auto mb-3">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon pl-3">
                                            <i className="fa fa-user"/>
                                        </div>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-4">
                    <Tabs defaultActiveKey="1" onChange={handleChnageTab}>
                        <Tabs.TabPane tab="Profile" key="1" className="nav-link active ml-0">
                            <UpdateProfile {...student}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Security" key="2" className="nav-link active ml-0">
                            <UpdateSecurity {...student}/>
                        </Tabs.TabPane>
                    </Tabs>

                </div>
            </main>
        </div>
    );
}

export default UpdateStudent;