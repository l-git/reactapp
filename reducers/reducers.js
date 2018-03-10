// 
import { combineReducers } from 'redux'
import { ADD_TODO,DEL_TODO,UPD_TODO } from '../actions/actions'

function todo(state, action) {
    
   switch (action.type) {
      case ADD_TODO:
         return {
            id: action.id,
            text: action.text,
         }
      default:
         return state
   }
}
function todos(state = [], action) {

   switch (action.type) {
      case ADD_TODO:
         return [
            ...state,
            //todo(undefined, action)
            todo(null,action)
         ]
        case DEL_TODO:

         var id=action.id;
         var s=[];

         for(let i=0;i<state.length;i++){
            
            let obj=Object.assign({},state[i]);
            
            if(obj.id!=id){
                s.push(obj);
             }
         }

         return s;


         //return state.slice(0,state.length-1);


         case UPD_TODO:

            console.log(state);
            var num=action.num;
            var text=action.text;

            var s=[];

            for(let i=0;i<state.length;i++){
                
                var newObj=Object.assign({},state[i]);
                if(newObj.id==num){
                    newObj.text=text;
                }
                s.push(newObj);
            }

            return s;


         

      default:
         return state
   }
}
const todoApp = combineReducers({
   todos
})
export default todoApp