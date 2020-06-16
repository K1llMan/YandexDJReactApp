/**
 * Основная функция получения данных запроса
 * @param path Url запроса
 * @param method Метод
 * @param data Данные
 */
let getData = (path: string, method: string, data?: any) => {
    let requestParams = {
        method: method,
        credentials: 'same-origin',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: null
    };

    if (data != null)
        requestParams.body = JSON.stringify(data);

    return fetch(path, requestParams)
        .then((resp: Response) => {
            if (resp.status == 204)
                return;

            if (resp.status == 500)
                throw resp;

            return resp.json();
        })
        .then((resp: any) => resp)
        .catch((resp: any) => {
            return {
                isError: true,
                response: resp
            }
        })
};

/**
 * Возвращает promise GET-запроса
 * @param url Url запроса
 */
export function get(url: string) {
    return getData(url, 'GET', null);
}

/**
 * Возвращает promise POST-запроса
 * @param url Url запроса
 * @param data Тело запроса
 */
export function post(url: string, data?: any) {
    return getData(url, 'POST', data);
}

/**
 * Возвращает promise DELETE-запроса
 * @param url Url запроса
 */
export function del(url: string) {
    return getData(url, 'DELETE', null);
}

/**
 * Функция формирования пути по частям
 * @param args Список частей пути
 */
export function makePath(...args: any[]) {
    return [document.location.origin, ...args].join('/');
}