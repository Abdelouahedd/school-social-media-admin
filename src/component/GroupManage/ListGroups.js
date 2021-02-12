import React, {useState} from 'react';
import {List, Card} from 'antd';
import {Link} from "react-router-dom";

function ListGroups(props) {
    const {REACT_APP_URL} = process.env;

    const data = [
        {
            name: 'GI ',
        },
        {
            name: 'IID',
        },
        {
            name: 'GRT',
        },
        {
            name: 'BIG DATA',
        },
    ];

    const [groups, setGroups] = useState(data);
    const [groupSearch, setGroupSearch] = useState(data);

    const searchGroup = (value) => {
        if (value === "") {
            setGroupSearch(groups);
        }
        const newArray = groups.filter(group => group.name.trim().toLowerCase().includes(value.trim().toLowerCase()))
        setGroupSearch(newArray);
    }

    return (

        <div id="layoutSidenav_content">
            <main>
                <div className="container mt-4">
                    <header className="card card-waves">
                        <div className="card-body px-5 pt-5 pb-0">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6">
                                    <h1 className="text-primary">How can we help?</h1>
                                    <p className="lead mb-4">Search our knowledge base to find answers, or contact us
                                        directly if you&apos;re having issues!</p>
                                    <div className="shadow rounded">
                                        <div className="input-group input-group-joined input-group-joined-xl border-0">
                                            <input className="form-control" type="text" placeholder="Search..."
                                                   aria-label="Search" autoFocus
                                                   onChange={(e) => searchGroup(e.target.value)}/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><i
                                                    className="fa fa-search"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4"><img className="img-fluid"
                                                               src={`${REACT_APP_URL}/assets/img/freepik/problem-solving-pana.svg`}/>
                                </div>
                            </div>
                        </div>
                    </header>
                    <hr className="mt-2 mb-4"/>
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 4,
                        }}
                        dataSource={groupSearch}
                        renderItem={item => (
                            <List.Item className="col-lg-4 mb-4">
                                <Link to={`group/${1}`} className="card lift lift-sm h-100">
                                    <div className="card-body py-3">
                                        <h5 className="card-title  text-primary mb-2">
                                            <i className="fa fa-layer-group px-2"/>
                                            {item.name}
                                        </h5>
                                    </div>
                                    <div className="card-footer">
                                        <div className="small text-muted">230 user in this groups</div>
                                    </div>
                                </Link>
                            </List.Item>
                        )}
                    />
                </div>
            </main>
        </div>

    );
}

export default ListGroups;


