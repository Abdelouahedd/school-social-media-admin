import React, {useState} from 'react';
import {Empty, Input} from 'antd';
import * as Icon from "react-feather"
import Post from "./UI/PostCard/Post";


function Group(props) {

    const {REACT_APP_URL} = process.env;

    const [posts, setPosts] = useState([])
    const users = [
        {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        }, {
            lastName: "ABDELOUAHED",
            firstName: "ENNOURI",
        },
    ]


    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                    <div className="container">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><i data-feather="activity"/></div>
                                        Dashboard
                                    </h1>
                                    <div className="page-header-subtitle">Example dashboard overview and content
                                        summary
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-n10">
                    {/*Header of PAge*/}
                    <div className="row">
                        <div className="col-xxl-4 col-xl-6 mb-4">
                            <a className="card lift h-100" href="#!">
                                <div className="card-body d-flex justify-content-center flex-column">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <i className="feather-xl text-primary mb-3" data-feather="package"/>
                                            <h5>Powerful Components</h5>
                                            <div className="text-muted">To create informative visual elements on your
                                                pages
                                            </div>
                                        </div>
                                        <img className="card-img-top"
                                             src={`${REACT_APP_URL}/assets/img/freepik/browser-stats-pana.svg`}
                                             alt="..." style={{width: "10rem"}}/>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xxl-4 col-xl-6 mb-4">
                            <a className="card lift h-100" href="#!">
                                <div className="card-body d-flex justify-content-center flex-column">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <i className="feather-xl text-secondary mb-3" data-feather="book"/>
                                            <h5>Documentation</h5>
                                            <div className="text-muted">To keep you on track when working with our
                                                toolkit
                                            </div>
                                        </div>
                                        <img className="card-img-top"
                                             src={`${REACT_APP_URL}/assets/img/freepik/processing-pana.svg`}
                                             alt="..." style={{width: "10rem"}}/>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-xxl-4 col-xl-6 mb-4">
                            <a className="card lift h-100" href="#!">
                                <div className="card-body d-flex justify-content-center flex-column">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="mr-3">
                                            <i className="feather-xl text-green mb-3" data-feather="layout"/>
                                            <h5>Pages &amp; Layouts</h5>
                                            <div className="text-muted">To help get you started when building your new
                                                UI
                                            </div>
                                        </div>
                                        <img className="card-img-top"
                                             src={`${REACT_APP_URL}/assets/img/freepik/windows-pana.svg`}
                                             alt="..." style={{width: "10rem"}}/>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* Content*/}
                    <div className="row">
                        {/*List of Posts*/}
                        <div className="col-xxl-8">
                            <div className="row" style={{height: "120vh", overflow: "auto"}}>
                                <div className="col-xxl-12 mb-4">
                                    <div>
                                        {posts && posts.length !== 0 ? (
                                            <div>
                                                {posts.map((post) => (
                                                    <Post key={post?.id} post={post}/>
                                                ))}
                                            </div>
                                        ) : (
                                            <Empty/>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*List of users*/}
                        <div className="col-xxl-4">
                            <div className="card mb-4">
                                <div className="card-header">
                                    People
                                </div>
                                <div className="card-body overflow-auto" style={{height: "60vh"}}>
                                    {
                                        users.map(user =>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center flex-shrink-0 mr-3">
                                                    <div className="avatar avatar-xl mr-3 bg-gray-200"><img
                                                        className="avatar-img img-fluid"
                                                        src={`${REACT_APP_URL}/assets/img/freepik/profiles/profile-1.png`}
                                                        alt/>
                                                    </div>
                                                    <div className="d-flex flex-column font-weight-bold">
                                                        <a className="text-dark line-height-normal mb-1"
                                                           href="#!">{user.lastName + " " + user.firstName}</a>
                                                        <div className="small text-muted line-height-normal">
                                                            Student
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dropdown no-caret">
                                                    <button
                                                        className="btn btn-transparent-dark btn-icon dropdown-toggle"
                                                        id="dropdownPeople1" type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                        <Icon.MoreVertical/>
                                                    </button>
                                                    <div
                                                        className="dropdown-menu dropdown-menu-right animated--fade-in-up"
                                                        aria-labelledby="dropdownPeople1">
                                                        <a className="dropdown-item" href="#!">Action</a>
                                                        <a className="dropdown-item" href="#!">Another
                                                            action</a>
                                                        <a className="dropdown-item" href="#!">Something else
                                                            here</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body text-center p-5">
                                    <img className="img-fluid mb-4"
                                         src={`${REACT_APP_URL}/assets/img/freepik/team-spirit-pana.svg`} alt="teams"
                                         style={{maxWidth: "16.25rem"}}/>
                                    <h5>Team Access</h5>
                                    <p className="mb-4">Upgrade your plan to get access to team collaboration tools.</p>
                                    <a className="btn btn-sm btn-primary p-3 line-height-normal" href="#!">Upgrade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Group;