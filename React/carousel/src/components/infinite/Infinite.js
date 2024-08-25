import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { data } from '../../Data';

const Infinite = () => {

    const [page, setPage] = useState(1);
    const [card, setCard] = useState([]);
    const [totalResult, setTotalResult] = useState(90);
    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const data = await res.json();
        console.log(data);
        setCard(data);
    }

    useEffect(() => {
        getData();
    }, [page])

    const FetchMoreData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page+1}`);
        const Parsedata = await res.json();
        console.log(data);
        setCard(data.concat(Parsedata));
        setPage(prev => prev + 1);
    }

    return (
        <>
            <InfiniteScroll
                dataLength={totalResult}
                next={FetchMoreData}
                hasMore={card.length !== totalResult}
                style={{display:"flex",flexDirection:"column",gap: "5rem"}}
            >
                {
                    card?.map((ele) => {
                        return <div >
                            {ele.title}
                        </div>
                    })
                }
            </InfiniteScroll>
        </>
    )
}


export default Infinite
