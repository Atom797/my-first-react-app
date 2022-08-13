import styles from './FormsControls.module.css'
import { reduxForm, Field } from "redux-form"

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl >
}

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl >
}

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div >
  )
}

export const createField = (placeholder, name, validators, component, props = {}, text ="") => {
  return <div>
    <Field placeholder={placeholder} validate={validators} name={name} component={component} {...props} /> {text}
  </div>
}