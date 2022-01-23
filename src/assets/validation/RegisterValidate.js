const RegisterValidate = (values) => {

    let errors={};

    if(!values.fname){
        errors.fname="First Name is Required."
    }
    if(!values.lname){
        errors.lname="Last Name is Required."
    }
    if(!values.email){
        errors.email="email is Required."
    }else if(!/\S+@\S+\. \S+/.test(values.email)){
        errors.email = "Email is invalid"
    }
    if(!values.mobile){
        errors.mobile="mobile Number is Required."
    }
    if(!values.password){
        errors.password="password is Required."
    }else if(values.password.length < 5){
        errors.password = "password must be more than five characters."
    }
    if(!values.conpassword){
        errors.conpassword="please Re-enter password here."
    }else if(values.password.length < 5){
        errors.password = "please Re-enter password here."
    }
    return errors;
};


export default RegisterValidate;
