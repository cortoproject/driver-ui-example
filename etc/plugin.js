
Vue.component('plugin-example', {
  props: ['connected', 'url', 'query_valid', 'query_string', 'query_object', 'db'],

  methods: {
      search() {
          console.log("New query received: " + this.query_string);
      }
  },

  template: `
    <div>
        <h2>Types in query:</h2>
        <p v-for="type in db">{{type.id}}</p>
        <h2>Objects in query:</h2>
        <div v-for="type in db">
            <p v-for="object in type.objects">
                {{object.id}} : {{type.id}}
            </p>
        </div>
    </div>
  `
});

app.plugin_loaded("example", function() {
    console.log("This code is executed once upon loading the plugin");
});
