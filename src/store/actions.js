
export default {
    increment (context) {
        console.log(context);
        context.commit('add')
    },
    actionA ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('add')
            resolve()
          }, 1000)
        })
    }
   
}