import React from 'react'

function CardComponent() {
  
  const cardWidth = {
    width: '100%',
  };

  return (
    <div class="card shadow p-3 mb-5 bg-white rounded mt-4" style={cardWidth}>
      <div className="row p-2">
        <div className="col-7 d-flex flex-column">
          <label className="form-label font-weight-bold">
            <strong>Tarefa</strong>
          </label>
          <p>Tarefa a ser executada</p>
        </div>
        <div className="col-3">
          <label className="form-label">
            <strong>Tarefa</strong>
          </label>
          <p>Status da tarefa</p>
        </div>
        <div className="col-2 d-flex">
          <div className="col d-flex align-items-center">
            <button type="button" className="btn btn-outline-primary">Editar</button>
          </div>
          <div className="col d-flex align-items-center">
            <button className="btn btn-outline-danger">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
