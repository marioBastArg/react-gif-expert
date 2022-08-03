export const getGifts = async( category ) => {
         
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BghW9rOWxvTSsS2jQFwD10qKLOmwP3Rb&q=${category}&limit=6`

    const response  = await fetch( url )
    const { data } = await response.json()

    if (data.length<1) {
        return []
    }


    const imgs = data.map( (img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return imgs
}
