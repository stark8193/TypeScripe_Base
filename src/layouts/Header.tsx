import { useLocation, useNavigate } from 'react-router-dom';
import ButtonField from '../components/ButtonField';

function Header() {

    const navigate = useNavigate();

    const {pathname} = useLocation();
    // console.log("pathname", pathname)
    return (
        <div className='flex-basic-between' style={{padding: '1.4rem 4rem'}}>
            <div style={{fontSize:'40px', fontWeight:600, cursor:'pointer'}} onClick={()=>navigate('/')}>PizzaLuan</div>
            <ButtonField onClick={()=>navigate('/create-pizza')}>Create Pizza</ButtonField>
        </div>
    );
}

export default Header;