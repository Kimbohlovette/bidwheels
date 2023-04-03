export interface ProductType {
    _id: string,
    coverImage: string,
    name: string,
    images: string[],
    description: string,
    minPrice: number,
    bidDuration: number,
    carModel: string,
    fuelType: string,
    engineType: string,
    status: string,
    owner: string,
}