import React from 'react'

function FormComponent() {
  return (
    <div>
      <div class="row">
        <div class="col-7">
          <label htmlFor="todo" className="form-label">
            Tarefa:
          </label>
          <input type="text" name="todo" id="todo" className="form-control" />
        </div>
        <div className="col-3">
          <label htmlFor="status" className="form-label">
            Status da Tarefa
          </label>
          <select name="status" id="status" className="form-select">
            <option value="" selected>Selecione</option>
            <option value="completed">Pronta</option>
            <option value="in-progress">Em andamento</option>
            <option value="pending">Pendente</option>
          </select>
        </div>
        <div className="col-2 d-flex align-items-end">
            <button type="button" class="btn btn-md btn-primary custom-btn">+ Criar tarefa</button>
        </div>
      </div>
    </div>
  )
}

export default FormComponent
