import Advert from './Advert';
import { Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const AdvertsPage = ({ adverts, onDelete }) => {
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
          <Advert key={advert.id} advert={advert} onDelete={onDelete}
          />
          ))}
          </tbody>
      </Table>
    </Container> 
  )
}

export default AdvertsPage
