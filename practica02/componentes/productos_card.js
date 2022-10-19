Vue.component(
    'productos-card',
    {
        template:
            `
            <div class='container '>

            <div class='row'>
                <h4>Productos relacionados</h4>
            </div>
            <div class='row'>
                <div class='col' v-for='prod of productos'>

                    <div class='card' style='width: 18rem;' @click='getProductoById(prod.id)'>
                        <div class='card-body'>
                            <h5 class='card-title'>{{prod.nombre}}</h5>
                            <img v-bind:src='prod.imagen' alt='' width='100%'>
                            <p class='card-text'>{{prod.descripcion}}</p>
                            <div class='producto-relacionado-precio'> Precio: {{prod.precio}} BOB</div>
                            <div>
                                <div>
                                    <div class='color-box clic' v-for='color of prod.colores' @click=''                                        
                                        v-bind:style='color'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        `,
        props:["productos"],
        mounted: function(){
            console.log("Listado  *********");            
        }
    }
);