import React from "react"
import heroImage from "../assets/hero.png"
import { CheckMarkIcon } from "./Icons"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative top-[11rem] items-center justify-between 2xl:justify-between px-8 lg:top-[13.5rem] lg:flex"
    >
      <div className="flex flex-col items-center gap-10 lg:items-start">
        <h1 className="text-primary text-3xl lg:text-[2.5rem] font-semibold">
          Payez moins, gagnez plus 
        </h1>
        <div className="flex flex-col gap-5">
          <div className="text-primary lg:text-md lg:w-[35rem] flex items-center gap-4 text-sm font-light">
            <CheckMarkIcon className="h-9 w-9 sm:w-6 sm-h-6 lg:w-8 lg:h-8" />
            <span>
              Les difficultés administratives, laissez-vous porter vers le
              succès en toute transparence
            </span>
          </div>
          <div className="text-primary lg:text-md lg:w-[35rem] flex items-center gap-4 text-sm font-light">
            <CheckMarkIcon className="h-9 w-9 sm:w-6 sm-h-6 lg:w-8 lg:h-8" />
            <span>
              Profitez des avantages du salariat tout en conservant voFini tre
              liberté d'indépendant
            </span>
          </div>
        </div>
        <button className="bg-horizontalGradient w-[55%] rounded-full py-5 font-normal lg:mt-8 capitalize text-white sm:w-72 lg:w-56">
          contactez-nous
        </button>
      </div>
      <img src={heroImage} alt="Hero" className="hidden lg:block w-[25rem] 2xl:w-auto" />
    </section>
  )
}
