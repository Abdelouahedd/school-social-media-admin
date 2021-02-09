import React, {useState, useRef, useCallback, useEffect} from 'react'
import {Table, Space, Button, Popconfirm, Tag, Input} from 'antd';
import * as Icon from 'react-feather';
import Highlighter from 'react-highlight-words';
import {SearchOutlined} from '@ant-design/icons';
import Footer from "../shared/footer/Footer";

const {Column} = Table;

export default function Main() {
    const {REACT_APP_URL} = process.env;

    //Fontion to create a filter in table of users
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




    const [data, setData] = useState({
        numberOfProf: 0,
        numberOfStudent: 0,
        numberOfCours: 0,
        numberOfFiliere: 0,
        nbrStudentByFiliere: [],
        nbrAbsByModule: []
    });
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 5,
    })

    const dataSource = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const deleteUser = (key) => {
        console.log("User with name ", key.name, " is deleted")
    }

    return (
        <div id="layoutSidenav_content">
            <main>
                <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                    <div className="container">
                        <div className="page-header-content pt-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto mt-4">
                                    <h1 className="page-header-title">
                                        <div className="page-header-icon"><Icon.Activity size={25}/></div>
                                        Dashboard
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container mt-n10">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 mb-4">
                            <div className="card h-100">
                                <div className="card-body h-100 d-flex flex-column justify-content-center py-5 py-xl-4">
                                    <div className="row align-items-center">
                                        <div className="col-xl-8 col-xxl-12">
                                            <div className="text-center px-4 mb-4 mb-xl-0 mb-xxl-4">
                                                <h1 className="text-primary">Welcome Back!</h1>
                                                <p className="text-gray-700 mb-0">It&apos;s time to get started! View
                                                    new opportunities now, or continue on your previous work.</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-xxl-12 text-center">
                                            <img className="img-fluid"
                                                 src={`${REACT_APP_URL}/assets/img/freepik/at-work-pana.svg`}
                                                 style={{maxWidth: "26rem"}}
                                                 alt="at-work img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">Nombre des professeur</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfProf}</div>
                                        </div>
                                        <i className="fas fa-chalkboard-teacher fa-3x text-white-150"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr">
                                            <div className="text-white-95 small">Nombre des etudiant</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfStudent}</div>
                                        </div>
                                        <i className="fas fa-user-graduate fa-3x  text-white-150 "></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">

                                            <div className="text-white-95 small">Nombre des cours</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfCours}</div>
                                        </div>
                                        <i className="fas fa-backpack fa-3x text-white-150"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-3 ">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-3">
                                            <div className="text-white-95 small">Nombre des Filiére</div>
                                            <div className="text-lg font-weight-bold">{data?.numberOfFiliere}</div>
                                        </div>
                                        <i className="fa fa-school fa-3x text-white-150"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 mb-4 ">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Nombre des etudiant par filiere
                                </div>
                                <div className="card-body">


                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 mb-4">
                            <div className="card card-header-actions h-100">
                                <div className="card-header">
                                    Nombre des absences par module
                                </div>
                                <div className="card-body">


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Personnel Management</div>
                        <div className="card-body">
                            <div className="datatable">
                                <Table
                                    dataSource={dataSource}
                                    pagination={pagination}
                                    onChange={e => setPagination(e)}
                                    size="middle"
                                >
                                    <Column title="ID" dataIndex="id" key="id"/>
                                    <Column
                                        title="name"
                                        dataIndex="name"
                                        key="name"
                                        {...getColumnSearchProps('name')}
                                    />
                                    <Column
                                        title="age"
                                        dataIndex="age"
                                        key="age"
                                        {...getColumnSearchProps('age')}
                                    />
                                    <Column
                                        title="address"
                                        dataIndex="address"
                                        key="address"
                                        {...getColumnSearchProps('address')}
                                    />
                                    <Column
                                        title="tags"
                                        dataIndex="tags"
                                        key="tags"
                                        {...getColumnSearchProps('tags')}
                                        render={
                                            (tags) =>
                                                tags.map(tag => {
                                                    let color = tag.length > 5 ? 'geekblue' : 'green';
                                                    if (tag === 'loser') {
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
                                            <Popconfirm title="Sure to delete?"
                                                        onConfirm={() => deleteUser(record.key)}
                                            >
                                                <Button size="middle" danger type="primary">
                                                    <i className="fa fa-trash" aria-hidden="true"/>
                                                </Button>
                                            </Popconfirm>
                                        )}
                                    />

                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
