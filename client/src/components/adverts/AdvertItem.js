import { useContext } from 'react'
import PropTypes from 'prop-types'
import { Badge, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import AdvertContext from '../../context/advert/advertContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import defaultIMG from '../../img/DefaultIMGAdvert.png'

const AdvertItem = ({ advert }) => {
  const advertContext = useContext(AdvertContext)
  const { deleteAdvert } = advertContext

  const { id, name, type, price, tags } = advert

  const onDelete = () => {
    deleteAdvert(id)
  }

  return (

    <Card style={{ width: '18rem' }} className='my-2'>
      <Card.Img variant='top' src={defaultIMG} />
      <Card.Body>
        <Card.Title>{id}</Card.Title>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>
          {type ? 'Venta' : 'Compra'}
        </ListGroupItem>
        <ListGroupItem>{price}</ListGroupItem>
        <ListGroupItem>
          <Badge variant='info'>{tags}</Badge>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='danger' onClick={onDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
  )
}

AdvertItem.propTypes = {
  advert: PropTypes.object.isRequired,
}

export default AdvertItem
