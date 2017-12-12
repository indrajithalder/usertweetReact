export default function reducer(state={
    users:{
        id:null,
        name:null,
        age:null
    },
    fetching:false,
    fetched:false,
    error:null
},action){
    switch(action.type){
        case "FETCH_USERS":
            state = {...state, fetching:true};
        break;
        case "FETCH_USER_FULFILLED":
            state = {...state, fetching:false, fetched:true,users:action.payload };        
        break;
        case "FETCH_USERS_REJECTED":
            state = {...state, fetching:false, fetched:false,error:action.payload };
        break;
    }
    return state;
}