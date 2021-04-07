import { useContext, useRef, useEffect } from 'react'
import AdvertContext from '../../context/advert/advertContext'
import { FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const AdvertFilter = () => {
  const advertContext = useContext(AdvertContext)
  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const { filterAdverts, clearFilter, filtered } = advertContext

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterAdverts(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <FormControl
      ref={text}
      type='text'
      placeholder='Filtrar anuncios'
      className='mr-sm-2 my-2'
      onChange={onChange}
    />
  )
}

export default AdvertFilter
