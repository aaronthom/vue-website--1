app.component('nav-bar', {
    template:
        /*html*/
        `<header>
        <nav class="navbar">
          <a class="logo" href="#">Coffee<span>.</span></a>
          <ul class="menu-links">
            <span id="close-menu-btn" class="material-symbols-outlined">close</span>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
          <span id="hamburger-btn" class="material-symbols-outlined">menu</span>
        </nav>
      </header>
      <script>
        const header = document.querySelector("header");
        const hamburgerBtn = document.querySelector("#hamburger-btn");
        const closeMenuBtn = document.querySelector("#close-menu-btn");
        // Toggle mobile menu on hamburger button click
        hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
        // Close mobile menu on close button click
        closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
      </script>`,
    /*component data*/
    data() {
        return {
          navelements: ['Home', 'Products', 'Testimonials', 'About Us', 'Contact Us'],
          
        }
    },
    /*component methods*/
    methods: {},
    /*computed component propertys*/
    computed: {}
}) 