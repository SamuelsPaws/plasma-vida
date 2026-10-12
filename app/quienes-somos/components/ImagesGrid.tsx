'use client'
import Reveal from "@/components/Reveal"
import { motionTokens } from "@/lib/motion"
import { organization } from "@/data/organization"

const ImagesGrid = () => {
  return (
    <div className="h-[380px] lg:h-auto lg:flex-1 grid grid-cols-2 auto-rows-fr lg:auto-rows-[240px]">
        <Reveal
            className="w-[110%] h-[110%] rounded-2xl overflow-hidden z-0"
        >
            <img
                src="/assets/elderly.svg"
                className="w-full h-full object-contain"
                alt={`El equipo de ${organization.name}`}
            />
        </Reveal>
        <div></div>
        <div></div>
        <Reveal
            className="w-[110%] h-[110%] place-self-end rounded-2xl overflow-hidden z-10"
            delay={motionTokens.stagger}
        >
            <img
                src="/assets/prehospital.svg"
                className="w-full h-full object-contain"
                alt={`El equipo de ${organization.name}`}
            />
        </Reveal>
        <Reveal
            className="w-[110%] h-[110%] place-self-start rounded-2xl overflow-hidden z-10"
            delay={motionTokens.stagger * 2}
        >
            <img
                src="/assets/scientist.svg"
                className="w-full h-full object-contain"
                alt={`El equipo de ${organization.name}`}
            />
        </Reveal>
    </div>
  )
}

export default ImagesGrid
