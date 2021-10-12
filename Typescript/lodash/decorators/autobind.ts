
export function autobind(_:any, _2: string, description: PropertyDescriptor){
    const originalMethod = description.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}