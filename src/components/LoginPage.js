import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(!user && !password) {
      alert('Ingresa un nombre de usuario y password valido');
      return
    }

    onLogin({ user, password, reminder });

    setUser('');
    setPassword('');
    setReminder(false);
  };


  return (
    <Container>
      <Form onSubmit={onSubmit}>

        <Form.Group controlId="formText">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control 
          type="text"
          placeholder="@tweeterman"
          value={user}
          onChange={ (e) => setUser(e.target.value) }
          />
          <Form.Text className="text-muted">
            Tus datos no seran compartidos con terceros
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
          type="password"
          placeholder="1234"
          value={password}
          onChange={ (e) => setPassword(e.target.value) }>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Check 
          type={'checkbox'}
          label={'Recordar Acceso'}
          checked={reminder}
          value={reminder}
          onChange={ (e) => setReminder(e.currentTarget.checked) }
          />
        </Form.Group>

        <Button 
        variant="primary" 
        type="submit">
        Login
        </Button>

      </Form>
    </Container>
  )
}

export default LoginPage;
