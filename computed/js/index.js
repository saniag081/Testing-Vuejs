const vm = new Vue({

    el: '#app',
    
    data: {
        titulo: 'Hola Mundo con vue',
        contador: 0
    },
    computed:{
        invertido(){

            return this.titulo.split('').reverse().join('');
        },

        color(){

            return {
                'blue' : this.contador <= 10,
                'yellow' : this.contador > 10 && this.contador < 20,
                'deep-orange' : this.contador >= 20  
            }
        }
    }
})