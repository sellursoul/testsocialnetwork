import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {textArea} from "../common/FormsControl/FormsControl";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

let maxLength = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={textArea} validate={[required, maxLength]}
                        name={"newMessageBody"} placeholder="Enter your message"/></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})
(AddMessageForm);

export default Dialogs;