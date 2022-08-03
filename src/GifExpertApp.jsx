import { useState } from 'react'
import { AddCategory, GifGrid  } from './components'

export function GifExpertApp() {

    const [categories, setCategories] = useState(['Rice'])

    const onAddCategory = ( newCategory ) => {
        if(!categories.includes(newCategory))
            setCategories([newCategory, ...categories])
    }

    return (
        <div>
            
            <h1>Gif Expert App</h1>
            
            <AddCategory onCategorySubmit={ (e) => onAddCategory(e) } />
            
            <ul>
                {
                    categories.map( (category) => {
                        return (<GifGrid key={category} category={category}></GifGrid>)
                    })
                }
            </ul>

        </div>
    )
}
