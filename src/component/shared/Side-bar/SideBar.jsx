import React, {useState} from 'react';
import * as Icon from 'react-feather';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {MailOutlined, UsergroupDeleteOutlined, SettingOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;

function SideBar(props) {

    const [user] = useState({
        nom: "Admin",
        prenom: "ADMIN",
        email: "admin@gmail.com"
    });


    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light min-vh-100">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        <Menu
                            style={{height: '70%', marginTop: 20, overflowY: "hidden"}}
                            defaultOpenKeys={['dash']}
                            mode="inline"
                            className="sidenav-menu-heading"
                            aria-orientation="vertical"
                        >
                            <Menu.Item key="dash" icon={<Icon.Activity size={20}/>}>
                                <Link to="/">
                                    DashBord
                                </Link>
                            </Menu.Item>
                            <SubMenu key="users"
                                     icon={<UsergroupDeleteOutlined style={{fontSize: '22px'}}/>}
                                     title="Users management"
                            >
                                <Menu.ItemGroup key="et" title="Etudiant">
                                    <Menu.Item key="1">
                                        <Link to="/listEtudiant">
                                            List of Students
                                        </Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="pr" title="Professeur">
                                    <Menu.Item key="3">
                                        <Link to="/listProfs">
                                            List des professeurs
                                        </Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="groups" icon={<SettingOutlined/>} title="Groups management">
                                <Menu.Item key="5">
                                    <Link to="/listGroups">
                                        List of Groups
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="serv" icon={<MailOutlined/>} title="Events management">
                                <Menu.Item key="9">
                                    <Link to="/listEvent">
                                        List of Event
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </div>

                <div className="sidenav-footer">
                    <div className="sidenav-footer-content">
                        <div className="sidenav-footer-subtitle">Logged in as:</div>
                        <div className="sidenav-footer-title">{user.nom + " " + user.prenom}</div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;