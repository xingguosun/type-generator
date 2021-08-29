import React, { useState } from 'react';
import './App.css';
import Type from './components/Type';
import Code from './components/Code';
import { modifyProperty, newProperty } from './common';

/**
 * Create a customized type and insert/delete/modify different types of properties.
 * An object property can consist of multiple sub-properties.
 * 
 * @returns the layout contains type management and code display
 */
function App(): JSX.Element {

  /**
   * Define the custom type with initialized varibles and store it in the state.
   */
  const initType : Property= { id: 'id-0', name: '', type: 'String' };
  const [customType, setcustomType] = useState<Array<Property>>([initType]);

  /**
   * Add a property into another property and update the state.
   * @param parentId the id of the property to be inserted.
   */
  const addProperty: AddProperty = (parentId?: string) => {
    setcustomType([...customType, newProperty(parentId ?? initType.id)]);
  }
  /**
   * Delete a property and update the state
   * @param id the id of the property to be deleted
   */
  const deleteProperty: DeleteProperty = (id: string) => {
    setcustomType(customType.filter(property => property.id !== id));
  }
  /**
   * Modify a property and udpate the state
   * @param selected the selected property needs to be changed
   */
  const changeProperty: ChangeProperty = (selected: Property) => {
    setcustomType(modifyProperty(customType, selected));
  };

  /**
   * return a layout with type management and code display
   */
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
