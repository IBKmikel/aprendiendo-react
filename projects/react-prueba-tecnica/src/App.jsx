import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function App () {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [word, setWord] = useState()

    useEffect(() => {
        if(!fact) return
        const firstWord = fact.split(' ')[0]
        // const threeFirstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response =>{
                const {tags} = response

                setImageUrl(tags[0])
                setWord(firstWord)
            })
    }, [fact])

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}/says/${word}?fontSize=50&fontColor=red`} alt={`Image extracted using the first word for ${fact}`} />}
        </main>
    )
}