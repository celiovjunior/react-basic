import React from 'react';

const Select = ({options, value, setValue}) => {
    return <select value="" onChange={({target}) => setValue(target.value)}>
        <option value={value} disabled>Selecione</option>
        {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ))}
    </select>
};

export default Select;