Vue.component(
    'producto-selec',
    {
        template:
            `
            <div class='container'>
            
            <div class='row'>
                <h3>{{nombre}}</h3>
            </div>
            <div class='row'>
                <div class='col-12 col-sm-6 col-md-4 '>
                    <img v-bind:src='imagen' alt='' width='100%'>
                </div>
                <div class='col-12 col-sm-6  col-md-8'>
                    <h6>{{descripcion}}</h6>
                    <div class='p-3 mb-2 text-white' v-bind:style='precioestilos'>
                        Precio: {{precio}} BOB
                    </div>
                    <h5>Color</h5>
                    <div>                        
                        <div class='color-box clic' v-for='color of colores' @click='asignarColor(color, id, nombre)' v-bind:style='color'></div>
                    </div>
                    <h5>Cantidad</h5>
                    <div class='quantity'>
                        <button v-on:click='restarCantidad()'>-</button>
                        <div> {{counter}}</div> <button v-on:click='addCantidad()'>+</button>
                    </div>
                    <div class='buy-box' v-if='counter<=0'>
                        <button class='btn btn-primary' disabled>Comprar</button>
                    </div>
                    <div class='buy-box' v-else>
                        <button class='btn btn-primary' v-on:click='comprar()'>Comprar</button>
                    </div>

                </div>
            </div>

        </div>
        `,
        props: ['id', 'nombre', 'imagen', 'descripcion', 'precio', 'colores', 'precioestilos'],
        data: function () {
            return {
                counter: 0
                ,
                pedido: [
                    {
                        id: null,
                        cantidad: 0,
                        color: null,
                        nombre: null
                    }
                ]
            }
        },
        methods: {
            addCantidad: function () {
                this.counter += 1;
            },
            restarCantidad: function () {
                if (this.counter > 0) {
                    this.counter -= 1;
                }
            },
            comprar: function () {
                this.pedido.cantidad = this.counter;
                alert('Esta seguro de comprar el producto id: ' + this.pedido.id + " - " + this.pedido.nombre + ", una cantidad de " + this.pedido.cantidad);
            }, asignarColor: function (color, id, nombre) {
                this.pedido.id = id;
                this.pedido.color = color;
                this.pedido.nombre = nombre;
            }

        },
    }
);