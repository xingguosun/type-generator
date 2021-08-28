import React from "react";
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/solid'

interface InputProps {
    type: string;
    value: string;
    placeholder?: string;
    onChange: OnChange;
}
interface SelectProps {
    value: string;
    options: Array<string>;
    onChange: OnChange;
}
interface ButtonProps {
    value?: string;
    onClick: OnClick;
}

export const TailwindInput: React.FC<InputProps> = ({ type, value, onChange, placeholder = '' } : InputProps) => {
    return (
            <input className="text-blue-800" type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}
export const TailwindSelect: React.FC<SelectProps> = ({ value, onChange, options } : SelectProps) => {
    return (
        <select className="text-green-600 cursor-pointer bg-none" value={value} onChange={onChange}>
            {options.map((type, index) => {
                return <option key={index} value={type}>{type}</option>
            })}
        </select>
    )
}
export const AddButton: React.FC<ButtonProps> = ({onClick} : ButtonProps) => {
    return (
        <PlusCircleIcon onClick={onClick} className="btn btn-mini btn-green" />
    )
}

export const DeleteButton: React.FC<ButtonProps> = ({onClick} : ButtonProps) => {
    return (
        <MinusCircleIcon onClick={onClick} className="btn btn-mini btn-red" />
    )
}