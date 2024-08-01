import { createContext, useState, useEffect } from "react"
import { categorias as categoriasDB } from "../data/categorias"
import { toast } from "react-toastify";

const QuioscoContext = createContext();
const QuioscoProvider = ({ children }) => {
    
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategororiaActual] = useState(categorias[0]);
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
       const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.
        cantidad) + total, 0)
        setTotal(nuevoTotal)
    },[pedido]) 

    const handleClickCategorias = (id) => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        setCategororiaActual(categoria)
    };

    const handleClickModal = () => {
        setModal(!modal);
    };
    const handleSetProducto = producto => {
        setProducto(producto);
    };
    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        

        if(pedido.some(pedidoState => pedidoState.id  === producto.id)){
            const pedidoActualizado = pedido.map(pedidoState => pedidoState.id  === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success(`Guardado correctamente`)
        }else{
            setPedido([...pedido, producto])
            toast.success(`Producto agregado al pedido`,)
        }
    }
    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal);
    }
    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success(`Producto eliminado del pedido`)
    }


    return (
        <QuioscoContext.Provider value=
        {{ 
            categorias, 
            categoriaActual, 
            handleClickCategorias,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarPedido,
            handleEditarCantidad,
            handleEliminarProducto,
            total
            }}>
            {children}
        </QuioscoContext.Provider>
    );
};


export { QuioscoProvider}

export default QuioscoContext