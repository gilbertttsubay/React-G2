import React from "react";

const AddEmpItem = (props) => {
  return (
    <form onSubmit={props.addEmpItem}>
      <div className="form-group">
        <label>nama karyawan</label>
        <input
          type="text"
          className="form-control"
          name="emp"
          value={props.emp}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>divisi</label>
        <input
          type="text"
          className="form-control"
          name="dept"
          value={props.dept}
          onChange={props.handleInputChange}
        />
      </div>
      <button> add karyawan </button>
    </form>
  );
};

export default AddEmpItem;
