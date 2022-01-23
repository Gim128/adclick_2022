import React, {useState, useEffect} from "react";
import validation from './../assets/validation/RegisterValidate';


const useForm = (submitForm) => {


const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    conpassword: ""
});

const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);


const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    });
};

const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
};

useEffect(() => {
    if(Object.keys(errors).length == 0 && dataIsCorrect) {
        submitForm(true);
    }
}, [errors]);
    return {handleChange, handleFormSubmit, errors, values}
};

export default useForm;