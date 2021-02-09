import React, {useRef, useState} from 'react';
import {Table, Space, Button, Popconfirm, Input, Tag, Col, Row} from 'antd';
import * as Icon from 'react-feather';
import Highlighter from 'react-highlight-words';
import {SearchOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";


const {Column} = Table;


function ListProfs(props) {

    const searchInput = useRef();
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const getColumnSearchProps = dataIndex => ({

        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.current.select(), 100);
            }
        },
        return: text =>
            searchedColumn === dataIndex ?
                (<Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />)
                :
                (text),
    });
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex)
    };
    const handleReset = clearFilters => {
        clearFilters();
        setSearchText("")
    };


    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4,
    })

    const dataSource = [
        {
            id: '1',
            email: "JhonBrown@gmail.com",
            lastName: 'John ',
            firstName: ' Brown',
            roles: ['STANDARD', 'PROF'],
        },
        {
            id: '2',
            email: "JhonBrown@gmail.com",
            lastName: 'John ',
            firstName: ' Brown',
            roles: ['STANDARD', 'PROF'],
        },
        {
            id: '3',
            email: "JhonBrown@gmail.com",
            lastName: 'John ',
            firstName: ' Brown',
            roles: ['cool', 'PROF'],
        },
    ];


    function deleteProf(key) {
        console.log("Delete Student")
    }


    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-dark bg-gray-500">
                    <div className="container">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon">
                                            {/* <i className="fa fa-user text-white-50" aria-hidden="true"></i> */}
                                            <Icon.Users className="feather-xl text-white-50"/>
                                        </div>
                                        List of Students
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="datatable">
                                        <Table
                                            dataSource={dataSource}
                                            pagination={pagination}
                                            onChange={e => setPagination(e)}
                                            size="middle"
                                            rowKey={record => record.id}
                                        >
                                            <Column title="ID" dataIndex="id" key="id"/>
                                            <Column
                                                title="email"
                                                dataIndex="email"
                                                key="email"
                                                {...getColumnSearchProps('email')}

                                            />
                                            <Column
                                                title="lastName"
                                                dataIndex="lastName"
                                                key="lastName"
                                                {...getColumnSearchProps('lastName')}
                                            />
                                            <Column title="firstName"
                                                    dataIndex="firstName"
                                                    key="firstName"
                                                    {...getColumnSearchProps('firstName')}
                                            />
                                            <Column
                                                title="roles"
                                                dataIndex="roles"
                                                key="roles"
                                                {...getColumnSearchProps('roles')}
                                                render={
                                                    (tags) =>
                                                        tags.map(tag => {
                                                            let color = tag.length > 5 ? 'geekblue' : 'green';
                                                            if (tag === 'STUDENT') {
                                                                color = 'volcano';
                                                            }
                                                            return (
                                                                <Tag color={color} key={tag}>
                                                                    {tag.toUpperCase()}
                                                                </Tag>
                                                            );
                                                        })
                                                }
                                            />
                                            <Column
                                                title="Action"
                                                key="action"
                                                render={(text, record) => (
                                                    <>
                                                        <Row gutter={8}>
                                                            <Col span={6}>
                                                                <Popconfirm
                                                                    title="Sure to delete?"
                                                                    onConfirm={() => deleteProf(record.key)}
                                                                >
                                                                    <Button size="middle" danger type="primary"
                                                                            icon={<i className="fa fa-trash"
                                                                                     aria-hidden="true"/>}/>
                                                                </Popconfirm>
                                                            </Col>
                                                            <Col span={6}>
                                                                <Link to={{
                                                                    pathname: `/updateProf/${record.id}`,
                                                                    state: record
                                                                }}
                                                                >
                                                                    <Button size="middle" su type="primary"
                                                                            icon={<i className="fa fa-edit"
                                                                                     aria-hidden="true"/>}/>
                                                                </Link>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )}
                                            />
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default ListProfs;