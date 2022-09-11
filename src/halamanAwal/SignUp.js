import { Button, Form, Container, Card } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import logo from '../assets/image/D.png';
import "../style/style.css";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [full_name, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let item = { full_name,phone, email, password, confPassword }
    console.warn(item);
    fetch("http://localhost:3000/users", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(
      (res)=>{
        localStorage.setItem("user-info", JSON.stringify(res));
        history.push("/LForm");
      } )
      .catch(
        (err)=>{
          console.log(err);
        }
      )
    
  }
  return (
    <div className="bgLogin">
      <div className="space">
        <Container className="px-lg-5">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                <img src={logo} alt="logo awal" className="logoD rounded-circle" />
                <div className="text-muted p-2">Dashboard</div>
                <h3>Registrasi</h3>
                <div className="text-muted p-2 mt-3">Enter your email and password below</div>

              </Card.Title>
              <Card.Body>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-2" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control size="lg" type="text" placeholder="Full Name" className="formColor"
                      onChange={(e) => setFullname(e.target.value)} value={full_name} />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control size="lg" type="number" placeholder="Phone" className="formColor"
                      onChange={(e) => setPhone(e.target.value)} value={phone} />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control size="lg" type="email" placeholder="Email Address" className="formColor"
                      onChange={(e) => setEmail(e.target.value)} value={email} />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label className="d-flex justify-content-between">
                      <div>PASSWORD </div>
                    </Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Password" className="formColor"
                      onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 " controlId="formBasicConfPassword">
                    <Form.Label className="d-flex justify-content-between">
                      <div>CONFIRM PASSWORD </div>
                    </Form.Label>
                    <Form.Control size="lg" type="password" placeholder="Confirm Password" className="formColor"
                      onChange={(e) => setConfPassword(e.target.value)} value={confPassword}
                    />
                  </Form.Group>
                  <div className="mb d-grid">
                    <Button variant="primary" type="submit" className="button is-success is-fullwidth"
                    > Create Account
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
export default SignIn;