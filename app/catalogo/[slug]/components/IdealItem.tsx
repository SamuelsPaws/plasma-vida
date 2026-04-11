const IdealItem = ({ text }: { text: string }) => {
  return (
    <div className="
        mb-2
        flex items-center gap-2
        text-md lg:text-lg"
    >
        <i className="fa fa-check text-teal-600"></i>
        <span className="text-gray-600">{text}</span>
    </div>
  )
}

export default IdealItem