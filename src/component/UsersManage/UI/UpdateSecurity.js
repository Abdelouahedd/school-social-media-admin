import React, {useEffect} from 'react';
import {Form, Input} from "antd";

function UpdateSecurity({id, email, lastName, firstName, roles, isActivated, password = "ABDELOUAHED"}) {


    const [form] = Form.useForm();

    const onFinish = (values) => {
        form.resetFields();
        console.log('Received values of form: ', values);
    };


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <div className="card-header">Change Password</div>
                        <div className="card-body">
                            <Form
                                form={form}
                                name="advanced_search"
                                className="ant-advanced-search-form"
                                onFinish={onFinish}
                                layout="vertical"
                            >
                                <Form.Item
                                    name="password"
                                    className="form-group"
                                    label={<label className="small mb-1" htmlFor="currentPassword">Current
                                        Password</label>}
                                    initialValue={password}
                                >
                                    <Input.Password className="form-control" id="currentPassword"
                                                    placeholder="Enter current password"/>
                                </Form.Item>

                                <Form.Item
                                    name="newPassword"
                                    className="form-group"
                                    label={<label className="small mb-1" htmlFor="newPassword">New
                                        Password</label>}
                                    rules={[{required: true, message: "New message required"}]}
                                >
                                    <Input.Password className="form-control" id="newPassword"
                                                    placeholder="Enter new password"/>
                                </Form.Item>

                                <Form.Item
                                    name="confirmPassword"
                                    className="form-group"
                                    label={<label className="small mb-1" htmlFor="confirmPassword">Confirm
                                        Password</label>}
                                    dependencies={['newPassword']}
                                    rules={[
                                        {required: true, message: "Confirm new message required"},
                                        (({getFieldValue}) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('newPassword') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('The two passwords that you entered do not match!');
                                            }
                                        }))
                                    ]}
                                >
                                    <Input.Password className="form-control" id="confirmPassword"
                                                    name="confirmPassword" placeholder="Confirm new password"/>
                                </Form.Item>
                                <button className="btn btn-primary" type="button">Save</button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Delete Account</div>
                        <div className="card-body">
                            <p>Deleting your account is a permanent action and cannot be undone.
                                If you are sure you want to delete your account, select the
                                button below.</p>
                            <button className="btn btn-danger-soft text-danger" type="button">I
                                understand, delete my account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateSecurity;