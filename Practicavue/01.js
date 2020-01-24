//Esto llama a toda la libreria de vue que esta en el documento html en la parte de script
//si en el navegador en consola ponemos app.titulo= 'Otro texto' y se da enter modifica en automatico el html
const app= new Vue({
    el: '#app', //Le estamos diciendo que en el div de app sera gestionado con Vue
    data:{
        titulo: 'Hola Mundo con Vue',
        //frutas: ['Manzana, Pera, Sandia']
        frutas: [
            {nombre:'Manzana', cantidad:10},
            {nombre:'Pera', cantidad:50},
            {nombre:'Platano', cantidad:0}
        ],
        NuevaFruta:'',
        total:0
    },// fin del data ahora se comienza el metodo
    //methods: palabra reservada que declara un metodo
    methods:{
        //Metodo que agrega la fruta que se obtiene desde el cuadro de texto
        AgregarFruta ()
        {
            //console.log('Diste Click'); //esto es solo una pruba para saber que iba funcionando

            this.frutas.push({
            //this nos sirve para no tener problemas a la hora de meter un dato aun arreglo con 2 objetos
            //el comando push empuja en este caso el dato que se extrae en nueva fruta lo va a empujar hacia frutas
            //es decir lo va a agregar
                
                nombre: this.NuevaFruta, cantidad:0
            })//fin del push de frutas
            this.NuevaFruta='';// lo que hace esto es que limpia el cuadro de texto


        },
        //ALGO IMPORTANTE ES QUE PARA HACER CADA UNA DE ESTAS COSAS ES QUE DEBEN DE ESTAR SEPARADOS POR COMA
        //YA SEA METODOS DATOS O PROCESOS SIEMPRE SE SEPARAN CON COMAS
        /*
            ///////////////////////////////////////////////////////////////////
            https://vuejs.org/v2/guide/events.html#System-Modifier-Keys
            ///////////////////////////////////////////////////////////////////
            Este link te lleva a una propiedad en vue llamada keyup, que basicamente sirve para trabajar con
            los eventos del treclado
        */
        OtroMetodo ()
        {
            //Este es un ejemplo de que se pueden agregar los metodos o funciones que se requieran
        }

    },//fin del metodo
    computed: {
        //Computed támbien funciona como un arreglo
        SumarFrutas()
        {
            this.total=0;
            for (fruta of this.frutas)
            {
                /*for (fruta of this.frutas) esto significa que la variable fruta ira tomando
                el valor que este en el arreglo y se irá autoincrementando con los datos que esten el 
                arreglo*/

                this.total+=fruta.cantidad;      
                /* Aqui significa que lo que tenga total en este caso 0 le va a sumar lo que tiene almacenado
                el proceso computed en la variable fruta
                */      
            }//fin del for

            return this.total; 
            //Retorna el valor de la suma si esto no se pone el total siempre sera 0, porque no retorna nada
        }//fin de la funcion de sumar frutas

    }
    
})