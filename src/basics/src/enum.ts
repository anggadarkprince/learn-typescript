export enum CustomerType {
    REGULAR,
    GOLD,
    PLATINUM,
}

export enum CustomerStatus {
    ACTIVE = 'activated',
    SUSPEND = 'suspended',
}

export type Customer = {
    id: string | number;
    name: string;
    type: CustomerType;
    status: CustomerStatus;
};
