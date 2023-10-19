import React from "react"
import heroImage from "../assets/hero.png"
import { CheckMarkIcon } from "./Icons"

export default function Hero() {
  return (
    <section
      id="hero"
      className="items-center justify-between px-8 pt-[11rem] lg:flex lg:pt-[15rem] 2xl:justify-between"
    >
      <div className="flex flex-col items-center gap-10 lg:items-start">
        <h1 className="text-3xl font-semibold text-center text-primary md:text-[2.5rem]">
          Payez moins, gagnez plus 
        </h1>
        <div className="flex flex-col gap-5">
          <div className="lg:text-md flex items-center gap-4 text-sm font-light text-primary lg:w-[35rem]">
            <CheckMarkIcon className="h-8 w-8" />
            <span className="w-full">
              Les difficultés administratives, laissez-vous porter vers le
              succès en toute transparence
            </span>
          </div>
          <div className="lg:text-md flex items-center gap-4 text-sm font-light text-primary lg:w-[35rem]">
            <CheckMarkIcon className="h-8 w-8" />
            <span className="w-full">
              Profitez des avantages du salariat tout en conservant voFini tre
              liberté d'indépendant
            </span>
          </div>
        </div>
        <button className="mt-8 w-[70%] rounded-full bg-horizontalGradient py-5 font-normal capitalize text-white sm:w-72 lg:w-56">
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
