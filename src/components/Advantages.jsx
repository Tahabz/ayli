import React from "react"
import { ArrowLeftIcon, CheckMarkSuccess, CutIcon } from "./Icons"

export default function Advantages() {
  const [viewMore, setViewMore] = React.useState(false)

  function handelViewMore() {
    setViewMore(!viewMore)
  }

  return (
    <section className="flex flex-col items-center gap-20 px-8 pt-[8rem] lg:items-start lg:gap-10 lg:pt-[11rem]">
      <h1 className="w-[20rem] text-center text-[1.7rem] font-semibold text-primary md:w-[25rem] lg:hidden lg:w-[25rem] lg:text-left lg:text-[2rem]">
        Les avantages du statut Portayli
      </h1>
      <div className="flex w-full flex-col-reverse items-center gap-20 lg:flex-row lg:justify-around lg:gap-0">
        <div className="lg:flex lg:flex-col lg:gap-10">
          <h1 className="hidden w-[20rem] text-center text-[1.7rem] font-semibold text-primary lg:block lg:w-[25rem] lg:text-left lg:text-[2rem]">
            Les avantages du statut Portayli
          </h1>
          <div className="flex flex-col items-center gap-6">
            <div className="flex w-full items-center gap-3">
              <CheckMarkSuccess className="h-7 w-7 lg:h-6 lg:w-6" />
              <span className="text-md w-full font-light text-primary lg:w-[25rem]">
                Les difficultés administratives, laissez-vous porter vers le
                succès en toute transparence
              </span>
            </div>
            <div className="flex w-full items-center gap-3">
              <CheckMarkSuccess className="h-7 w-7 lg:h-6 lg:w-6" />
              <span className="text-md w-full font-light text-primary lg:w-[25rem]">
                Mutuelle santé et prévoyance négociées par nos soins
              </span>
            </div>
            <div className="flex w-full items-center gap-3">
              <CheckMarkSuccess className="h-7 w-7 lg:h-6 lg:w-6" />
              <span className="text-md w-full font-light text-primary lg:w-[25rem]">
                Un bouquet de formations proposé par nos partenaires
              </span>
            </div>
            <div className="flex w-full items-center gap-3">
              <CheckMarkSuccess className="h-7 w-7 lg:h-6 lg:w-6" />
              <span className="text-md w-full font-light text-primary lg:w-[25rem]">
                Épargne salariale PEE/PERCO pour nos salariés portés
              </span>
            </div>
            {viewMore ? (
              <>
                <div className="flex w-full items-center gap-3">
                  <CheckMarkSuccess className="h-7 w-7 lg:h-6 lg:w-6" />
                  <span className="text-md w-full font-light text-primary lg:w-[25rem]">
                    Une cagnotte mensuelle pour augmenter votre pouvoir d'achat
                  </span>
                </div>
                <div className="flex w-full items-center gap-3">
                  <CheckMarkSuccess className="h-7 w-7 lg:h-6 lg:w-6" />
                  <span className="text-md w-full font-light text-primary lg:w-[25rem]">
                    Un conseiller dédié de 9h à 18h
                  </span>
                </div>
              </>
            ) : null}
            <button
              className="group mt-5 flex items-center gap-[.5rem]  text-active"
              onClick={handelViewMore}
            >
              {viewMore ? "Voir moins" : "Voir plus"}{" "}
              <ArrowLeftIcon className="group-hover:animate-arrowAnimation h-5 w-5" />
            </button>
          </div>
        </div>
        <CutIcon className="h-60 w-60 lg:h-[20rem] lg:w-[20rem]" />
      </div>
    </section>
  )
}
