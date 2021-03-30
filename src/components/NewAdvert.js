import { Button, Col, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewAdvert() {
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Sony PlayStation 5"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control 
            type="number"
            placeholder="$900"
            />
          </Form.Group>
        </Form.Row>

        <Form.Check 
        inline 
        label="Compra" 
        />

        <Form.Check 
        inline 
        label="Venta" 
        />

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCategory">
            <Form.Label>Categoria</Form.Label>
            <Form.Control as="select" defaultValue="Electronicos">
              <option>Electronicos</option>
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
              data-browse="Archivo"
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
