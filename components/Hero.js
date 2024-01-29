app.component('hero', {
  template:
    /*html*/
    `<section class="hero-section">
        <div class="content">
          <h2> Start Your Day With {{title}} </h2>
          <p>
            {{description}}
          </p>
          <button>Order Now</button>
        </div>
      </section>`,
  /*component data*/
  data() {
    return {
      title: 'Good&Fresh Coffee',
      description: 'Coffee is a popular and beloved beverage enjoyed by people around the world.Awaken your senses with a steaming cup of liquid motivation.',
    }
  },
  /*component methods*/
  methods: {},
  /*computed component propertys*/
  computed: {}
}) 