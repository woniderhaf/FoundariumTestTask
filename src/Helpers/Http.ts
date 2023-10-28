import axios from "axios";

// для получения данных использую api тестовых данных  - MOKKY.DEV

// тип ответа с бэкенда 
// type GETRESPONSE<T> = {
//   items: [
//     {
//       results: T,
//       success:boolean
//     }
//   ]
// }
type GETRESPONSE<T> = {
  items: T
}

// запрос getCards  для получения данных с сервера
export const getCards = async <T>(url:string):Promise<[T[],Error?]> => {
  try {
    
    const request = await axios.get<GETRESPONSE<T[]>>(url)
    const {data,status} = request
    // вытаскиваем карточки 
    // const tasks = data.items[0].results
    const tasks = data.items
    // возвращаем массив: 0 - карточки, 1 - возможная ошибка 
    return [tasks]

  } catch (error) {

    // возвращаем массив: 0 - карточки(пустой массив), 1 - возникшая  ошибка 
    return [[] as T[],error as Error]

  }
 
}