import PropTypes from 'prop-types'
import { Badge, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import defaultIMG from '../../img/DefaultIMGAdvert.png'

const AdvertItem = ({ advert }) => {
  const { id, name, sale, price, tags } = advert

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={defaultIMG} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>
          {sale === true ? 'Venta' : 'Compra'}
        </ListGroupItem>
        <ListGroupItem>{price}</ListGroupItem>
        <ListGroupItem>
          <Badge variant='info'>{tags}</Badge>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='danger'>Eliminar</Button>
      </Card.Body>
    </Card>
  )
}

AdvertItem.propTypes = {
  advert: PropTypes.object.isRequired,
}

export default AdvertItem
