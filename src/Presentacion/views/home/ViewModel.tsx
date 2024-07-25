import React, { useState } from 'react';

export const useHomeViewModel = () => {

  const [values, setValues ] = useState({
    email:'',
    password:''
  })

  const onChange = (property: string, value: any) => {
    setValues({...values, [property]: value})
  }

  return {
    ...values,
    onChange
  }
}