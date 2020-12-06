import React, {useState, useEffect} from 'react'
import { search } from '@/services'

// const xmlToDOM = (xml: string) => (new window.DOMParser()).parseFromString(xml, "text/xml")

const Search = (props: any) => {
    const [state, setState] = useState('')
    useEffect(() => {
        search().then(res => res.text())
        // .then(xmlToDOM)
        // .then(dom => {
        //     document.querySelector('#search-container').innerHTML = dom
        // })
        .then(xml => {
            setState(xml)
        })
    }, [])
    return <div id="search-container" dangerouslySetInnerHTML={{__html: state}}></div>
}

export default Search