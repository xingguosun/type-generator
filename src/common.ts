/**
 * Create a new property with id, name, parent and type (string as default).
 * @param parentId the id of the item to insert into.
 * @returns a new property
 */
export function newProperty(parentId: string): Property {
    return { id: `id ${Math.floor(Math.random() * 1000)}`, name: '', parent: parentId, type: 'String' };
}
/**
 * Modify a property in the custom type/property list
 * @param list the list of all the properties in the custom type
 * @param property the property to be modified
 * @returns the updated type/property list
 */
export function modifyProperty(list: Array<Property>, property:Property) : Array<Property> {
    let isTypeChanged = false;
    //update the list with the modified property and mark `isTypeChanged = true` if the type of this property is changed
    let updatedClass = list.map((prop) => {
        if (prop.id !== property.id) return prop;
        if (prop.type !== property.type) isTypeChanged = true;
        return { ...prop, name: property.name, type: property.type };
    });
    if (!isTypeChanged) return updatedClass;

    //filter out the sub-properties if the type of target property is changed.
    updatedClass = updatedClass.filter(prop => prop.parent !== property.id);
    if (property.type !== 'Array') return updatedClass;
    //Add a sub-property if the type of target property is changed to `Array`
    updatedClass.push(newProperty(property.id));
    return updatedClass;
}
/**
 * Sort the list according the relative relationship.
 * For example, the list will be 
 * `[
 *      {id: 'id-0000', name: 'user', type: 'Object', depth: 0},
 *      {id: 'id-0001', name: 'name', type: 'String', depth: 1, parent: 'id-0000'},
 *      {id: 'id-0002', name: 'age', type: 'Number', depth: 1, parent: 'id-0000'}
 * ]` for an object `user : { name : string , age : number }`
 * @param list the list of all the properties in the custom type
 * @param property the target property
 * @returns Sorted property list with depth
 */
export function getSubProperties(list: Array<Property>, property?: Property): Array<Property> {
    const id = property ? property.id : undefined;
    const depth = property?.depth ?? 0; //the distance from root node

    const subProperties: Array<Property> = list.filter(prop => prop.parent === id);
    const newProperties: Array<Property> = [];
    if (subProperties.length < 1) return [];
    subProperties.forEach(p => {
        p.depth = depth + 1;
        newProperties.push(p, ...getSubProperties(list, p));
    });
    return newProperties;
}
/**
 * Generate the code string with indent and line breaks for an object
 * @param list the list of all the properties in the custom type
 * @param currentProp the target object property
 * @param prefix the prefix to be added to the code string
 * @param suffix the suffix to be added to the code string
 * @returns generated code string
 */
function getObjectString(list: Array<Property>, currentProp: Property, prefix?: string, suffix?: string): string {
    let code = currentProp.parent ? `${currentProp.name} : { \n` : ' { \n'; //do not display the name of property when it is the root type
    const subProps = list.filter(p => p.parent === currentProp.id);//get sub-properties
    //generate code string according to the type
    for (let idx = 0; idx < subProps.length; idx++) {
        const sp = subProps[idx];
        code += getIndent(sp.depth ?? 0);
        const subSuffix =  idx < subProps.length - 1 ? ', \n' : '';
        if (sp.type === 'Array') {
            code += getArrayString(list, sp, '', subSuffix);
            continue;
        }
        if (sp.type === 'Object') {
            code += getObjectString(list, sp, '', subSuffix);
            continue;
        } 
        code += `${sp.name} : ${sp.type.toLowerCase()} ${subSuffix}`;
    }
    return `${prefix??''}${code} \n ${getIndent(currentProp.depth ?? 0)} }${suffix??''}`;
}
/**
 * Generate indent string
 * @param depth the number of tab chars to be generated
 * @returns generated indent string
 */
function getIndent(depth: number): string {
    let indentString = '';
    for (let index = 0; index < depth; index++) {
        indentString += '   '; //tab
    }
    return indentString;
}
/**
 * Generate the code string with `prefix` and `suffix` for an Array
 * @param list the list of all the properties in the custom type
 * @param currentProp the target object property
 * @param prefix the prefix to be added to the code string
 * @param suffix the suffix to be added to the code string
 * @returns generated code string
 */
function getArrayString(list: Array<Property>, currentProp: Property, prefix?: string, suffix?: string): string {
    const subProp = list.find(p => p.parent === currentProp.id);
    const name = currentProp.parent ? `${currentProp.name} :` : '';
    return `${prefix ?? ''}${name} Array<${subProp?.type.toLowerCase() || 'undefined'}> ${suffix ?? ''}`
}
/**
 * Generate the code string
 * @param list the list of all the properties in the custom type
 * @returns generated code string
 */
export function getCodeString(list: Array<Property>): string {
    const customType = list[0];
    const codePrefix = `type ${customType.name} = `;
    if (customType.type === 'Array') return getArrayString(list, customType, codePrefix);
    if (customType.type === 'Object') return getObjectString(list, customType, codePrefix);
    return codePrefix + customType.type.toLowerCase();
}