import React from "react"
import { OneIcon, ThreeIcon, TwoIcon } from "./Icons"
import NumberItem from "./NumberItem"

export default function WhyPortAyli() {
  return (
    <section className="flex flex-col items-center gap-[6rem]  px-8 pt-[8rem] lg:items-start lg:pt-[11rem]">
      <h1 className="w-[20rem] text-center text-[1.7rem] font-semibold text-primary md:w-[25rem] lg:w-full lg:text-[2rem]">
        Pourquoi Choisir PORTAYLI ?
      </h1>
      <div className="flex flex-col gap-12 lg:w-full lg:gap-0 lg:px-[4rem] mlg:px-[8rem] xl:px-[12rem] 2xl:px-[15rem]">
        <div className="lg:flex lg:justify-start">
          <NumberItem
            numberIcon={<OneIcon className="w-10" />}
            title="Nous nous occupons de l’administratif"
            paragraphDisplayed="Portayli prend en charge l'intégralité de la gestion de votre activité, y compris la création de contrats de prestation,l'émission de factures,"
            hiddenParagraph=" le recouvrement des paiements et la gestion des notes de frais, le tout de manière entièrement numérique, via notre plateforme intuitive !"
          />
        </div>
        <div className="lg:flex lg:justify-end">
          <NumberItem
            numberIcon={<TwoIcon className="w-[4.2rem]" />}
            title="Vous bénéficiez des avantages du salariat "
            paragraphDisplayed="Portayli vous offre l'opportunité de bénéficier du statut de salarié en CDD/CDI avec tous les avantages qui en découlent. Vous aurez accès à une véritable fiche de paie  (idéale pour vos besoins en emprunt),"
            hiddenParagraph=" la possibilité de rejoindre un comité d'entreprise, de souscrire à une mutuelle, de bénéficier de l'assurance chômage, d’une cagnotte mensuelle d’avantages, des tickets restaurants, et bien d'autres services à valeur ajoutée."
          />
        </div>
        <div className="lg:flex lg:justify-start">
          <NumberItem
            numberIcon={<ThreeIcon className="w-[4rem]" />}
            title="Et vous accédez à notre réseau Ayli"
            paragraphDisplayed="Lorsque vous faites partie de notre réseau Portayli, vous aurez accès aux offres proposées par nos partenaires, vous serez ainsi accompagnés par nos équipes et votre interlocuteur dédié"
            hiddenParagraph=" à la recherche de vos missions futures. De plus bénéficiez d’un Partage de primes à l’apport d’affaires et d’un système de cooptation"
          />
        </div>
      </div>
    </section>
  )
}
