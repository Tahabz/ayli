import React from "react"
import { CheckMarkSuccess, CutIcon } from "./Icons"

export default function Advantages() {
  return (
    <section className="flex flex-col gap-20 lg:gap-0 px-8 pt-[8rem] lg:pt-[11rem]">
      <h1 className="text-[1.7rem] lg:text-[2rem] w-[20rem] lg:w-[25rem] font-semibold text-primary">
        Les avantages du statut Portayli
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-20 items-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full items-center gap-3">
            <CheckMarkSuccess className="h-7 w-7 lg:h-5 lg:w-5" />
            <span className="w-full lg:w-[25rem] text-md font-light text-primary">
              Les difficultés administratives, laissair-vous porter vers le
              succesès en toute transparence
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <CheckMarkSuccess className="h-7 w-7 lg:h-5 lg:w-5" />
            <span className="w-full lg:w-[25rem] text-md font-light text-primary">
              Mutuelle santé et prévoyance négociées par nos soins
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <CheckMarkSuccess className="h-7 w-7 lg:h-5 lg:w-5" />
            <span className="w-full lg:w-[25rem] text-md font-light text-primary">
              Un bouquet de formations proposé par nos partenaires
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <CheckMarkSuccess className="h-7 w-7 lg:h-5 lg:w-5" />
            <span className="w-full lg:w-[25rem] text-md font-light text-primary">
              Épargne salariale PEE/PERCO pour nos salariés portés
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <CheckMarkSuccess className="h-7 w-7 lg:h-5 lg:w-5" />
            <span className="w-full lg:w-[25rem] text-md font-light text-primary">
              Une cagnotte menusuelle pour augmenter votre pouvoir d'achat
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <CheckMarkSuccess className="h-7 w-7 lg:h-5 lg:w-5" />
            <span className="w-full lg:w-[25rem] text-md font-light text-primary">
              Un conseiller dédié de 9h à 18h
            </span>
          </div>
        </div>
        <CutIcon className="h-60 w-60" />
      </div>
    </section>
  )
}
