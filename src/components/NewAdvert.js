import { useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewAdvert = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [sale, setSale] = useState(false)
  const [tags, setTags] = useState('Electrónicos')
  // const [file, setFile] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!name || !price) {
      alert('Favor de llenar todos los campos de tu anuncio')
      return
    }

    onAdd({ name, price, sale, tags })

    setName('')
    setPrice('')
    setSale(false)
    setTags('Electrónicos')
  }


  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Sony PlayStation 5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
            type="number"
            placeholder="$900"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Check 
        type="switch"
        label="Compra o Venta"
        checked={sale}
        value={sale}
        onChange={(e) => setSale(e.currentTarget.checked)}
        />

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Categoria</Form.Label>
            <Form.Control as="select" defaultValue="Electronicos"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            >
              <option>Electrónicos</option>
              <option>Ropa</option>
              <option>Movilidad</option>
              <option>Música</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridFile">
            <Form.Label>Sube una foto</Form.Label>
            <Form.File 
              id="custom-file"
              label="Sony ps5.jpg"
              data-browse="Subir"
              custom
            />
          </Form.Group>
        </Form.Row>

        <Button 
        variant="primary btn-block" 
        type="submit">
        Publicar
        </Button>
      </Form>
    </Container>
  )
}

export default NewAdvert
