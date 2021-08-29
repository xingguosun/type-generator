import React, { ChangeEvent } from "react";
import { AddButton, DeleteButton, TailwindInput, TailwindSelect } from "./Elements";

interface PropertyProps {
    property: Property;
    addProperty: AddProperty;
    changeProperty: ChangeProperty;
    deleteProperty: DeleteProperty;
}
const ClassTypeOptions = ['String', 'Number', 'Array', 'Object'];

const Property: React.FC<PropertyProps> = ({ property, addProperty, changeProperty, deleteProperty } : PropertyProps) => {

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeProperty({ ...property, name: e.target.value });
    }
    const handleClassTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        changeProperty({ ...property, type: e.target.value as Type });
    }

    return (
        <div style={{ paddingLeft: `${property.depth ? property.depth * 50 : 0} px` }}>
            <div className='type-item'>
                <TailwindInput type='text' value={property.name} onChange={handleNameChange} placeholder='name...' /> :
                <TailwindSelect value={property.type} onChange={handleClassTypeChange} options={ClassTypeOptions} />

                { property.type === 'Object' ? <AddButton onClick = { () => addProperty(property.id)} /> : ''}
                { property.parent !== undefined ? <DeleteButton onClick = { () => deleteProperty(property.id)} /> : '' }
            </div>
        </div>
    )
};

export default Property;