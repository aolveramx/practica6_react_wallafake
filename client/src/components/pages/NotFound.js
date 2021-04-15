import { Link } from 'react-router-dom'
import { Button, Jumbotron } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NotFound404 = () => {
  return (
    <Jumbotron>
      <h1>404 No Encontrada</h1>
      <hr/>
      <h2 className="my-3">Parece que la página que estas buscando no existe 🥸</h2>
      <p>
        Te invitamos a regresar a buscar anuncios geniales!
      </p>
      <p>
        <Link to="/">        
        <Button variant="primary">Regresar</Button>
        </Link>
      </p>
    </Jumbotron>
  )
}

export default NotFound404