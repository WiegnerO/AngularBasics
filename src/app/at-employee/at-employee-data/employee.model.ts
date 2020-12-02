export interface IEmployee {
    id : number
    name : string
    age : number
    wage : number
    location?: {
        adress : string
        city : string
        country : string
    }
    shifts: IShift[]
}

export interface IShift {
    id : number
    length : number
    position : string
}