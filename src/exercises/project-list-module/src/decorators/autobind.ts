namespace App {
    // auto bind decorator
    export function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        const adjustedDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                return originalMethod.bind(this);
            }
        }
        return adjustedDescriptor;
    }
}