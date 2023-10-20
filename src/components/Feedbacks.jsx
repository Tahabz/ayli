import React from "react"
import { QuotesIcon } from "./Icons"

export default function Feedbacks() {
  return (
    <section className="flex flex-col items-center gap-[6rem] lg:gap-[10rem] px-8 pt-[8rem] lg:items-start lg:pt-[11rem]">
      <h1 className="w-[20rem] text-center text-[1.7rem] font-semibold text-primary md:w-[25rem] lg:w-full lg:text-[2rem]">
        Témoignages
      </h1>
      <div className="relative flex flex-col gap-10 lg:flex-row lg:gap-5">
        <div className="bg-grayLight relative z-[1] flex flex-col gap-3 rounded-md p-5 shadow-sm sm:w-[30rem] lg:w-[30%] 2xl:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-primary">Sofia L</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Consultante
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            Une équipe professionnelle à l’écoute des demandes des consultants
            free-lances comme pour mon cas.
          </p>
        </div>
        <div className="bg-grayLight relative z-[1] flex flex-col gap-3 rounded-md p-5 shadow-sm sm:w-[30rem] lg:w-[30%] 2xl:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-primary">Sofia L</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Consultante
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            Une équipe professionnelle à l’écoute des demandes des consultants
            free-lances comme pour mon cas.
          </p>
        </div>
        <div className="bg-grayLight relative z-[1] flex flex-col gap-3 rounded-md p-5 shadow-sm sm:w-[30rem] lg:w-[30%] 2xl:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-primary">Sofia L</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Consultante
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            Une équipe professionnelle à l’écoute des demandes des consultants
            free-lances comme pour mon cas.
          </p>
        </div>
        <div className="bg-grayLight relative z-[1] flex flex-col gap-3 rounded-md p-5 shadow-sm sm:w-[30rem] lg:w-[30%] 2xl:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-primary">Sofia L</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Consultante
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            Une équipe professionnelle à l’écoute des demandes des consultants
            free-lances comme pour mon cas.
          </p>
        </div>
        <QuotesIcon className="absolute left-[-1rem] top-[-2rem] w-12" />
      </div>
    </section>
  )
}
