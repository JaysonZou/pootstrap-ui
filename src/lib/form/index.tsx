import React, { ChangeEvent, FormEventHandler, ReactChild, ReactFragment, ReactNode, ReactPropTypes } from "react";
interface FormProps {
  value: any,
  fields: { [K: string]: any }[],
  onSubmit: React.FormEventHandler<HTMLFormElement>
  buttons: ReactFragment,
  onChange: (payload: {  [K: string]: any }) => void
}
const Form: React.FunctionComponent<FormProps> = (props) => {
  const { children, value: formData, fields } = props
  console.log(children, 'CHildern');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e); 
  }  
 
  const onInputChange = (name: string, e: ChangeEvent<HTMLInputElement>) => {

    console.log(e.target.value, 'e');
    props.onChange({...formData,  [name]: e.target.value })
    

  } 
  return <form onSubmit={onSubmit}>
    {
      fields.map( (field) => {
        return <div key={field.name}>
          <label>{field.name}</label>
          <input onChange={onInputChange.bind(null, field.name)} value={formData[field.name]} />
        </div>
      })
    }
    {props.buttons}
  </form>

}

export default Form;
