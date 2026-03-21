import clsx from "clsx"
import React from "react"

const AboutP = ({ children, margin }: { children: React.ReactNode, margin: boolean }) => {
  return (
    <p
        className={clsx(
            "text-sm lg:text-lg text-gray-700",
            margin ? 'mb-2' : 'mb-0'
        )}
    >{children}</p>
  )
}

export default AboutP