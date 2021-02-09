import React, {useEffect} from 'react';
import {Button, Form, Input, Radio, Select} from "antd";
import {role} from "../../shared/enum/roles";

function UpdateProfile({id, email, lastName, firstName, roles, isActivated = true}) {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        form.resetFields();
        console.log('Received values of form: ', values);
    };


    return (
        <div className="row d-flex justify-content-center">
            <div className="col-xl-9">
                <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                        <Form
                            form={form}
                            name="advanced_search"
                            className="ant-advanced-search-form"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Form.Item
                                className="form-group"
                                name="email"
                                rules={[{required: true, message: 'Email required!!'}, {
                                    type: 'email',
                                    message: 'wrong format for  email!'
                                }]}
                                label={<label className="small mb-1" htmlFor="InputEmailAddress">Email address</label>}
                                initialValue={email}
                            >
                                <Input className="form-control" id="InputEmailAddress" type="email"
                                       placeholder="Enter your email address"
                                />
                            </Form.Item>

                            <div className="form-row">
                                <Form.Item
                                    className="form-group col-md-6"
                                    name="firstName"
                                    rules={[{required: true, message: 'First Name required!!'},]}
                                    label={<label className="small mb-1" htmlFor="InputFirstName">First name</label>}
                                    initialValue={firstName}
                                >
                                    <Input className="form-control" id="InputFirstName" type="text"
                                           placeholder="Enter your first name"/>

                                </Form.Item>
                                <Form.Item
                                    name="lastName"
                                    className="form-group col-md-6"
                                    rules={[{required: true, message: 'Last Name required!!'},]}
                                    label={<label className="small mb-1" htmlFor="InputLastName">Last name</label>}
                                    initialValue={lastName}
                                >
                                    <Input className="form-control" id="InputLastName" type="text"
                                           placeholder="Enter your last name"/>
                                </Form.Item>
                            </div>
                            <div className="form-row">
                                <Form.Item
                                    name="roles"
                                    className="form-group col-md-6"
                                    rules={[{required: true, message: 'Last Name required!!'},]}
                                    label={<label className="small mb-1" htmlFor="InputOrgName">Roles</label>}
                                    initialValue={roles}
                                >
                                    <Select
                                        size="large"
                                        mode="multiple"
                                        allowClear
                                        showSearch
                                        placeholder="Role"
                                        value={roles}
                                    >
                                        {
                                            Object.keys(role).map(key =>
                                                <Select.Option
                                                    key={key}
                                                    value={role[key]}
                                                    label={key}
                                                >
                                                    <div className="demo-option-label-item">
                                                        {role[key]}
                                                    </div>
                                                </Select.Option>
                                            )
                                        }

                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    className="form-group col-md-6"
                                    name="isActivated"
                                    rules={[{required: true, message: 'Active Compte required!!'},]}
                                    label={<label className="small mb-1" htmlFor="InputLocation">IsActive</label>}
                                    initialValue={isActivated}
                                >
                                    <Radio.Group
                                        id="InputLocation"
                                        defaultValue={isActivated}
                                        size="large"
                                        label="IsActive"
                                    >
                                        <Radio.Button value={true}>IsActive</Radio.Button>
                                        <Radio.Button value={false}>NotActive</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </div>

                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;