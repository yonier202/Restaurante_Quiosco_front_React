import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {
    const { categorias } = useQuiosco()

  // Crear un componente Sidebar con categorias y botón de cancelar orden
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img src="img/logo.svg" alt="imagen logo" className="w-40"/>
        </div>
        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </div>
        <div className="my-5 px-5">
            <button type="button"
                className="bg-red-500 w-full p-3 font-bold text-white truncate" >
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
