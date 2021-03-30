import { Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotFound404() {
  return (
    <Jumbotron>
      <h1>404 No Encontrada</h1>
      <hr/>
      <h2 className="my-3" >Parece que la página que estas buscando no existe 🥸</h2>
      <p>
        Te invitamos a regresar a buscar anuncios geniales!
      </p>
      <p>
        <Button variant="primary">Regresar</Button>
      </p>
    </Jumbotron>
  )
}

export default NotFound404
