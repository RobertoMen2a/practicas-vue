Vue.component(
    'productos-card',
    {
        template:
            `
                        <div class='card-body'>
                            <h5 class='card-title'>{{nombre}}</h5>
                            <img v-bind:src='imagen' alt='' width='100%'>
                            <p class='card-text'>{{descripcion}}</p>
                            <div class='producto-relacionado-precio'> Precio: {{precio}} BOB</div>
                            <div>
                                <div>
                                    <div class='color-box clic' v-for='(color, index) of colores' @click=''                                        
                                    v-bind:style='color'></div>                                        
                                </div>
                            </div>
                        </div>                    
        `,
        //props: ['nombre', 'imagen', 'descripcion', 'precio', 'colores'],
        props: {
            nombre: String, imagen: String, descripcion: String, precio: String
            , colores: {
                type: [Array]                
            }
        },
        mounted: function () {
            console.log("Listado  de  colores*********");
            console.log(this.colores);

        }
    }
);