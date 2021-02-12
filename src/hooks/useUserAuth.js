import {useCallback, useContext, useEffect, useState} from 'react';
import {Context} from "../context/userContext";
import {BASE_URL} from "../config/config"

import axios from "axios";
import setAuthToken from '../helper/setAuthToken';
import history from '../helper/history';
import {setLogin} from '../actions/userActions';
import {message} from "antd";

export const useUserAuthentication = () => {

    const {user, dispatch} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);


    const fetchUser = useCallback(
        async () => {
            try {
                const user = JSON.stringify(window.localStorage.getItem('user'))
                const token = window.localStorage.getItem('token');
                const auth = {
                    email: user.email,
                    password: "helloworld"
                };
                if (token) {
                    /*    await axios({
                            method: 'GET',
                            url: `${BASE_URL}authenticate`,
                            headers: {
                                'Content-Type': 'application/json',
                                'x-auth-token': `Bearer ${token}`,
                            },
                        }).then(
                            res => {
                                if (res.data.status === 403) {
                                    history.push('/login');
                                }
                                setAuthToken(token)
                                dispatch(setLogin(res.data.jwt));
                                setLoading(false)
                            });*/
                    await fetch(`${BASE_URL}authenticate/`, {
                        method: "POST",
                        body: JSON.stringify(auth),
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

                } else {
                    history.push('/login');
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }, [dispatch]);

    useEffect(() => {
        if (user.isLoggedIn === false) {
            fetchUser()
        }
        return () => setLoading(false)
    }, [fetchUser, user.isLoggedIn])

    return {
        error,
        loading,
        isLoggedIn: user.isLoggedIn,
    }
}