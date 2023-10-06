import { forwardRef } from "react"

// eslint-disable-next-line react/display-name
const InputText = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));

export default InputText