import { favouriteItems } from "../initialValues/favouriteItems"
import { ADD_TO_FAVOURİTE, REMOVE_FROM_FAVOURİTE} from "../actions/favouriteActions"
const initialState = {
    favouriteItems: favouriteItems,
    
};

export default function favouriteReducer(state=initialState, {type,payload}){

    switch (type) {
        case ADD_TO_FAVOURİTE:
            
                return{
                ...state,
                favouriteItems:[...state.favouriteItems, { quantity:1, jobPosting: payload}]
                };
            
                case REMOVE_FROM_FAVOURİTE:
                    return {
                        ...state,
                        favouriteItems: state.favouriteItems.filter((c) => c.product.id !== payload.id),
                      };
                    default:
                      return state;
                  }
    }
