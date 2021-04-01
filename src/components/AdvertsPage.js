import Advert from './Advert'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const AdvertsPage = ({ adverts, onDelete, onDetail }) => {
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
              <th>Ver</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
          {adverts.map((advert) => (
          <Advert key={advert.id} advert={advert} onDelete={onDelete} onDetail={onDetail}
          />
          ))}
          </tbody>
      </Table>
      <ButtonGroup>
        <Link to="/login">
          <Button variant="primary">Entrar</Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary">Registrarse</Button>
        </Link>
      </ButtonGroup>
    </Container> 
  )
}

export default AdvertsPage
