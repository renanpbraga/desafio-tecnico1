import React from 'react'

function FilterComponent() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col">
          <label className="form-label">
            Filtrar tarefas por status:
          </label>
          <div className="col-5 d-flex justify-content-around">
            <div className="col-auto">
              <input type="radio" name="filter-status" id="filter-done" />
              <label htmlFor="filter-done" className="form-label px-2">Pronta</label>
            </div>
            <div className="col-auto">
            <input type="radio" name="filter-status" id="filter-in-progress"/>
              <label htmlFor="filter-in-progress" className="form-label px-2">Em andamento</label>
            </div>
            <div className="col-auto">
              <input type="radio" name="filter-status" id="filter-pending" />
              <label htmlFor="filter-pending" className="form-label px-2">Pendente</label>
            </div>
            <div className="col-auto">
              <input type="radio" name="filter-status" />
              <label htmlFor="filter-all" className="form-label px-2">Todas</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
