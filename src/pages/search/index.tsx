import React, {useState, useEffect} from 'react'
import { SearchService } from '@/services'

const Search = (props: any) => {
    const [result, setResult] = useState('')
    useEffect(() => {
        const { pathname, search } = props.location
        SearchService(`${pathname}${search}`)
            .then(res => res.text())
            .then(html => {
                setResult(html)
            })
    }, [])
    return <div id="search-container" dangerouslySetInnerHTML={{__html: result}}></div>
}

export default Search