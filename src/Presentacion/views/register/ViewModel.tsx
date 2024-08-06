import { useState } from 'react'
import { ApiDelivery } from '../../../../node-js/data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../Domain/useCases/AuthRepository';

const useRegisterViewModel = () => {

  const [ values, setValues ] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  })

  const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value})
  }

  const register = async () => {
     const { result, error } = await RegisterAuthUseCase(values);
     console.log('result: ' + JSON.stringify(result))
     console.log('error: ' + error) 
  }

  return {
    ...values,
    onChange,
    register
  }
}

export default useRegisterViewModel