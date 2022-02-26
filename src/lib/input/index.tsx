interface InputProps {
  value: string,
  onChange: (value: string) => void
}
const Input: React.FunctionComponent<InputProps> = (props) => {
  return <input type="text" value={props.value}/>
}
export default Input