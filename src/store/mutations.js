

export default{
    add(state) {
        state.count++
    },
    less(state){
        state.count--
    },
    addObj(state,obj){
        state.obj = {...state.obj,obj}
    }
}