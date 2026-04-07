const ItemHealthTag = ({ text }: { text: string }) => {
  return (
    
    <div className="
        px-4 lg:px-5
        flex justify-center items-center gap-2
        bg-teal-500 text-white-1 text-sm lg:text-lg
        rounded-full"
    >
        {text}
    </div>
  )
}

export default ItemHealthTag