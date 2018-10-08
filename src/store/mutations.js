import * as Types from './types'

const mutations={
    [Types.ADD_CART](state,book){
        //book是添加一本书，
        let product = state.carList.find(item=>item.goodsId===book.goodsId);
        console.log(product)
        if(product){
            product.bookCount+=1;
            state.carList=[...state.carList]
        }else{
            book.bookCount =1;
            state.carList=[...state.carList,book]
        }
        
    },
    [Types.REDUCE](state,book){
        // find查找元素，找到返回该元素
        let product = state.carList.find(item=>item.goodsId===book.goodsId);
        console.log(product)
        if(product.bookCount>1){
            product.bookCount-=1;
        }
        state.carList=[...state.carList]
        console.log(state.carList)
    },
    [Types.REMOVE](state,index){
        // let product = state.carList.find(item=>item.goodsId===book.goodsId);
        // state.carList.splice(product,1);	
        state.carList.splice(index,1);	
    },
    [Types.CLEAR](state){
        state.carList=[]
    }
 

}
export default mutations