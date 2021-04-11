import { useState, useContext } from 'react'
import AdvertContext from '../../context/advert/advertContext'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdvertForm = () => {
  const advertContext = useContext(AdvertContext)

  const [advert, setAdvert] = useState({
    name: '',
    sale: '',
    price: '',
    tags: ''
  })

  const { name, sale, price, tags } = advert

  const onChange = (e) =>
    setAdvert({ ...advert, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    advertContext.addAdvert(advert)
    setAdvert({
      name: '',
      sale: '',
      price: '',
      tags: '',
    })
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Título</Form.Label>
        <Form.Control
          type='text'
          placeholder='Sony PlayStation 5'
          name='name'
          value={name}
          onChange={onChange}
          required
        />
      </Form.Group>

      <Form.Group>
      <Form.Label>Precio</Form.Label>
        <Form.Control
          type='text'
          placeholder='$900'
          name='price'
          value={price}
          onChange={onChange}
          required
        />
      </Form.Group>

      <Form.Group>
      <Form.Label className="mr-2">Modalidad</Form.Label>
      
      <Form.Control
          type='text'
          placeholder='venta o compra'
          name='sale'
          value={sale}
          onChange={onChange}
          required
        />

        {/* <Form.Check
          inline
          type='radio'
          name='venta'
          value={sale === 'venta'}
          checked={sale === 'venta'}
          label='venta'
          onChange={onChange}
        />

        <Form.Check
          inline
          type='radio'
          name='compra'
          value={sale === 'compra'}
          checked={sale === 'compra'}
          label='compra'
          onChange={onChange}
        /> */}
      </Form.Group>

      <Form.Group>
      <Form.Label>Categoria</Form.Label>
        <Form.Control
          type='text'
          placeholder='lifeStyle, work, mobile, motor'
          name='tags'
          value={tags}
          onChange={onChange}
          required
        />
      </Form.Group>


      {/* <Form.Group>
        <Form.Label>Sube una foto</Form.Label>
        <Form.File
          id='custom-file'
          label='Sony ps5.jpg'
          data-browse='Subir'
          custom
        />
      </Form.Group> */}

      <Button variant='primary btn-block' type='submit'>
        Publicar
      </Button>
    </Form>
  )
}

export default AdvertForm
