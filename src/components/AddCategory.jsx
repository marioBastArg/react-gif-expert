import { useState } from "react"

export const AddCategory = ( { onCategorySubmit }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length <= 1) return
        onCategorySubmit(inputValue)
        setInputValue('')

    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
