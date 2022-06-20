import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { 
  Button, 
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap';
import { useState } from 'react';

function App() {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errors, setErrors] = useState([])

  // Handlers
  const loginModal = ()=>{
    setIsOpen(!isOpen)
  }
  const registrationModal = ()=>{
    setIsOpen(!isOpen)
  }

  // send registration data to server
  const getRegister = ()=>{
    console.log(name, email,password)
    // axios.method(url, data).then().catch()
    axios.post('/auth/registration', {
      name,email,password
    }).then(response => {
      console.log(response.data.errors)
      setErrors(response.data.errors)
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Login Authentication Process Tutorial(Full-stack)</h3>

        <Button color="success" onClick={loginModal}>LogIn</Button>
        <br/>
        <Button color="danger" onClick={registrationModal}>Registration</Button>
        
        {/* Modal for login*/}
        <Modal isOpen = {isOpen}
          toggle={loginModal}
        >
          <ModalHeader toggle={loginModal}>
            Login
          </ModalHeader>
          <ModalBody>
          <Form inline>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-2"
              for="exampleEmail"
            >
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="something@idk.cool"
              type="email"
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-2"
              for="examplePassword"
            >
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="don't tell!"
              type="password"
            />
          </FormGroup>
        </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={loginModal}
            >
              Submit
            </Button>
            {' '}
            <Button onClick={loginModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* Modal for registration*/}
        <Modal isOpen = {isOpen} toggle={registrationModal}>
          <ModalHeader toggle={registrationModal}>
            Registration
          </ModalHeader>
          <ModalBody>
          {
          errors&&
          errors.map((error, index)=>{
           return(
            <Alert color="danger" key={index}>
            {error.msg}
            </Alert>
           )
          })
          }
          <Form inline>
          <FormGroup>
            <Label for="exampleEmail">
              Full-Name
            </Label>
            <Input type="text" onChange={(e)=> setName(e.target.value)} />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-2"
              for="exampleEmail"
            >
              Email
            </Label>
            <Input
              id="exampleEmail"
              placeholder="something@idk.cool"
              type="email"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label
              className="me-sm-2"
              for="examplePassword"
            >
              Password
            </Label>
            <Input
              id="examplePassword"
              placeholder="don't tell!"
              type="password"
              onChange={(e)=> setPassword(e.target.value)}
            />
          </FormGroup>
        </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={getRegister}
            >
              Submit
            </Button>
            {' '}
            <Button onClick={registrationModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </header>
    </div>
  );
}

export default App;
