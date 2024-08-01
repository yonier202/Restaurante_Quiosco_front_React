import {Link} from 'react-router-dom'

export default function login() {
  return (
    <div>
    <h1 className="text-4xl font-black">Iniciar Sesión</h1>
    <p>Para crear un pedido debes iniciar sesión</p>

    <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
           
            <div className="mb-4">
                <label className="text-slate-800" htmlFor="email"> 
                    Email:
                </label>
                <input 
                    type="text"
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="email"
                    placeholder="Tu Email"
                />
            </div>
            <div className="mb-4">
                <label className="text-slate-800" htmlFor="password"> 
                    Password:
                </label>
                <input 
                    type="password"
                    id="password"
                    className="mt-2 w-full p-3 bg-gray-50"
                    name="password"
                    placeholder="Tu Password"
                />
            </div>

            <input type="submit " 
                value="Iniciar Sesión"
                className="w-full mt-5 p-3 text-white bg-blue-500 hover:bg-blue-700 uppercase font-bold cursor-pointer text-center" 
                disabled={false}
            />
        </form>
    </div>
    <nav className="mt-5">
        <Link to="/auth/registro">
            ¿Ya tienes cuenta? Inicia Sesión
        </Link>
    </nav>
</div>
  )
}
