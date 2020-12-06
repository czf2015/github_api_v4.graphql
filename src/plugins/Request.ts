// docs: https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch



interface DataType {
    [propName: string]: any
}

interface OptionsType extends DataType {
    headers?: string;
    mode?: string;
    cache?: string; 
    credentials?: string;
    redirect?: string;
    integrity?: string;
    [propName: string]: any;
}

const params = (data?: DataType, options?: OptionsType): any => {
    const requestBody = data && { body: JSON.stringify(data) }
    return { ...requestBody, ...options }
}

// 请求
class Request {
    static get(url: string, data?: DataType, options?: OptionsType) {
        return fetch(url, {
            method: 'get',
            // headers: '',
            // mode: '',
            // cache: '',
            // credentials: '',
            // redirect: '',
            // integrity: '',
            ...params(data, options)
        })
    }

    static post(url: string, data: DataType, options?: OptionsType) {
        return fetch(url, {
            method: 'post',
            // headers: '',
            // mode: '',
            ...params(data, options)
        })
    }

    static put(url: string, data: DataType, options?: OptionsType) {
        return fetch(url, {
            method: 'put',
            // headers: '',
            // mode: '',
            ...params(data, options)
        })
    }

    static patch(url: string, data: DataType, options?: OptionsType) {
        return fetch(url, {
            method: 'patch',
            // headers: '',
            // mode: '',
            ...params(data, options)
        })
    }

    static delete(url: string, data: DataType, options?: OptionsType) {
        return fetch(url, {
            method: 'delete',
            // headers: '',
            // mode: '',
            ...params(data, options)
        })
    }
}

export default Request