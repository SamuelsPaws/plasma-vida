const Component = ({ text }: { text: string } ) => {
  return (
    <div className="
        p-6 lg:p-8
        flex flex-col items-center gap-4
        bg-white-1 text-sky-600 rounded-2xl"
    >
        <p className="text-6xl">
            <i className="fa fa-tint" aria-hidden="true"></i>
        </p>
        <p className="text-xl">{text}</p>
    </div>
  )
}

export default Component