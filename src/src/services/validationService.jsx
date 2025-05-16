export const validate = (validations, value) => {
    let errors = [];
    errors = validateRequired(validations, value, errors);
    errors = validatePattern(validations, value, errors);
    errors = validateMin(validations, value, errors);
    errors = validateMax(validations, value, errors);
    errors = validateMinLength(validations, value, errors);
    errors = validateMaxLength(validations, value, errors);
    return errors;
}

export const validateRequired = (validations, value, errors = {}) => {
    const isRequired = typeof validations.required !== typeof undefined && validations.required,
        hasValue = typeof value !== typeof undefined 
        && value !== null && value !== "";
    if(isRequired && !hasValue){
        errors.push("Este campo es requerido");
    }
    return errors;
}
export const validatePattern = (validations, value, errors = {}) => {
    if(typeof validations.pattern === typeof undefined || validations.pattern === null || validations.pattern === ""){
        return errors;
    }
    const regex = new RegExp(validations.pattern);
    if(!regex.test(value)){
        errors.push("El valor no coincide con el formato requerido");
    }
    return errors
}
export const validateMax = (validations, value, errors = {}) => {
    if(typeof validations.max === typeof undefined || validations.max === null || validations.max === ""){
        return errors;
    }
    if(value > validations.max){
        errors.push("El valor no puede ser mayor a " + validations.max);
    }
    return errors
}
export const validateMin = (validations, value, errors = {}) => {
    if(typeof validations.min === typeof undefined || validations.min === null || validations.min === ""){
        return errors;
    }
    if(value < validations.min){
        errors.push("El valor no puede ser menor a " + validations.min);
    }
    return errors
}
export const validateMaxLength = (validations, value, errors = {}) => {
    if(typeof validations.maxlength === typeof undefined || validations.maxlength === null || validations.maxlength === ""){
        return errors;
    }
    if(value.length > validations.maxlength){
        errors.push("El valor no puede tener mas de " + validations.maxlength + " caracteres");
    }
    return errors
}
export const validateMinLength = (validations, value, errors = {}) => {
    if(typeof validations.minlength === typeof undefined || validations.minlength === null || validations.minlength === ""){
        return errors;
    }
    if(value.length < validations.minlength){
        errors.push("El valor no puede tener menos de " + validations.minlength + " caracteres");
    }
    return errors
}