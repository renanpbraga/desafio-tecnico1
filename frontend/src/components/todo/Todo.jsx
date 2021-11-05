import React from 'react'
import FormComponent from './form/FormComponent';
import FilterComponent from './filter/FilterComponent';
import ListComponent from './list/ListComponent';

function Todo() {
  return (
    <div>
      <div class="row mt-4">
        <div class="col d-flex justify-content-center">
          <h1>ToDo List</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <FormComponent />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <FilterComponent />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ListComponent />
        </div>
      </div>
    </div>
  )
}

export default Todo;