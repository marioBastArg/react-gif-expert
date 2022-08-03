import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )
    console.log(images);
    return (
        <>
            <div className='card-grid'>
                <div style={{width: '100%',textAlign: 'center', marginBottom: '1.5rem'}}>
                    <h3>{ category }</h3>
                </div>
                {
                    images.map( (element) => {
                        return (<GifItem key={element.id} {...element}></GifItem>)
                    } )
                }
            </div>
        </>
    )
}

//BghW9rOWxvTSsS2jQFwD10qKLOmwP3Rb