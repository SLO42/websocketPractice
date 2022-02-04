import React from "react";

function UserForm({user, onChange}) {

  return (
    <div className="userForm">
        <input type="text" name="user" value={user} onChange={(e) => onChange(e)} />
    </div>
  );
}

export default UserForm;