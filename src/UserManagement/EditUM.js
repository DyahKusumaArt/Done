// import { useState, useEffect } from 'react'
// import { Button, Row, Col, Form, Card } from "react-bootstrap";
// import axios from "axios";
// import { useHistory, useParams } from 'react-router-dom';

// const EditUM = () => {
//     const { id } = useParams();
//     const [email, setEmail] = useState('');
//     const [full_name, setFullName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [role, setRole] = useState('');
//     const [password, setPassword] = useState("");
//     const [confPassword, setConfPassword] = useState("");
//     const history = useHistory();
//     const updateProduct = async (e) => {
//         e.preventDefault();
//         await axios.patch(`http://localhost:3000/users/` + id, {
//             full_name: full_name,
//             phone: phone,
//             email: email,
//             password: password,
//             confPassword: confPassword,
//             role: role,
//         }, { withCredentials: true });
//         history.push("/muser");
//     }
//     const updateData = async (e) => {
//         e.preventDefault();
//         fetch("http://localhost:3000/users/" + id, {
//             method: 'PATCH',
//             credentials: "include",
//             body: JSON.stringify({
//                 full_name: full_name,
//                 phone: phone,
//                 email: email,
//                 password: password,
//                 confPassword: confPassword,
//                 role: role,
//             }),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         });
//         history.push("/mstaff");
//     }

//     useEffect(() => {
//         getProductById();
//     }, []);

//     const getProductById = async () => {
//         axios.get(`http://localhost:3000/users/` + id, { withCredentials: 'true' })
//             .then((response) => {
//                 setFullName(response.data.full_name);
//                 setEmail(response.data.email);
//                 setPhone(response.data.phone);
//                 setRole(response.data.role);
//                 setPassword(response.data.password);
//             })
//     }

//     const name = e => {
//         setFullName(e.target.value)

//     };
//     return (
//         <div className='container'>
//             <Card.Header as="h1" className='mb-3'>update Data</Card.Header>
//             <Card.Body>
//                 <Form onSubmit={updateProduct}>
//                     <Row>
//                         <Col>
//                             <>
//                                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                                     <Form.Label>Full Name</Form.Label>
//                                     <Form.Control type="text" placeholder="Full Name"
//                                         value={full_name}
//                                         onChange={name} />
//                                 </Form.Group>
//                             </>
//                         </Col>
//                         <Col>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Phone Number</Form.Label>
//                                 <Form.Control type="text" placeholder="Location"
//                                     value={phone}
//                                     onChange={(e) => setPhone(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Email Id</Form.Label>
//                                 <Form.Control type="email" placeholder="Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Label>Permissions</Form.Label>
//                             <Form.Select aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
//                                 <option value={role}>{role}</option>
//                                 <option value="Employee">Employee</option>
//                                 <option value="Admin">Admin</option>
//                                 <option value="Student">student</option>

//                             </Form.Select>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control type="password" placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                 <Form.Label>Confirm Password</Form.Label>
//                                 <Form.Control type="password" placeholder="Password"
//                                     value={confPassword}
//                                     onChange={(e) => setConfPassword(e.target.value)} />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row className="col-md-8 mx-auto">
//                         <Button bsPrefix="addButton" variant="primary" type="submit" >
//                             Save
//                         </Button>
//                     </Row>

//                 </Form>
               
//             </Card.Body>

//         </div>
//     )
// }

// export default EditUM