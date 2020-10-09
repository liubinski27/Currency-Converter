export interface ICurrencyResponse {
    Cur_ID: number,
    Date: Date,
    Cur_Abbreviation: string,
    Cur_Scale: number,
    Cur_Name: string,
    Cur_Name_Eng: string,
    Cur_OfficialRate: number,
}

export interface ICurrency {
    id: number,
    date: Date,
    abbr: string,
    scale: number,
    name_ru: string,
    name_en: string,
    rate: number
}