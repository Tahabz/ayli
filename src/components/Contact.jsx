import React from "react"
import { ArrowFly, SendIcon } from "./Icons"

export default function Contact() {
  return (
    <section
      className="pb-10 mt-[12rem] flex flex-col items-center justify-center gap-16 px-8  lg:mt-[25rem] lg:flex-row lg:justify-around lg:gap-[4.5rem] 2xl:justify-center 2xl:gap-[20rem]"
      id="contact"
    >
      <span className="relative bottom-[4rem] w-full   text-center text-[3.5rem] font-semibold text-primary lg:w-[20rem]">
        Contactez Nous
      </span>
      <form className="flex w-full flex-col gap-12 lg:relative lg:w-[40rem]">
        <ArrowFly className="absolute right-0 top-[-18rem] hidden h-[17rem] w-[17rem] lg:block" />
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-primary">Email</label>
          <input
            type="text"
            name="user_email"
            className={`rounded-md bg-grayLight p-4 text-sm text-primary placeholder:text-xs placeholder:text-[#B2B2B1] focus:outline-none`}
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm text-primary">Message</label>
          <textarea
            type="text"
            name="message"
            className={`h-[11rem] rounded-md bg-grayLight p-3 text-sm text-primary placeholder:text-xs placeholder:text-[#B2B2B1] focus:outline-none`}
            placeholder="Enter your message"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex w-48 items-center justify-center gap-6 rounded-md bg-horizontalGradient p-3 font-medium text-white"
          >
            <span>Envoyer</span>
            <SendIcon className="h-5 w-5 fill-white" />
          </button>
        </div>
      </form>
    </section>
  )
}
