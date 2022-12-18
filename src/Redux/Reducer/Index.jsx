const initialState ={
    dogs:[],
    dog:[],
    temperaments:[],
    allDogs:[],
    detail:[],
    delete:[]
}

export default function rootReducer(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case "GET_DOGS":
            return{
                ...state,
                dogs: action.payload,
                dog:action.payload,
                allDogs: action.payload

            }
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperaments: action.payload
            }
        case "REMOVE_DETAIL":
                return{
                    ...state,
                    detail: action.payload 
                }
        case "GET_DOGS_NAME":
            return{
                ...state,
                dogs: action.payload
            }
        case "Get_by_id":
            console.log(action.payload)
            return{
                ...state,
                detail: action.payload
            }
        case "POST_DOGS":{
                return{
                    ...state
                }
            }
        case "DELET_DOGS":{
            return{
                ...state
            }
        }

        case "DELTE_DOGS":{
            return{
                ...state,
                delete: action.payload
            }
        }
        case "FILTER_BY_TEMPERAMENT":
                const allStateDogs = state.allDogs.filter(dog=>{
                    if(!dog.temperament) return undefined
                    return dog.temperament.includes(action.payload)
                })
                return{
                    ...state,
                    dogs: allStateDogs
                }
        case "FILTER_BY_RAZA":
                const origen = action.payload === "Created" ? state.dog.filter(e=>e.createdInDatabase) : state.dog.filter(e=> !e.createdInDatabase)
                return{
                    ...state,
                    dogs: action.payload === "All" ? state.dog : origen
                }
        case "ORDER_BY_NAME":
            let setorderArr = action.payload === "asc"?state.dogs.sort(function(a,b){
                if(a.name>b.name)return 1;
                if(b.name>a.name)return -1;
                return 0;
            }):
            state.dogs.sort(function (a,b){
                if(a.name>b.name)return -1;
                return 0;
            })
            return {
                ...state,
                dogs: setorderArr
            }
        case "ORDER_WIDTH":
            const allDog = state.allDogs;
            const weightfilter = action.payload === "asc"?
            allDog.sort((a,b)=>{
                const pesoa = Number(a.weight.split("-")[0])
                const pesob = Number( b.weight.split("-")[0])
                if(pesoa < pesob) return -1;
                if(pesoa > pesob) return 1
                return 0
            })
            :
            allDog.sort((a,b)=>{
                const pesoa = a.weight.split("-")
                const pesob = b.weight.split("-")
                if(pesoa.length < 2 && pesob.length < 2){
                    if(Number(pesob) < Number(pesoa)) return -1;
                    if(Number(pesob) > Number(pesoa)) return -1;
                }
                if(pesoa.length < 2){
                    if(Number(pesob[1]) < Number(pesoa)) return -1;
                    if(Number(pesob[1]) > Number(pesoa)) return 1;
                }
                if(pesob.length > 2){
                    if(Number(pesob) < Number(pesoa[1])) return -1;
                    if(Number(pesob) > Number(pesoa[1])) return 1;
                }
            })
            return {
                ...state,
                dogs: weightfilter
            }
           
            default:
                return state;
    }
}