import * as Types from './types'

const mutations={
    [Types.ADD_CART](state,book){
      
        //book是添加一本书，
        let product = state.carList.find(item=>item.goodsId===book.goodsId);
        if(product){
            product.bookCount+=1;
            state.carList=[...state.carList]
        }else{
            book.bookCount =1;
            state.carList=[...state.carList,book]
         
        }


    }
}
export default mutations