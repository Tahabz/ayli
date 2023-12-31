import React from "react"
import { BurgerMenuIcon, CloseIcon } from "./Icons"
import { Link } from "react-scroll"
import logo from "../assets/logo.png"

export default function NavBar() {
  const [active, setActive] = React.useState(0)
  const [click, setClick] = React.useState(false)
  const links = [
    { page: "acceuil", idSection: "hero" },
    { page: "contact" },
    { page: "pourquoi ayli ?" },
    { page: "aylishare" },
  ]
  return (
    <>
      <nav className="fixed left-0 top-0 z-[2] hidden w-full p-8 backdrop-blur-md lg:block">
        <ul className="2xl:container 2xl:mx-auto flex items-center justify-between">
          <img src={logo} alt="Logo PORTAYLI" className="relative w-16" />
          <div className="flex  items-center lg:gap-24 2xl:gap-40">
            {links.map((e, index) => {
              return (
                <li key={index}>
                  <Link
                    to={e.idSection || e.page}
                    spy={true}
                    smooth={true}
                    offset={e.page === "about" ? -100 : -150}
                    duration={300}
                    delay={100}
                    className={`cursor-pointer capitalize  ${
                      active === index ? "text-active" : "text-gray"
                    } hover:text-active`}
                    onClick={() => {
                      setActive(index)
                    }}
                  >
                    {e.page}
                  </Link>
                </li>
              )
            })}
          </div>
        </ul>
      </nav>
      <div className="fixed top-0 z-[4] flex w-full items-start justify-between px-8 py-5 backdrop-blur-md lg:hidden">
        <img
          src={logo}
          alt="Logo PORTAYLI"
          className={`relative ${click ? "invisible" : ""} z-[1] w-16`}
        />
        {click ? (
          <button
            className={`relative z-[3] flex h-8 w-8 items-end justify-end ${
              click ? "click" : ""
            }`}
            onClick={() => {
              setClick(false)
              document.body.style.overflow = "auto"
            }}
          >
            <CloseIcon className="relative bottom-1 h-5 w-5" />
          </button>
        ) : (
          <button
            className={`relative z-[3] h-8 w-8 ${click ? "click" : ""}`}
            onClick={() => {
              setClick(true)
              document.body.style.overflow = "hidden"
            }}
          >
            <BurgerMenuIcon className="h-8 w-8" />
          </button>
        )}
      </div>
      <nav
        className={`nav fixed left-0 top-0 z-[2] flex h-full w-full items-center bg-white justify-center p-8  lg:hidden
        ${click ? "click" : ""}`}
      >
        <ul className="flex flex-col gap-16">
          {links.map((e, index) => {
            return (
              <li key={index}>
                <Link
                  to={e.idSection || e.page}
                  spy={true}
                  smooth={true}
                  offset={e.page === "contact" ? -150 : -100}
                  duration={300}
                  delay={100}
                  className={`cursor-pointer capitalize ${
                    active === index ? "text-active" : "text-gray"
                  } hover:text-active`}
                  onClick={() => {
                    setActive(index)
                    setClick(false)
                    document.body.style.overflow = "auto"
                  }}
                >
                  {e.page}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
