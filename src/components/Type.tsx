import React from "react";
import { getSubProperties } from "../common";
import Property from "./Property";

interface CustomTypeProps {
    customType: Array<Property>;
    addProperty: AddProperty;
    changeProperty: ChangeProperty;
    deleteProperty: DeleteProperty;
}

const CustomType: React.FC<CustomTypeProps> = ({ customType, addProperty, changeProperty, deleteProperty } : CustomTypeProps) => {
    return <div>
        {
            getSubProperties(customType).map((property, index) => (
                    <Property key={index} property={property} addProperty={addProperty} deleteProperty={deleteProperty} changeProperty={changeProperty} />
            ))
        }
    </div>
};


export default CustomType;