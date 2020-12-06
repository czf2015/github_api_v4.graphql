import Request from '@/plugins/Request'

export const SearchService = async (path: string) => {
    return await Request.get(`/api/v4/${path}`)
}