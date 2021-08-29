import React, { ChangeEvent } from "react";
import { AddButton, DeleteButton, TailwindInput, TailwindSelect } from "./Elements";

interface PropertyProps {
    property: Property;
    addProperty: AddProperty;
    changeProperty: ChangeProperty;
    deleteProperty: DeleteProperty;
}
const TypeOptions = ['Boolean', 'String', 'Number', 'Array', 'Object'];

const Property: React.FC<PropertyProps> = ({ property, addProperty, changeProperty, deleteProperty } : PropertyProps) => {

    /**
     * Handle the name change event
     * @param e change event
     */
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeProperty({ ...property, name: e.target.value });
    }
    /**
     * Handle the type change event
     * @param e change event
     */
    const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeProperty({ ...property, type: e.target.value as Type });
    }

    return (
        <div style={{ paddingLeft: (property.depth ? property.depth * 50 : 0).toString() +'px' }}>
            <div className='type-item'>
                <TailwindInput type='text' value={property.name} onChange={handleNameChange} placeholder='name...' /> :
                <TailwindSelect value={property.type} onChange={handleTypeChange} options={TypeOptions} />

                { property.type === 'Object' ? <AddButton onClick = { () => addProperty(property.id)} /> : ''}
                { property.parent !== undefined ? <DeleteButton onClick = { () => deleteProperty(property.id)} /> : '' }
            </div>
        </div>
    )
};

export default Property;