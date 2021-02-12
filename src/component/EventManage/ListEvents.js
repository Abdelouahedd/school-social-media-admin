import React, {useRef, useState} from 'react';
import moment from "moment";
import {Button, Input, Popconfirm, Space, Table} from 'antd';
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const {Column} = Table;


function ListEvents(props) {
    const {REACT_APP_URL} = process.env;


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


    const dataSource = [
        {
            id: '1',
            name: "Journée d'expere",
            deadline: '12-12-2020 ',
            localisation: ' ENSA',
            user: {
                id: '1',
                email: "gherabi@gmail.com",
                lastName: 'Mr GHERABI ',
                firstName: 'NOREDINNE',
                roles: ['STANDARD', 'PROF'],
            }
        },
        {
            id: '2',
            name: "OS",
            deadline: '12-12-2020 ',
            localisation: ' ENSA',
            user: {
                id: '1',
                email: "hadifi.imad@gmail.com",
                lastName: 'Mr HAFIDI ',
                firstName: 'IMADE',
                roles: ['STANDARD', 'PROF'],
            }
        },
        {
            id: '3',
            name: "DEVOPS DAY",
            deadline: '12-12-2020 ',
            localisation: ' ENSA',
            user: {
                id: '1',
                email: "ennouriabdelouahed@gmail.com",
                lastName: 'Ennouri ',
                firstName: 'Abdelouahed',
                roles: ['STANDARD', 'STANDARD'],
            }
        },

    ];

    const [data, setData] = useState(dataSource);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 4,
    })


    function deleteEvent(key) {
        console.log("Delete Student")
        setData(data.filter(d => d.id != key))
    }


    return (
        <div id="layoutSidenav_content">
            <main>
                <div class="container mt-5">
                    <div class="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
                        <div class="mr-4 mb-3 mb-sm-0">
                            <h1 class="mb-0">Dashboard</h1>
                            <div class="small">
                                <span class="font-weight-500 text-primary">Friday</span>
                                &#xB7; {moment().format('MMMM Do YYYY, h:mm:ss a')}
                            </div>
                        </div>
                    </div>
                    <div class="card card-waves mb-4 mt-5">
                        <div class="card-body p-5">
                            <div class="row align-items-center justify-content-between">
                                <div class="col">
                                    <h2 class="text-primary">Welcome back, your dashboard is ready!</h2>
                                    <p class="text-gray-700">Great job, your affiliate dashboard is ready to go! You can
                                        view sales, generate links, prepare coupons, and download affiliate reports
                                        using this dashboard.</p>
                                </div>
                                <div class="col d-none d-lg-block mt-xxl-n4">
                                    <img class="img-fluid px-xl-4 mt-xxl-n5"
                                         src={`${REACT_APP_URL}/assets/img/freepik/statistics-pana.svg`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex">
                        <div className="datatable">
                            <Table
                                dataSource={data}
                                pagination={pagination}
                                onChange={e => setPagination(e)}
                                size="middle"
                                rowKey={record => record.id}
                            >
                                <Column title="ID" dataIndex="id" key="id"/>
                                <Column
                                    title="name"
                                    dataIndex="name"
                                    key="name"
                                    {...getColumnSearchProps('name')}

                                />
                                <Column
                                    title="deadline"
                                    dataIndex="deadline"
                                    key="deadline"
                                    {...getColumnSearchProps('deadline')}
                                />
                                <Column title="localisation"
                                        dataIndex="localisation"
                                        key="localisation"
                                        {...getColumnSearchProps('localisation')}
                                />
                                <Column
                                    title="user"
                                    dataIndex="user"
                                    key="user"
                                    {...getColumnSearchProps('user')}
                                    render={
                                        (user) =>
                                            <p>{user.firstName + " " + user.lastName}</p>
                                    }
                                />
                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <Popconfirm
                                            title="Sure to delete?"
                                            onConfirm={() => deleteEvent(record.id)}
                                        >
                                            <Button size="middle" danger type="primary"
                                                    icon={<i className="fa fa-trash"
                                                             aria-hidden="true"/>}/>
                                        </Popconfirm>

                                    )}
                                />
                            </Table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ListEvents;