new Vue({
  el: '#crud',
  created: function(){
    this.getKeeps();
  },
  data: {
    keeps: [],
    newKeep: '',
    errors: [],
    fillKeep: {'id': '', 'keep': ''},
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
    },
    createKeep: function(){
      var url = 'tasks'
      axios.post(url, {
        keep: this.newKeep
      }).then(response => {
        this.getKeeps();
        this.newKeep = '';
        this.errors = [];
        $('#create').modal('hide');
        toastr.options = {
          "closeButton": true,
          "progressBar": true,
        }
        toastr.success('Nueva tarea creada con éxito')
      }).catch(error => {
        this.errors = error.response.data;
      });
    },
    editKeep: function(keep){
      this.fillKeep.id = keep.id;
      this.fillKeep.keep = keep.keep;
      $('#edit').modal('show');
    },
    updateKeep: function(id){
      var url = 'tasks/' + id;
      axios.put(url, this.fillKeep).then(response => {
        this.getKeeps();
        this.fillKeep = {'id': '', 'keep': ''};
        this.errors = [];
        $('#edit').modal('hide');
        toastr.options = {
          "closeButton": true,
          "progressBar": true,
        }
        toastr.success('Tarea actualizada con éxito')
      }).catch(error => {
        this.errors = error.response.data;
      });
    }
  }
});
