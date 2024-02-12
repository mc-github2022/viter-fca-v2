import React from "react";

const RequirementRegistrarEdit = () => {
  return (
    <>
      <div className="mode__edit">
        <div className="table__wrapper">
          <table>
            <thead>
              <tr>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
              {/* {registrar?.data.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.requirement_registrar_name}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>

        <div className="remarks max-w-[500px] mt-10">
          <h6>Note:</h6>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            doloremque quas reiciendis consequuntur numquam distinctio nemo
            atque deleniti qui eligendi?
          </p>
        </div>
      </div>
    </>
  );
};

export default RequirementRegistrarEdit;
