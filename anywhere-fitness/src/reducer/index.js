// import {
//     IS_LOADING,
//     DATA_LOADING_SUCCESS,
//     DATA_LOADING_FAILURE,

// } from "../actions/index";

// const initialState ={
//     api_data:[{is_fetching:false,
//     id:Date.now,
//     type:"",
//     duration:"",
//     intensity:"",
//     location:"",
//     date:"",
//     time:"",
// }]
// }

// const reducer = (state= initialState, action) =>{
//     switch(action.type){
//         case IS_LOADING:
//             return{
//                 ...state,
//                 is_fetching:true

//             }

//         case DATA_LOADING_SUCCESS:{
//            return{
//                ...state,
//                is_fetching:false,
//                api_data:action.payload, 
//            }
//         }
//         case DATA_LOADING_FAILURE:{
//             return{
//                 ...state,
//                 is_fetching:false,
//                 error:action.payload

//             }
//         }
//         default:
//             return state;
//     }
// }

// export default reducer;
