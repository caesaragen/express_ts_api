export interface CRUD {
    list: (limit: number, page: number) => any,
    create: (resource: any) => any,
    updateById: (resource: any) => any,
    readById: (resourceId: string) => any,
    deleteById: (resourceId: string) => any,
    patchById: (resource: any) => any
}