const Component = ({ text }: { text: string } ) => {
  return (
    <div className="
        p-6 lg:px-6 lg:py-4
        flex flex-col items-center gap-4
        bg-white-1 text-teal-600 font-semibold rounded-full"
    >
        {/* <div className="w-24 h-10 lg:h-24">
          <img
            src="/assets/dropper.png"
            className="w-full h-full object-contain"
            alt="ícono de suero"
          />
        </div> */}
        <p className="text-lg lg:text-xl">{text}</p>
    </div>
  )
}

export default Component