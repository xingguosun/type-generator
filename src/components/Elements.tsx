/**
 * Customized elements, such as input, select and button
 */
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
            <input aria-label="input name" className="text-blue-800" type={type} value={value} onChange={onChange} placeholder={placeholder} />
    )
}
export const TailwindSelect: React.FC<SelectProps> = ({ value, onChange, options } : SelectProps) => {
    return (
        <select aria-label="select type" className="text-green-600 cursor-pointer bg-none" value={value} onChange={onChange}>
            {options.map((type, index) => {
                return <option key={index} value={type}>{type}</option>
            })}
        </select>
    )
}
export const AddButton: React.FC<ButtonProps> = ({onClick} : ButtonProps) => {
    return (
        <PlusCircleIcon role="button" aria-label="add property" onClick={onClick} className="btn btn-mini btn-green" />
    )
}

export const DeleteButton: React.FC<ButtonProps> = ({onClick} : ButtonProps) => {
    return (
        <MinusCircleIcon role="button"  aria-label="add property" onClick={onClick} className="btn btn-mini btn-red" />
    )
}