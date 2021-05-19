import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css'
const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const onSubmit = data => {
        console.log("form submitted", data)
    };
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (

      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
       
        <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Enter your Name" />
        {errors.name && <span className="error">This name is required</span>}

        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Enter your Email" />
        {errors.email && <span className="error">This email is required</span>}

        <input {...register("address", { required: true })} placeholder="Enter your Address" />
        {errors.address && <span className="error">This address is required</span>}
        
        <input {...register("phone", { required: true })} placeholder="Enter your Phone" />
        {errors.phone && <span className="error">This phone is required</span>}
        <input type="submit" />
      </form>
    );
};

export default Shipment;