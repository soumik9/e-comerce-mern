
import { selectItemType } from '@/config/types/types';
import React from 'react'
import Select, { StylesConfig } from 'react-select';

type Props = {
    id?: string;
    value?: selectItemType | undefined;
    options?: selectItemType[];
    defaultValue?: selectItemType;
    label?: string;
    placeHolder?: string;
    isSearchable?: boolean;
    onChange: any;
    required?: boolean;
    isLoading?: boolean;
    error?: string | undefined;
}

const SelectCustom = ({ label, options, defaultValue, onChange, value, id, placeHolder, isSearchable, required, isLoading, error }: Props) => {

    const customStyle: StylesConfig<selectItemType, false> = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '44px',
            border: state.menuIsOpen || state.isFocused ? error ? "2px solid #F04438" : "2px solid #393C6A" : error ? "2px solid #F04438" : "2px solid #E5E7EB",
            borderRadius: '8px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:focus': {
                borderColor: error ? "#F04438" : '#666798',
                boxShadow: state.menuIsOpen || state.isFocused ? 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 149, 202, 1)' : 'none',
            },
            '&:hover': {
                borderColor: error ? "#F04438" : '#DCCAFF',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#393C6A' : 'transparent',
            color: state.isSelected ? 'white' : '#6B7280',
            cursor: 'pointer',
            transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                backgroundColor: state.isSelected ? '#666798' : '#e5e7eb',
                color: state.isSelected ? 'white' : '#4B5563'
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "#6B7280",
        }),
        dropdownIndicator: base => ({
            ...base,
            '&:hover': {
                color: "#d7d9f3",
            }
        }),
    };

    return (
        <div className="mt-0.5 scrollbar relative">

            {label ? <label
                htmlFor={id}
                className="text-sm font-semibold px-1 text-gray-600"
            >
                {label} {required ? <span className="text-error">*</span> : null}
            </label> : null}

            <div className="mt-1 ">
                <Select
                    options={options}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    styles={customStyle}
                    isSearchable={isSearchable ? isSearchable : false}
                    placeholder={placeHolder}
                    className='w-full capitalize trans'
                    required={required}
                    isLoading={isLoading}
                />
            </div>

            {error && (
                <span className="text-xs ml-1 text-error-hover absolute -bottom-5 left-0">
                    {error}
                </span>
            )}

        </div>
    )
}

export default SelectCustom

