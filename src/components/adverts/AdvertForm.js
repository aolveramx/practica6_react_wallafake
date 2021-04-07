import { useState, useContext } from 'react'
import AdvertContext from '../../context/advert/advertContext'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdvertForm = () => {
  const advertContext = useContext(AdvertContext)

  const [advert, setAdvert] = useState({
    name: '',
    sale: true,
    price: '',
    tags: ''
  })

  // const options = [
  //   {
  //     label: 'LifeStyle',
  //     value: 'lifestyle'
  //   },
  //   {
  //     label: 'Work',
  //     value: 'work'
  //   },
  //   {
  //     label: 'Mobile',
  //     value: 'mobile'
  //   },
  //   {
  //     label: 'Motor',
  //     value: 'motor'
  //   }
  // ]

  const { name, sale, price, tags } = advert

  const onChange = (e) =>
    setAdvert({ ...advert, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    advertContext.addAdvert(advert)
    setAdvert({
      name: '',
      sale: true,
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
        />
      </Form.Group>

    

      <Form.Group>
        <Form.Control
          type='text'
          placeholder='$900'
          name='price'
          value={price}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Check
          inline
          type='radio'
          name='sale'
          value={sale}
          label='Venta'
          onChange={onChange}
        />

        <Form.Check
          inline
          type='radio'
          value={sale}
          name='sale'
          label='Compra'
          onChange={onChange}
        />
      </Form.Group>

      <Form.Label>Categoria</Form.Label>
      <Form.Group>
        <Form.Check
          inline
          type='radio'
          name='tags'
          value={tags}
          label='lifeStyle'
          onChange={onChange}
        />
        <Form.Check
          inline
          type='radio'
          name='tags'
          value={tags}
          label='work'
          onChange={onChange}
        />
        <Form.Check
          inline
          type='radio'
          name='tags'
          value={tags}
          label='mobile'
          onChange={onChange}
        />
        <Form.Check
          inline
          type='radio'
          name='tags'
          value={tags}
          label='motor'
          onChange={onChange}
        />

      </Form.Group>

      {/* <Form.Group>
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          as='select'
          defaultValue='lifestyle'
          value={tags.option}
          onChange={(e) => {
            setAdvert(e.target.value)
          }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </Form.Control>
      </Form.Group> */}

      <Form.Group>
        <Form.Label>Sube una foto</Form.Label>
        <Form.File
          id='custom-file'
          label='Sony ps5.jpg'
          data-browse='Subir'
          custom
        />
      </Form.Group>

      <Button variant='primary btn-block' type='submit'>
        Publicar
      </Button>
    </Form>
  )
}

export default AdvertForm
