import { useNavigate } from 'react-router-dom';
import LogoPizza from '../assets/pizza.png';
import { Pizza } from '../models/Pizza.model';

type Props = Pizza 

const CardPizza = ({
  id,
  productName,
  description,
  }: Props) => {

    const naviagte = useNavigate();

    return (
      <div className="card-items" onClick={()=>naviagte(`/pizza/${id}`)}>
        <img className="card-image-pizza" src={LogoPizza} alt='9DevPizza' />
        <div style={{ height: '50%', width: '100%' }}></div>
        <div className='card-content'>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#fff', textAlign: 'center' }}>{productName}</div>
            <div style={{ fontSize: '16px', fontWeight: 300, color: '#fff', marginTop: '.5rem', textAlign: 'center' }}>{description}</div>
          </div>
        </div>
      </div>
    )
  };
  
export default CardPizza;