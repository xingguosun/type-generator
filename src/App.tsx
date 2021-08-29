import React, { useState } from 'react';
import './App.css';
import Type from './components/Type';
import Code from './components/Code';
import { newProperty } from './common';

function App(): JSX.Element {

  const [customType, setcustomType] = useState<Array<Property>>([{
    id: 'id-0',
    name: '',
    type: 'String'
  }]);
  
  /**
   * 
   * @param id 
   */
  const addProperty: AddProperty = (id?: string) => {
    setcustomType([...customType, newProperty(id ?? customType[0].id)]);
  }
  const deleteProperty: DeleteProperty = (id: string) => {
    setcustomType(customType.filter((property) => property.id !== id));
  }
  const changeProperty: ChangeProperty = (selected: Property) => {
    let isChangeClass = false;
    let updatedClass = customType.map((property) => {
      if (property.id === selected.id) {
        if (property.type !== selected.type) isChangeClass = true;
        return { ...property, name: selected.name, class: selected.type };
      } else {
        return property;
      }
    });
    if (isChangeClass) {
      updatedClass = updatedClass.filter((property) => property.parent !== selected.id);
    }

    if (isChangeClass && selected.type === 'Array') {
      updatedClass.push(newProperty(selected.id));
    }
    setcustomType(updatedClass);
  };


  return (
    <div className="App flex justify-center">
      <div className="half-block">
        <Type customType={customType} addProperty={addProperty} changeProperty={changeProperty} deleteProperty={deleteProperty} />
      </div>

      <div className="half-block ml-6">
        <Code customType={customType} />
      </div>
    </div>
  );
}

export default App;
