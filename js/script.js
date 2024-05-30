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
  
}).mount('#app')



