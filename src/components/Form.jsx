import React, { useState, useMemo } from "react";
import {
    SRedirectLink,
    SButton,
    SForm,
    SFormControl,
    SFormTitle,
    SInput,
    SLabel,
    SRedirect,
    SRedirectLabel,
    SButtonCancel,
    Buttons,
} from "../styles/Form.style";

const prepareForm = (formArr) => {
    return formArr.reduce((r, v) => ({ ...r, [v.name]: "" }), {});
};

const Form = ({ title, formArr, submitBtn, onSubmit, closeModal}) => {
    const initialForm = useMemo(() => prepareForm(formArr), [formArr]);
    const [form, setForm] = useState(initialForm);

    const onChangeHandler = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    const onSumbitHandler = () => onSubmit(form, () => {
        closeModal(false)
        setForm(initialForm)
    });

    return (
        <SForm autoComplete={"off"}>
            <SFormTitle>{title}</SFormTitle>
            {formArr.map(({ label, name, type }, index) => (
                <SFormControl key={index}>
                    <SLabel htmlFor={name}>{label}</SLabel>
                    <SInput
                        id={name}
                        name={name}
                        type={type}
                        value={form[name]}
                        onChange={(e) => onChangeHandler(e)}
                    />
                </SFormControl>
            ))}
            <Buttons>
            <SButton
                onClick={(e) => {
                    e.preventDefault();
                    onSumbitHandler();
                    closeModal(!closeModal);
                }}
            >
                {submitBtn}
            </SButton>
                <SButtonCancel onClick={() => closeModal(!closeModal)}>
                    Cancelar
                </SButtonCancel>
            </Buttons>
        </SForm>
    );
};

Form.defaultProps = {
    onSubmit: (form) => console.log(form),
};

export default Form;