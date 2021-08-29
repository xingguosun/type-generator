import React from "react";
import { getSubProperties } from "../common";
import Property from "./Property";

interface CustomClassProps {
    customClass: Array<Property>;
    addProperty: AddProperty;
    changeProperty: ChangeProperty;
    deleteProperty: DeleteProperty;
}

const CustomClass: React.FC<CustomClassProps> = ({ customClass, addProperty, changeProperty, deleteProperty } : CustomClassProps) => {
    return <div>
        {
            getSubProperties(customClass).map((property, index) => (
                    <Property key={index} property={property} addProperty={addProperty} deleteProperty={deleteProperty} changeProperty={changeProperty} />
            ))
        }
    </div>
};


export default CustomClass;