import React, {useCallback, useContext} from 'react'
import {Form, Input, Checkbox, Button, message} from 'antd';
import {Context} from '../../../context/userContext';
import {setLogin} from "../../../actions/userActions"
import {BASE_URL} from "../../../config/config"
import {useHistory} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../../../helper/setAuthToken';
import axios from "axios";


export default function Login() {

    const {dispatch} = useContext(Context);

    const history = useHistory();

    const email = React.useRef("");
    const pass = React.useRef("");


    const login = useCallback(
        async (user) => {
       /*     axios({
                method: "POST",
                url: `${BASE_URL}authenticate`,
                data: data
            })
                .then(async res => {
                    if (res.status === 403 || res.message === "Access Denied") {
                        message.error("Email or password are wrong !!");
                    } else {
                        message.success("Login succes !!");
                        await dispatch(setLogin(res.data.token));
                        setAuthToken(res.data.token);
                        window.localStorage.setItem('token', res.data.token);
                        window.localStorage.setItem('user', res.data.user);
                        history.push("/");
                    }
                })*/

            await fetch(`${BASE_URL}authenticate`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            }).then(res => res.json())
                .then(
                    async res => {
                        if (res.status === 403 || res.message === "Access Denied") {
                            message.error("Email or password are wrong !!");
                        } else {
                            message.success("Login succes !!");
                            await dispatch(setLogin(res.token));
                            setAuthToken(res.token);
                            window.localStorage.setItem('token', res.token);
                            window.localStorage.setItem('user', res.user);
                            history.push("/");
                        }
                    });
        },
        [dispatch, history],
    );

    const onFinish = async values => {
        await login(values);
    }

    return (
        <div className="bg-dark">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-4">
                                        <div className="card-header justify-content-center"><h3
                                            className="font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <Form
                                                name="basic"
                                                initialValues={{remember: false}}
                                                onFinish={onFinish}
                                                layout="vertical"
                                            >
                                                <Form.Item
                                                    label="Email"
                                                    name="email"
                                                    className="small mb-1 my-4"
                                                    rules={[
                                                        {required: true, message: 'email required!'},
                                                        {type: 'email', message: 'Incorrect email!'}
                                                    ]}
                                                >
                                                    <Input size="large" className="form-control py-2" ref={email}/>
                                                </Form.Item>
                                                <div className="form-group">
                                                    <Form.Item
                                                        className="small mb-1 my-4"
                                                        label="Mot de passe"
                                                        name="password"
                                                        rules={[{required: true, message: 'mot de passe required !'}]}
                                                    >
                                                        <Input.Password size="large" className="form-control py-2"
                                                                        ref={pass}/>
                                                    </Form.Item>
                                                </div>
                                                <Form.Item className="custom-control custom-checkbox" name="remember"
                                                           valuePropName="checked">
                                                    <Checkbox>Remember me</Checkbox>
                                                </Form.Item>

                                                <Form.Item>
                                                    <Button block shape="round" type="primary" htmlType="submit"
                                                            size="large">
                                                        Login
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </div>
                                        <div className="card-footer text-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer mt-auto footer-dark">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small">
                                    Copyright &#xA9; Your Website 2020
                                </div>
                                <div className="col-md-6 text-md-right small">
                                    <a href="#!">Privacy Policy</a>&#xB7;
                                    <a href="#!">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
