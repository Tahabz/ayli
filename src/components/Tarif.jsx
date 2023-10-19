import React from "react"
import { LineIcon, TimeLine } from "./Icons"

export default function Tarif() {
  return (
    <section className="flex flex-col items-center gap-[6rem] pt-[8rem] lg:gap-[8rem] lg:pt-[11rem]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-[1.7rem] px-8 md:px-0 font-semibold text-primary lg:text-[2rem]">
          Tarif fixe et transparent
          <span className="text-active"> 400€/mois</span>
        </h1>
        <span className="text-md relative text-lg font-light text-primary">
          Notre devise: Zéro Frais cachés
          <div>
            <LineIcon className="absolute bottom-[-5.2rem] right-0 h-[10rem] w-[10rem]" />
          </div>
        </span>
      </div>
      <TimeLine className="md:relative px-4 md:px-0 md:w-[40rem] lg:w-[50rem]" />
    </section>
  )
}
