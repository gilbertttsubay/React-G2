import React from "react";

const EmpItemList = (props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>nama karyawan</th>
          <th>divisi</th>
          <th>act</th>
        </tr>
      </thead>
      <tbody>
        {props.empItems.length > 0 ? (
          props.empItems.map((empItem) => (
            <tr key={empItem.id}>
              <td>{empItem.id}</td>
              <td>{empItem.emp}</td>
              <td>{empItem.dept}</td>
              <td>
                <button onClick={() => props.editEmpItem(empItem)}>Edit</button>
                <button onClick={() => props.deleteEmpItem(empItem.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No emp</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default EmpItemList;
