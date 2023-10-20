import React from "react"
import { QuotesIcon } from "./Icons"

export default function Feedbacks() {
  return (
    <section className="flex flex-col items-center gap-[6rem] px-8 pt-[8rem] lg:items-start lg:gap-[10rem] lg:pt-[11rem]">
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
            <h3 className="text-lg font-bold text-primary">Eric D</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Ingénieur
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            Leurs tarifs fixes m'ont permis de planifier mon budget avec
            précision. J'ai pu me concentrer sur mon travail plutôt que sur
            l’administratif. Merci à toute l'équipe pour leur excellent service.
          </p>
        </div>
        <div className="bg-grayLight relative z-[1] flex flex-col gap-3 rounded-md p-5 shadow-sm sm:w-[30rem] lg:w-[30%] 2xl:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-primary">Aurélie M</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Cheffe de projet
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            Mon conseiller m'a aidé à maximiser mes revenus. Ils m’ont aidée à
            chaque étape du processus. Je les recommande sans hésitation !
          </p>
        </div>
        <div className="bg-grayLight relative z-[1] flex flex-col gap-3 rounded-md p-5 shadow-sm sm:w-[30rem] lg:w-[30%] 2xl:w-[50%]">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-primary">Prince L</h3>
            <span className="relative bottom-1 text-sm font-bold text-active">
              Consultant
            </span>
          </div>
          <p className="text-sm font-light text-primary">
            J'utilise les services de cette société de portage depuis plus d'un
            an maintenant, j’en suis extrêmement satisfait. C’était ma première
            expérience en freelance. Je suis content d’être passé par PortAyli
            et leur équipe
          </p>
        </div>
        <QuotesIcon className="absolute left-[-1rem] top-[-2rem] w-12" />
      </div>
    </section>
  )
}
