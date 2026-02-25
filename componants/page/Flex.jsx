import { Children } from "react"


const Flex = ({children,className}) => {
  return (
    <div className={`flex  ${className} justify-between`}>{children}</div>
  )
}

export default Flex
 