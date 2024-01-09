import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type Props = {
    label: string;
    value: string | boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    checked?: boolean | undefined;
    onClick?: any;
}

const CheckboxCustom = ({ label, value, name, onChange, checked, onClick }: Props) => {
    return (
        <div className='w-max h-max'>
            <FormControlLabel
                control={
                    <Checkbox
                        onChange={onChange}
                        onClick={onClick}
                        name={name}
                        checked={checked}
                        sx={{
                            color: '#4a51b0',
                            '&.Mui-checked': {
                                color: "#4a51b0",
                            },
                        }}
                    />
                }
                label={label}
                value={value}
                className='text-gray-500'
                sx={{
                    '& .MuiTypography-root': {
                        transform: 'translate(0, 1px)', // adjust this value as needed
                    },
                }}
            />
        </div>
    )
}

export default CheckboxCustom