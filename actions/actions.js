// 
export const ADD_TODO = 'ADD_TODO';

export const DEL_TODO='DEL_TODO';

export const UPD_TODO='UPD_TODO';

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}


export function delTodo(id){
    return {
        type:DEL_TODO,
        id:id,
    }
}


export function updTodo(num,text){

    return {
        type:UPD_TODO,
        id:nextTodoId++,
        num,
        text
    }


}




