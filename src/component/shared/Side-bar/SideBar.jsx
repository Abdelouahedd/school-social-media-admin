import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, UsergroupDeleteOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
function SideBar(props) {

    const [user] = useState({
        nom: "Admin",
        prenom: "ADMIN",
        email: "admin@gmail.com"
    });


    return (
        <div id="layoutSidenav_nav">
            <nav className="sidenav shadow-right sidenav-light">
                <div className="sidenav-menu">
                    <div className="nav accordion" id="accordionSidenav">
                        <Menu
                            style={{ height: '70%', marginTop: 20, overflowY: "hidden" }}
                            defaultOpenKeys={['dash']}
                            mode="inline"
                            className="sidenav-menu-heading"
                            aria-orientation="vertical"
                        >
                            <Menu.Item key="dash" icon={<Icon.Activity size={20} />} >
                                <Link to="/">
                                    DashBord
                                </Link>
                            </Menu.Item>
                            <SubMenu key="users"
                                icon={<UsergroupDeleteOutlined style={{ fontSize: '22px' }} />}
                                title="Gestion des utilisateur"
                            >
                                <Menu.ItemGroup key="et" title="Etudiant" >
                                    <Menu.Item key="1">
                                        <Link to="/listEtudiant">
                                            List des etudiant
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/ajouEt">
                                            Ajouter Etudiant
                                        </Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="pr" title="Professeur">
                                    <Menu.Item key="3">
                                        <Link to="/listProfs">
                                            List des professeurs
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="4">
                                        <Link to="/ajouProf">
                                            Ajouter Professeur
                                        </Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="fl" icon={<SettingOutlined />} title="Gestion des Filiere ">
                                <Menu.Item key="5">
                                    <Link to="/listFiliere">
                                        List des Fliere
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Link to="/ajoutFiliere">
                                        Ajouter Filiere
                                    </Link>
                                </Menu.Item>
                                <SubMenu key="niv" title="Niveau">
                                    <Menu.Item key="7">
                                        <Link to="/listNiveau">
                                            List Niveau
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="8">
                                        <Link to="/ajoutNiveau">
                                            Ajouter niveau
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="sem" title="Semestre">
                                    <Menu.Item key="9">
                                        <Link to="/listSemestre">
                                            List Semestre
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="10">
                                        <Link to="/ajoutSemestre">
                                            Ajouter Semestre
                                        </Link>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key="mod" title="Module">
                                    <Menu.Item key="11">
                                        <Link to="/listModule">
                                            List Module
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item key="12">
                                        <Link to="/ajouModule">
                                            Ajouter Module
                                        </Link>
                                    </Menu.Item>
                                    <SubMenu key="sub6" title="Element Module">

                                        <Menu.Item key="14">
                                            <Link to="/ajoutElModule">
                                                Ajouter element
                                            </Link>
                                        </Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="serv" icon={<MailOutlined />} title="Gestion de demande">
                                <Menu.Item key="9">
                                    <Link to="/listDemande">
                                        List des demandes
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