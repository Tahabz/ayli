import React from "react"
import { ArrowLeftIcon } from "./Icons"

export default function NumberItem({
  numberIcon,
  title,
  paragraphDisplayed,
  hiddenParagraph,
}) {
  const [viewMore, setViewMore] = React.useState(false)

  function handelViewMore() {
    setViewMore(!viewMore)
  }
  return (
    <div className="flex items-center gap-6">
      {numberIcon}
      <div className="flex w-full flex-col gap-3">
        <h2 className="w-[16rem] text-xl font-bold text-primary">{title}</h2>
        <p className="w-full text-sm font-light text-primary md:w-[25rem]">
          {paragraphDisplayed}
          {viewMore ? hiddenParagraph : null}
        </p>
        <div className="flex justify-end lg:justify-start">
          <button
            className="group mt-2 flex items-center gap-[.5rem]  text-active"
            onClick={handelViewMore}
          >
            {viewMore ? "Voir moins" : "Voir plus"}
            <ArrowLeftIcon className="group-hover:animate-arrowAnimation h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
