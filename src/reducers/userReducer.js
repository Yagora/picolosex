
export default function(state=null, action){
    switch(action.type){
        case "AUTH_USER":
            return action.payload
            break;
    }
    return state
}
