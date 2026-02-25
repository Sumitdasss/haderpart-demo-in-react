import { Children } from "react"


const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1440px] ${className} mx-auto`}>{children}</div>
  )
}

export default Container