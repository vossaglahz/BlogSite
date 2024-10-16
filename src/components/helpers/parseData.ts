import { IGetData, TData } from "../../interfaces/data";

export const parseData = (data: IGetData<{[key: string]: any}>): TData[] => {
    return Object.keys(data).map(id => {
        return {
            id: id,
            title: data[id].title,
            discription: data[id].discription,
            time: data[id].time
        }
    })
};