const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con vue',
        frutas: [
            { nombre: 'fresa', cantidad: 10 },
            { nombre: 'mago', cantidad: 5 },
            { nombre: 'pera', cantidad: 2 },
            { nombre: 'manzana', cantidad: 0 }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFrutas() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
            this.nuevaFruta = '';
        }
    },
    
    computed:{
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})