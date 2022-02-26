import { InputHTMLAttributes } from "react"
import './index.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
const Input: React.FunctionComponent<InputProps> = (props) => {
  return <input className={`ele-input`} {...props}/>
}
export default Input