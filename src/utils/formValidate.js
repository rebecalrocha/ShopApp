const getErrors = form => {
    const errors = {};
    Object.entries(form).forEach(([field, getFieldError]) => {
      if (!getFieldError || getFieldError.length === 0)
        errors[field] = 'Required';
        
    });
    return errors;
  }
  
export { getErrors };