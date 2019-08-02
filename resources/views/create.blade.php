<form action="" method="post" v-on:submit.prevent="createKeep">
  <div class="modal fade" id="create">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
          <h4>Nueva tarea</h4>
        </div>
        <div class="modal-body">
          <label for="keep">Crear Tarea</label>
          <input type="text" name="keep" class="form-control" v-model="newKeep">
          <span v-for="error in errors" class="text-danger">@{{ error }}</span>
        </div>
        <div class="modal-footer">
          <input type="submit" value="Guardar" class="btn btn-primary">
        </div>
      </div>
    </div>
  </div>
</form>