import Request from '@/plugins/Request'

export const search = async () => {
    return await Request.get('/api/search?o=asc&q=graphq&s=downloads&type=RegistryPackages&_pjax=%23js-pjax-container')
}