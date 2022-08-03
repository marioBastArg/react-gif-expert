
import { useState,useEffect } from 'react'
import { getGifts } from '../helpers/getGifts'

export const useFetchGifs = ( category ) => {
  
    const [gifs,setGifs] =  useState([])

    const getImages = async() => {
        const newImages  = await getGifts( category )
        setGifs(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])

    return{
        images: gifs,
        isLoading: false
    }

}
