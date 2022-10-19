Vue.component(
    'menu-vue',
    {
        template:
            `
        <nav class='navbar navbar-expand-lg' v-bind:style='menu.menuColor'>
        <div class='container-fluid'>
            <a class='navbar-brand' href='#'>{{menu.marca}}</a>
            <button class='navbar-toggler' type='button' data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'></span>
            </button>
         

        </div>
    </nav>
        `,
        props:["menu"]
    }
);