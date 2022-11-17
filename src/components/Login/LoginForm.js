import React from "react";
import {reduxForm} from "redux-form";
import {required} from "../utils/validators/validators";
import {createField, Input} from "../common/FormsControl/FormsControl";
import s from "./../common/FormsControl/FormControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email","email", [required], Input)}
        {createField("Password","password", [required], Input, {type: "password"})}
        {createField(null,"rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
        {error && <div className={s.formSummaryError}>
            {error};
        </div>}
        <div>
            <button>Log in</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

