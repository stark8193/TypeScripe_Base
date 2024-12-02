import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonField from '../components/ButtonField';
import TextField from '../components/TextField';
import LoadingLayout from '../layouts/LoadingLayout';
import { Pizza, PizzaField } from '../models/Pizza.model';

function CreatePizzaPage() {

    const [pizza, setPizza]= useState<Pizza>()
    const navigate = useNavigate();

    const handleInputPizza = (key:string, value:string)=>{
        setPizza({
            ...pizza,
            [key]: value
        })
    }

    const handleCreatePizza = ()=>{
        fetch(`http://localhost:4000/products`, {method: 'POST', body: JSON.stringify(pizza), headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }})
            .then((res) => res.json())
            .then((data) => {
            if(data){
                navigate('/')
            }
            })
            .catch((err) => console.error(err));
    }

    return (
        <LoadingLayout isLoading={false}>
            <div className='wrapper-create'>
                <div style={{width: '50%'}}>
                    <h1 className="form-title">Create Pizza</h1>
                    <div className='form-control'>
                        <label className="form-label">Product name:</label>
                        <TextField placeholder='Input product name' onChange={(e)=>handleInputPizza(PizzaField.productName, e)}/>
                    </div>
                    <div className='form-control'>
                        <label className="form-label">Description:</label>
                        <TextField placeholder='Input description' onChange={(e)=>handleInputPizza(PizzaField.description, e)}/>
                    </div>
                    <div className='form-control'>
                        <label className="form-label">Price:</label>
                        <TextField placeholder='Input price' onChange={(e)=>handleInputPizza(PizzaField.price, e)}/>
                    </div>
                    <div className='form-control' style={{display:'flex', justifyContent:'center'}}>
                        <ButtonField onClick={handleCreatePizza}>Create</ButtonField>
                    </div>
                </div>
            </div>
        </LoadingLayout>
    );
}

export default CreatePizzaPage;
