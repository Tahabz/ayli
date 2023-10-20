import React from "react"
import { ArrowLeftIcon } from "./Icons"

export default function ItemService({
  icon,
  paragraphDisplayed,
  hiddenParagraph,
  title,
  widthTitle,
}) {
  const [viewMore, setViewMore] = React.useState(false)

  function handelViewMore() {
    setViewMore(!viewMore)
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        {icon}
        <span
          className={`flex ${
            widthTitle ? "w-full" : "w-[60%] lg:w-full"
          } text-center font-semibold text-primary`}
        >
          {title}
        </span>
      </div>
      <p className="w-[70%] lg:w-[18rem] text-center font-light text-primary">
        {paragraphDisplayed}
        {viewMore ? hiddenParagraph : null}
      </p>
      <button
        className="group mt-2 flex items-center gap-[.5rem]  text-active"
        onClick={handelViewMore}
      >
        {viewMore ? "Voir moins" : "Voir plus"}
        <ArrowLeftIcon className="h-5 w-5 group-hover:animate-arrowAnimation" />
      </button>
    </div>
  )
}
