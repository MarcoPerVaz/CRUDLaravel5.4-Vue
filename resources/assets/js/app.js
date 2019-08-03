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
    pagination: {
      'total': 0,
      'current_page': 0,
      'per_page': 0,
      'last_page': 0,
      'from': 0,
      'to': 0,
    },
    offset: 3
  },
  methods: {
    getKeeps: function(page){
      var urlKeeps = 'tasks?page=' + page;
      axios.get(urlKeeps ).then(response => {
        this.keeps = response.data.tasks.data;
        this.pagination = response.data.pagination
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
    },
    changePage: function(page){
      this.pagination.current_page = page;
      this.getKeeps(page);
    }
  },
  computed: {
    isActived: function(){
      return this.pagination.current_page;
    },
    pagesNumber: function(){
      if (!this.pagination.to) {
        return [];
      }
      var from = this.pagination.current_page - this.offset 
      if (from < 1) {
        from = 1;
      }
      var to = from + (this.offset * 2);
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      var pagesArray = [];
      while (from <= to) {
        pagesArray.push(from);
        from++;
      }
      return pagesArray;
    }
  }
});
