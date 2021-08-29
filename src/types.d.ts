type Type = 'Boolean' | 'String' | 'Number' | 'Array' | 'Object'
type Property = {
    id: string,
    parent?: string,
    name: string,
    type: Type,
    depth?: number
}
type AddProperty = (id?: string) => void;
type ChangeProperty = (selectedProperty: Property) => void;
type DeleteProperty = (id: string) => void;
type OnChange = (e : ChangeEvent<HTMLInputElement>) => void;
type OnClick = () => void;