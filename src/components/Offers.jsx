import React from "react"
import { GiftCardIcon, PercentageIcon } from "./Icons"

export default function Offers() {
  return (
    <section className="flex flex-col items-center justify-around gap-8 px-8 pt-[8rem] lg:pt-[11rem] md:flex-row lg:gap-[20rem]">
      <div className="flex flex-col items-center gap-8">
        <GiftCardIcon className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" />
        <span className="text-primary w-[19rem] text-center font-medium">
          Des chèques cadeaux,culture et titres-restaurant
        </span>
      </div>
      <div className="flex flex-col items-center gap-8">
        <PercentageIcon className="h-[3.1rem] w-[3.1rem] md:w-[3.5rem] md:h-[3.5rem] lg:w-[4rem] lg:h-[4rem]" />
        <span className="text-primary w-[12rem] text-center font-medium">
          Tarif Fixe et transparent{" "}
          <span className="text-active">400 Euros</span> par mois
        </span>
      </div>
    </section>
  )
}
