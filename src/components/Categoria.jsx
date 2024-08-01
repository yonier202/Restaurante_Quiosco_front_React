import useQuiosco from "../hooks/useQuiosco"
export default function Categoria({categoria}) {
  const {handleClickCategorias, categoriaActual} = useQuiosco()
  const {icono, id, nombre} = categoria
  return (

  <div 
    className={`${categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'} flex items-center gap-4 border w-full p-3 cursor-pointer hover:bg-amber-400`}
    onClick={() => handleClickCategorias(id)}
    >
    <img 
        src={`img/icono_${icono}.svg`}
        alt="Imagen icono" 
        className="w-12"
    />
    <span className="text-lg font-bold cursor-pointer truncate">
        {nombre}
    </span>
</div>

  )
}
