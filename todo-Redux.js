const redux = require("redux");

// Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";

// ACTION CREATORS

const addToDo = (text) =>({text: text, type: ADD_TODO})
const toggleToDo =(index) => ({index: index, type: TOGGLE_TODO})

// Initial State
const initialState={
    todo:[]
}

//Reducers
function todoReducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todo:[
                    ...state.todo,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todo: state.todo.map((todo, i)=>{
                    if(i==action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default: return state;
    }
}

//creating Store
const store = redux.createStore(todoReducer);

//dispatch action.
store.dispatch(addToDo("study at 8"));
store.dispatch(addToDo("office at 9"));
store.dispatch(toggleToDo(0));

//Read data from store
console.log("Output",store.getState())