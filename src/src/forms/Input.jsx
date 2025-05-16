import { validate } from "../services/validationService";

const validTypes = [
    "text",
    "email",
    "password",
    "number",
    "tel",
    "url",
    "search",
    "date",
    "datetime-local",
    "month",
    "week",
    "time",
    "color",
    "checkbox",
    "radio",
    "file",
    "hidden",
    "image",
    "button",
    "submit",
    "reset",
    "range",
];

const input = ({
    name,
    id = null,
    type = "text",
    placeholder = null,
    label = null,
    validations = {}
}) => {
    if(!validTypes.includes(type)) {
        throw new Error(`Invalid input type: ${type}. Valid types are: ${validTypes.join(", ")}`);
    }
    if(type === 'email'){
        type = "text";
        validations.pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
    }
    id = id || `form-input-${name}`;
    label = label || placeholder || name;
    placeholder = placeholder || label;

    const handleValidations = event => {
        const validations = validate(validations, event.target.value)
    }
    return (
        <div>
            <input id={id} 
                type={type} 
                placeholder={placeholder} 
                name={name}
                onKeyDown={handleValidations}
                onChange={handleValidations}
                onBlur={handleValidations}
                onFocus={handleValidations}
            />
        </div>
    );
}
export default input;