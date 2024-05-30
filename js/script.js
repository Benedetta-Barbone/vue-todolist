const { createApp } = Vue

createApp({
  data() {
    return {
        toDoList : [
            {
                'text' : 'biscotti', 
                done : true,
            },
            {
                'text' : 'mele', 
                done : true,
            },
            {
                'text' : 'pere', 
                done : true,
            },
            {
                'text' : 'banane', 
                done : true,
            },
            {
                'text' : 'caffè', 
                done : true,
            }
        ]
    }  
  },
  methods :{
      toggleDone(item) {
        item.done = !item.done;        
      },

      removeTodo(taskIndex){
        this.toDoList.splice(taskIndex, 1);
      }
  }  
}).mount('#app')



