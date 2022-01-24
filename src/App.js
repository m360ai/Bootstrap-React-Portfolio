import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Card Classname='mb-3' style={{color: "#000"}}>
        <Card.Body>
        <Form>
          <Row><Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder='Example@Email.com'></Form.Control>
            <Form.Text className="text-muted">Your Privacy is Paramount</Form.Text>
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId='formPassword'>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control type="password" placeholder='Enter Password'></Form.Control>
            <Form.Text className="text-muted" className="text-small">Choose a Strong Password</Form.Text>
          </Form.Group>
          </Col>
          
          <Form.Group><Button className="text-strong" Classname ="text-center" variant="secondary" type="submit">Login</Button></Form.Group>
          </Row>
          
         
          
        </Form>
        </Card.Body>
        </Card>
        <Card Classname='mb-3' style={{color: "#000"}}>
        <Card.Body>
<Card.Img src="https://picsum.photos/300/100"/>

<Card.Title>
  Welcome to Mastercard
</Card.Title>
<Card.Text>Click Below to Learn More</Card.Text>
<Button variant="primary">Read More</Button>
</Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>
        Test
        </Breadcrumb.Item>
       </Breadcrumb>
        <Alert variant="primary">On Click</Alert>
        <Button>Click Here</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
