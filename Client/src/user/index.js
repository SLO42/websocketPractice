import React from "react";
import PropTypes from "prop-types";

function UserForm({user, onChange}) {

	return (
		<div className="userForm">
			<input type="text" name="user" value={user} onChange={(e) => onChange(e)} />
		</div>
	);
}

UserForm.propTypes = {
	user: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default UserForm;