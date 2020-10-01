export interface CurrencyResponse {
    Cur_ID: number,
    Date: Date,
    Cur_Abbreviation: string,
    Cur_Scale: number,
    Cur_Name: string,
    Cur_OfficialRate: number,
}

export interface Currency {
    id: number,
    date: Date,
    abbr: string,
    scale: number,
    name: string,
    rate: number
}