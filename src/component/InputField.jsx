import { FormGroup, TextField } from '@mui/material';
import React from 'react';

function InputField(props) {
    const { field, form, type, label, disabled, className } = props;
    const { name, value, onChange, onBlur } = field;
    return (
        <FormGroup className="boxField">
            <TextField
                label={label}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                type={type}
                disabled={disabled}
                value={value}
                className={className}
                helperText={form.touched[name] && form.errors[name] && `${form.errors[name]}`}
            />
            {/* {touched.password && errors.password && <p className="errorMessage">{errors.password}</p>} */}
        </FormGroup>
    );
}

export default InputField;
