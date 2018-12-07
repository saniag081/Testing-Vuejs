const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Hola Mundo con vue',
        frutas: [
            {nombre: 'fresa', cantidad: 10},
            { nombre: 'mago', cantidad: 5},
            { nombre: 'pera', cantidad: 2},
            { nombre: 'manzana', cantidad: 0}
        ]
    }
})