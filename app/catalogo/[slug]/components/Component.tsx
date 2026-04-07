const Component = ({ text }: { text: string } ) => {
  return (
    <div className="
        p-6 lg:p-8
        flex flex-col items-center gap-4
        bg-white-1 text-pink-600 rounded-2xl"
    >
        <p className="text-4xl lg:text-5xl">
            <i className="fa fa-medkit" aria-hidden="true"></i>
        </p>
        <p className="text-lg lg:text-xl">{text}</p>
    </div>
  )
}

export default Component