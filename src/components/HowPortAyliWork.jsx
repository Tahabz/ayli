import React from "react"
import {
  AtomIcon,
  BagIcon,
  BagStarIcon,
  CheckSecurity,
  ContractIcon,
  DocumentIcon,
  EuroIcon,
  TargetIcon,
  WatchIcon,
} from "./Icons"
import ItemService from "./ItemService"

export default function HowPortAyliWork() {
  return (
    <section className="flex flex-col items-center  gap-[4rem] px-8 pt-[8rem] lg:pt-[11rem] 2xl:px-0">
      <h1 className="w-[20rem] text-center text-[1.7rem] font-semibold text-primary md:w-[25rem] lg:w-full lg:text-[2rem]">
        Comment fonctionne le statut de portage salarial ?
      </h1>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-20 lg:gap-12">
          <span className="flex justify-center text-center   text-primary">
            <h4 className="w-full md:w-[25rem]">
              Le statut de portage salarial implique une relation tripartite
              entre trois acteurs clés :
            </h4>
          </span>
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start lg:justify-between lg:gap-3">
            <ItemService
              icon={<ContractIcon className="h-[4rem] w-[4rem]" />}
              title="L'intervenant (ou le salarié porté)"
              paragraphDisplayed="C'est la personne qui fournit ses services professionnels. Elle est liée à la société de portage par un contrat de travail,"
              hiddenParagraph=" qu'il s'agisse d'un contrat à durée déterminée (CDD) ou d'un contrat à durée indéterminée (CDI) spécifique au portage salarial. Cette personne est également engagée dans une relation commerciale directe avec l'entreprise cliente."
            />
            <ItemService
              icon={<BagIcon className="h-[4rem] w-[4rem]" />}
              title="La société de portage"
              widthTitle={true}
              paragraphDisplayed="C'est l'entité qui fournit des services de portage salarial. Son rôle est de formaliser la prestation en établissant"
              hiddenParagraph=" un contrat commercial entre l'intervenant et l'entreprise cliente, en gérant la facturation, et en s'occupant d'autres aspects administratifs nécessaires."
            />
            <ItemService
              icon={<BagStarIcon className="h-[4rem] w-[4.5rem]" />}
              title="L'entreprise cliente"
              widthTitle={true}
              paragraphDisplayed="C'est l'entreprise qui a un besoin spécifique et qui fait appel à l'intervenant pour répondre à ce besoin."
              hiddenParagraph=" L'intervenant et l'entreprise cliente négocient ensemble les modalités de la prestation, telles que le tarif, la durée, les frais, les livrables, etc."
            />
          </div>
        </div>
        <div className="flex flex-col gap-20 lg:gap-12">
          <span className="flex justify-center text-center   text-primary">
            <h4 className="w-[14rem] md:w-full">
              Le processus se déroule de la manière suivante :
            </h4>
          </span>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-12">
              <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
                <span className="bg-activeLight flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-opacity-[.2] p-3">
                  <TargetIcon className="h-10 w-10" />
                </span>
                <p className="text-center font-light text-primary lg:text-left">
                  L'entreprise cliente engage l'intervenant pour répondre à un
                  besoin spécifique.
                </p>
              </div>
              <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
                <span className="bg-activeLight flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-opacity-[.2] p-3">
                  <AtomIcon className="h-11 w-11" />
                </span>
                <p className="text-center font-light text-primary lg:text-left">
                  L'intervenant et l'entreprise cliente négocient directement
                  les détails de la prestation, y compris le tarif, la durée,
                  les frais, et les livrables.
                </p>
              </div>
              <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
                <span className="bg-activeLight flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-opacity-[.2] p-3">
                  <DocumentIcon className="h-10 w-10" />
                </span>
                <p className="text-center font-light text-primary lg:text-left">
                  La société de portage, à laquelle l'intervenant est rattaché,
                  formalise la prestation en établissant un contrat commercial,
                  en gérant la facturation, et en prenant en charge d'autres
                  aspects administratifs nécessaires.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:gap-12">
              <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
                <span className="bg-activeLight flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-opacity-[.2] p-3">
                  <CheckSecurity className="h-10 w-10" />
                </span>
                <p className="text-center font-light text-primary lg:text-left">
                  L'intervenant se charge de réaliser la mission convenue avec
                  son client.
                </p>
              </div>
              <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
                <span className="bg-activeLight flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-opacity-[.2] p-3">
                  <WatchIcon className="h-10 w-10" />
                </span>
                <p className="text-center font-light text-primary lg:text-left">
                  À la fin du mois, l'intervenant déclare son activité,
                  précisant le nombre de jours travaillés dans le mois. La
                  société de portage émet alors les factures correspondantes et
                  verse les honoraires au consultant sous forme de salaire.
                </p>
              </div>
              <div className="flex flex-col items-center gap-5 lg:w-[50%] lg:items-start">
                <span className="bg-activeLight flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-opacity-[.2] p-3">
                  <EuroIcon className="h-8 w-8" />
                </span>
                <p className="text-center font-light text-primary lg:text-left">
                  À ce stade, l'intervenant peut choisir de percevoir la
                  totalité de sa rémunération pour la prestation effectuée ou de
                  lisser ses revenus. Un bulletin de paie lui est délivré pour
                  sa rémunération.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
