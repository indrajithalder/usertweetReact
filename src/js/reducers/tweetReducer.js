export default function reducer(state={
    tweets:[],
    fetching:false,
    fetched:false,
    error:null
},action){
    switch(action.type){
        case "FETCH_TWEETS_START":
            state = {...state, fetching:true};
        break;
        case "FETCH_TWEET_FULFILLED":
            state = {...state, fetching:false, fetched:true,tweets:action.payload };        
        break;
        case "FETCH_TWEET_REJECTED":
            state = {...state, fetching:false, fetched:false,error:action.payload };
    }
    return state;

}