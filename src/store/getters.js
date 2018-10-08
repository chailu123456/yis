let getters = {
    count:(state)=>state.carList.reduce((prev,next)=>prev+next.bookCount,0),
    // allmoney:(state)=>state.carList.reduce((prev,next)=>prev+next.bookCount*next.price,0),

    allmoney:(state)=>state.carList.reduce((prev,next)=>prev+next.bookCount*next.price,0)
}
export default getters