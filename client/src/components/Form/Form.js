import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROJECT } from '../../utils/mutations';

function Form() {
     const [project, setproject] = useState()
    const [formState, setFormState] = useState({
    name: '',
    projectLeader: ''
  });
  const [addProject, {error}] = useMutation(ADD_PROJECT);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        const { name, value } = addProject({
          variables: { ...formState },
        });
  
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
  }
  const handleChange = (event) => {
    const { name, value } = event.target;

    
    setFormState({ ...formState, [name]: value });
    console.log(formState)
    
    
  }
  return (
    <form
    className="flex-row justify-center justify-space-between-md align-center"
    onSubmit={handleFormSubmit}
  >
    <div className="col-12">
      <textarea
        name="name"
        placeholder="Name your project"
        value={formState.name}
        className="form-input w-100"
        onChange={handleChange}
      ></textarea>
    </div>
    <div className="col-12 col-lg-9">
      <input
        name="projectLeader"
        placeholder="enter who is in charge of project"
        value={formState.projectLeader}
        className="form-input w-100"
        onChange={handleChange}
      />
    </div>

    <div className="col-12 col-lg-3">
      <button className="btn btn-primary btn-block py-3" type="submit">
        Add project
      </button>
    </div>
    {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
  </form>
  )
}

export default Form