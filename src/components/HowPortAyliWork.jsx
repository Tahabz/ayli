import React from "react"
import { BagIcon, BagStarIcon, ContractIcon } from "./Icons"
import ItemService from "./ItemService"

export default function HowPortAyliWork() {
  return (
    <section className="flex flex-col items-center  gap-[4rem] px-8 pt-[8rem] lg:pt-[11rem] 2xl:px-0">
      <h1 className="w-[20rem] text-center text-[1.7rem] font-semibold text-primary md:w-[25rem] lg:w-full lg:text-[2rem]">
        Comment fonctionne le statut de portage salarial ?
      </h1>
      <div>
        <div className="flex flex-col gap-20 lg:gap-12">
          <span className="flex justify-center text-center   text-primary">
            <h4 className="w-full md:w-[25rem]">
              Le statut de portage salarial implique une relation tripartite
              entre trois acteurs clés :
            </h4>
          </span>
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-3">
            <ItemService
              icon={<ContractIcon className="w-[4rem]" />}
              title="L'intervenant (ou le salarié porté)"
              paragraphDisplayed="C'est la personne qui fournit ses services professionnels. Elle est liée à la société de portage par un contrat de travail,"
              hiddenParagraph=" qu'il s'agisse d'un contrat à durée déterminée (CDD) ou d'un contrat à durée indéterminée (CDI) spécifique au portage salarial. Cette personne est également engagée dans une relation commerciale directe avec l'entreprise cliente."
            />
            <ItemService
              icon={<BagIcon className="w-[4rem]" />}
              title="La société de portage"
              widthTitle={true}
              paragraphDisplayed="C'est l'entité qui fournit des services de portage salarial. Son rôle est de formaliser la prestation en établissant"
              hiddenParagraph=" un contrat commercial entre l'intervenant et l'entreprise cliente, en gérant la facturation, et en s'occupant d'autres aspects administratifs nécessaires."
            />
            <ItemService
              icon={<BagStarIcon className="w-[5rem]" />}
              title="L'entreprise cliente"
              widthTitle={true}
              paragraphDisplayed="C'est l'entreprise qui a un besoin spécifique et qui fait appel à l'intervenant pour répondre à ce besoin."
              hiddenParagraph=" L'intervenant et l'entreprise cliente négocient ensemble les modalités de la prestation, telles que le tarif, la durée, les frais, les livrables, etc."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
