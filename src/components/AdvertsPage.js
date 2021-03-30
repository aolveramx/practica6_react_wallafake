import { Button, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdvertsPage() {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Modalidad</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sony PlayStation 5</td>
            <td>Compra</td>
            <td>900</td>
            <td>electronicos</td>
            <Button variant="outline-primary">Ver</Button>{' '}
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default AdvertsPage
