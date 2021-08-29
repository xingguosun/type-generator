export function getSubProperties(list: Array<Property>, property?: Property): Array<Property> {
    const id = property ? property.id : undefined;
    const depth = property?.depth ?? 0;
    
    const subProperties: Array<Property> =  list.filter((prop) => prop.parent === id);
    const newProperties: Array<Property> = [];
    if (subProperties.length > 0) {
        subProperties.forEach((p) => {
            p.depth = depth + 1;
            newProperties.push(p, ...getSubProperties(list, p));
        });
        
    } else {
        return [];
    }
    return newProperties;
}

function getObjectString(properties:Array<Property>, currentProp: Property) : string {
    const subProps = properties.filter((p) => p.parent === currentProp.id);
    let code : string = currentProp.parent ? `${currentProp.name} : { \n` : ' { \n';
    for (let idx = 0; idx < subProps.length; idx++) {
        const sp = subProps[idx];
        code += getIndent(sp.depth ?? 0);
        switch (sp.class) {
            case 'Array':
                code += getArrayString(properties, sp);
                break;
            case 'Object':
                code += getObjectString(properties, sp);
                break;
            default:
                code += `${sp.name} : ${sp.class.toLowerCase()}`;
                break;
        }
        if (idx < subProps.length -1) code += ', \n';
    }
    return code + '\n' + getIndent(currentProp.depth ?? 0) + ' }';
}
function getIndent(depth:number) : string{
    let  indentString = '';
    for (let index = 0; index < depth; index++) {
        indentString += '   ';
    }
    return indentString;
}
function getArrayString(properties:Array<Property>, currentProp: Property) : string {
    const subProp = properties.find((p) => p.parent === currentProp.id);
    const name = currentProp.parent ? `${currentProp.name} :`: '';
    return  `${name} Array<${subProp?.class.toLowerCase() || 'undefined'}>`
}

export function getCodeString(properties:Array<Property>):string {
    const customType = properties[0];
    const codePrefix = `type ${customType.name} = `;
    if (customType.class === 'Array') return codePrefix + getArrayString(properties, customType);
    if (customType.class === 'Object') return codePrefix + getObjectString(properties, customType);
    return codePrefix + customType.class.toLowerCase();
}