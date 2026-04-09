const ItemHealthTag = ({ text }: { text: string }) => {
  return (
    
    <div className="
        h-10 lg:h-12 px-3 lg:px-5
        flex justify-center items-center gap-2
        bg-teal-500 text-white-1 text-sm lg:text-lg text-center
        rounded-full"
    >
        {text}
    </div>
  )
}

export default ItemHealthTag