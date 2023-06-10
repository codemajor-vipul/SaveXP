const ValidateForm = (formValues) =>{
    const errors = { name:'',type:'',amount:'',date:''};
        if(formValues.name === '')
        {
            errors.name = 'Please Enter the name';
        }
        if(formValues.amount === 0 || formValues.amount < 0)
        {
            errors.amount = 'Please Enter the Amount';
        }
        if(formValues.type === '' || formValues.type === 'empty')
        {
            errors.type = 'Please select the type of expenditure';
        }
        if(formValues.date === '')
        {
            errors.date= 'Please select the date';
        }
        return errors;
}

export default ValidateForm;