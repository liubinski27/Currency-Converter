export interface ICurrencyResponse {
    Cur_ID: number,
    Date: Date,
    Cur_Abbreviation: string,
    Cur_Scale: number,
    Cur_Name: string,
    Cur_OfficialRate: number,
}

export interface ICurrency {
    id: number,
    date: Date,
    abbreviation: string,
    scale: number,
    name: string,
    rate: number
}