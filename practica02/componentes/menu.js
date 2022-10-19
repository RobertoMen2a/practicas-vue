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
            <div class='collapse navbar-collapse' id="navbarSupportedContent">
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                <li class='nav-item' v-for='item of menu.menus'>
                    <a class='nav-link' aria-current='page' href='#' v-for='(value,key) of item'>{{value}}</a>
                </li>
            </ul>
        </div>

        </div>
    </nav>
        `,
        props:["menu"]
    }
);