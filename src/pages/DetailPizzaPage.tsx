import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LogoPizza from '../assets/pizza.png';
import ButtonField from '../components/ButtonField';
import LoadingLayout from '../layouts/LoadingLayout';
import ModalLayout from '../layouts/ModalLayout';
import { Pizza } from '../models/Pizza.model';

function DetailPizzaPage() {

    const { id } = useParams();
    const [pizza, setPizza] = useState<Pizza>({});
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:4000/products/${id?.toString()}`)
          .then((res) => res.json())
          .then((data) => {
            setTimeout(()=>{
                setPizza(data.data)
            },1000  )
          })
            // .then(data => console.log('data:', data))
          .catch((err) => console.error(err));
    
    }, [id]);

    const handleDeletePizza = ()=>{
        fetch(`http://localhost:4000/products/${id?.toString()}`, {method: 'DELETE'})
            .then((res) => res.json())
            .then((data) => {
            if(data){
                navigate('/')
            }
            })
            .catch((err) => console.error(err));
    }

    return (
        <LoadingLayout isLoading={!pizza?.id}> 
            <div style={{display: 'flex', alignItems:'center', columnGap: '2rem'}}>
                <img style={{width:'450px', height:'450px'}} src={LogoPizza} alt="luanPizza" />
                <div>
                    <div style={{marginBottom:'1rem'}}>
                        Product name: <span style={{fontSize: '24px'}}>{pizza?.productName}</span>
                    </div>
                    <div style={{marginBottom:'1.5rem'}}>
                        Ingredients: <span style={{fontSize: '24px'}}>{pizza?.description}</span>
                    </div>
                    <div style={{marginBottom:'1.5rem'}}>
                        Price: <span style={{fontSize: '24px'}}>{pizza?.price}</span>
                    </div>
                    <div style={{display:'flex'}}>
                        <ButtonField onClick={()=>setIsModal(true)}>Remove</ButtonField>
                    </div>
                </div>
                <ModalLayout
                width='40%'
                title='Are you sure?'
                isShow={isModal}
                onClose={()=>setIsModal(false)}
                onComfirm={handleDeletePizza}
                />
            </div>
        </LoadingLayout>
    );
}

export default DetailPizzaPage;