import React from "react"
import heroImage from "../assets/hero.png"
import { CheckMarkIcon } from "./Icons"

export default function Hero() {
  return (
    <section
      id="hero"
      className="items-center justify-between px-8 pt-[13rem] lg:flex lg:pt-[15rem] 2xl:justify-between"
    >
      <div className="flex flex-col items-center gap-10 lg:items-start">
        <h1 className="text-primary text-3xl font-semibold lg:text-[2.5rem]">
          Payez moins, gagnez plus 
        </h1>
        <div className="flex flex-col gap-5">
          <div className="text-primary lg:text-md flex items-center gap-4 text-sm font-light lg:w-[35rem]">
            <CheckMarkIcon className="sm-h-6 h-9 w-9 sm:w-6 lg:h-8 lg:w-8" />
            <span>
              Les difficultés administratives, laissez-vous porter vers le
              succès en toute transparence
            </span>
          </div>
          <div className="text-primary lg:text-md flex items-center gap-4 text-sm font-light lg:w-[35rem]">
            <CheckMarkIcon className="sm-h-6 h-9 w-9 sm:w-6 lg:h-8 lg:w-8" />
            <span>
              Profitez des avantages du salariat tout en conservant voFini tre
              liberté d'indépendant
            </span>
          </div>
        </div>
        <button className="bg-horizontalGradient mt-8 w-[55%] rounded-full py-5 font-normal capitalize text-white sm:w-72 lg:w-56">
          contactez-nous
        </button>
      </div>
      <img
        src={heroImage}
        alt="Hero"
        className="hero-animation hidden w-[25rem] lg:block 2xl:w-auto"
      />
    </section>
  )
}
