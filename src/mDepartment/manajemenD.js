import { Button, Row, Col, Modal, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "../style/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DataTable from "react-data-table-component";
import axios from "axios";


//style
const customStyles = {
    rows: {
        style: {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
            textTransform: "capitalize"
        },
        input: {
            style: {
                filter: 'invert(10%) hue-rotate(10deg) brightness(1) !important'
            }
        }
    },
    tables: {
        border: "3px !important"
    },

    headCells: {
        style: {
            backgroundColor: "#FFF !important",
            color: "black !important",
            borderTopStyle: 'outset',
            borderTopWidth: '1px',
            textAlign: 'center !important',
            textTransform: 'capitalize'
        },
    },

};

// paginasi
const paginationComponentOptions = {
    rowsPerPageText: 'Rows for Page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'ALL',
};

//Crud, select, search
export const ManajemenDepartment = () => {
    //menampilkan kolom dan isi tabel.
    const columns = [
        {
            name: "Nama Department",
            selector: row => row.name,
            sortable: true,
            center: true,
        },
        {
            name: "edit",
            center: true,
            cell: row => (
                <div>
                    <Row>
                        <Col>
                            <Button size="md" style={{ color: 'black' }} onClick={() => handleEdit(row.id)} >
                                <FontAwesomeIcon size="md" icon={faEdit} />
                            </Button>
                        </Col>

                    </Row>
                </div>
            )
        }
    ];
const [data, setData] = useState([]);
    //filtering
    const [filterText, setFilterText] = React.useState('');
    const filteredItems = data.filter(
        item => item.name.toLowerCase().includes(filterText.toLowerCase())
    );
   
    //menampilkan employee
    useEffect(() => {
        getDepartmet();
    }, [])

    const getDepartmet = async () => {
        axios.get("http://localhost:3000/department", { withCredentials: 'true' })
            .then((response) => {
                setData(response.data);
            });
    };

    //add employee
    const [id, setId] = useState("");
    const [name, setName] = useState("");

    //menambah employee

    //modal add
    const [buka, setBuka] = useState(false);
    const addEmployee = async (id) => {
            axios.post("http://localhost:3000/department", {
                name: name,
            }, { withCredentials: 'true' })
                .then(() => {
                    console.log('mau');
                })
    };

    //modal edit
    const [tampil, setTampil] = useState(false);
    const handleTtp = () => setTampil(false);
    const handleEdit = (id) => {
        axios.get("http://localhost:3000/department/" + id , { withCredentials: 'true' })
            .then((response) => {
                setId(response.data.id);
                setName(response.data.name);
               setTampil(true);
            });
    };
    const updateProduct = async () => {
        axios.patch("http://localhost:3000/department/" + id, {
            id: id,
            name: name,
        }, { withCredentials: 'true' })
            .then(
                () => {
                    console.log('mau');
                }
            ).catch(
                (eror) => {
                    console.log('gaamau');
                    console.log(eror);
                }
            )
    }
    const handleTutup = () => {
        setBuka(false);
    }
    const handleBuka = () => setBuka(true);
    return (
        <div className="back mt-3">
            <div className="content d-flex mb-4 ">

                <h3 className="TextU pt-1">Student List</h3>
                <Button className="shadow" style={{ marginRight: "30px", backgroundColor: '#233EAE', height: "37px", width: "135px", borderRadius: "50px" }}
                    onClick={handleBuka}> ADD NEW   +</Button>
                <input className="text-center shadow"
                    style={{ color: "white", background: "#233EAE", borderRadius: "50px", marginBottom: "20px", height: "37px", width: "135px" }}
                    id="search"
                    type="text"
                    placeholder=" 
                        Search ..."
                    aria-label="Search Input"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}

                />
                <Modal //modal add
                    show={buka}
                    onHide={handleTutup}
                    backdrop="static"
                    size="lg"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Row>
                            <Col xs={9}>
                                <Modal.Title>Add Department</Modal.Title>
                            </Col>
                            <Col xs={3}>
                            </Col>
                        </Row>

                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={addEmployee}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nama Department</Form.Label>
                                        <Form.Control type="text"  placeholder="Full Name" onChange={(e) => setName(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                
                            </Row>
                            <Row className=" mx-auto">
                                            <Button  variant="success" type="submit" >
                                                Save
                                            </Button>
                                        </Row>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal //modal edit
                    show={tampil}
                    onHide={handleTtp}
                    backdrop="static"
                    size="lg"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={() => updateProduct(id)}>
                            <Row>
                                
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicAddress">
                                        <Form.Label>Nama Department</Form.Label>
                                        <Form.Control type="text" placeholder="Address"
                                            onChange={(e) => setName(e.target.value)} value={name} />
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
            <div className="shadow">
                <DataTable
                    className="table-staff"
                    title="User"
                    columns={columns}
                    data={filteredItems}
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    fixedHeader
                    highlightOnHover
                    pointerOnHover
                    responsive
                    noHeader
                    fixedHeaderScrollHeight="760px"
                    customStyles={customStyles}
                />
            </div>
        </div >
    );
};

export default ManajemenDepartment;


