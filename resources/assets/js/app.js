new Vue({
  el: '#crud',
  created: function(){
    this.getKeeps();
  },
  data: {
    keeps: []
  },
  methods: {
    getKeeps: function(){
      var urlKeeps = 'tasks';
      axios.get(urlKeeps ).then(response => {
        this.keeps = response.data;
      });
    },
    deleteKeep: function(keep){
      var url = 'tasks/' + keep.id;
      axios.delete(url).then(response => { //Se eliminan las tareas
        this.getKeeps(); //Se listan las tareas
        // Las 2 propiedades de toastr.options funcionan.
        // Forma 1
        toastr.options = {
          "closeButton": true,
          "progressBar": true,
        }
        // Forma 2
        // toastr.options.closeButton = true;
        // toastr.options.progressBar = true;
        toastr.success('Eliminado correctamente');//Se muestra el mensaje
      });
    }
  }
});
