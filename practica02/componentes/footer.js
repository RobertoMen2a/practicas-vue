Vue.component(
    'footer-vue',
    {
        template:
            `
            <footer v-bind:style='menu.footerColor'>
            </footer>
        `,
        props:["menu"]
    }
);