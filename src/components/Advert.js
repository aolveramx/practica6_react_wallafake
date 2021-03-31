import { FaTimes, FaRegHandPointer } from 'react-icons/fa';

const Advert = ({ advert, onDelete }) => {
  return (
    <>
      <tr>
        <th>{advert.id}</th>
        <th>{advert.name}</th>
        <th>{advert.sale ? 'Venta' : 'Compra'}</th>
        <th>${advert.price}</th>
        <th>{advert.tags}</th>
        <th><FaRegHandPointer style={{ color: 'blue', cursor: 'pointer'}}/></th>
        <th><FaTimes style={{ color: 'red', cursor: 'pointer'}} 
        onClick={() => onDelete(advert.id)}
        />
        </th>
      </tr>
    </>
  )
}

export default Advert
