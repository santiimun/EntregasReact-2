import { useContext, useState } from "react";
import { CarritoContext } from "../../context/carritoContext";
import LinkMenu from "../../components/linkMenu";
import DetalleCompra from "../../components/detalleCompra";
import PaymentForm from "../../components/tarjetaCredito";



const PageCarrito = () => {
    const { carritoProductos } = useContext(CarritoContext);
    let [mostrarPaymentForm, setMostrarPaymentForm] = useState(false);

    const handleFinalizarCompra = () => {
        setMostrarPaymentForm(true); 
    };

    const total = carritoProductos.reduce((acc, product) => {
        const count = product.quantity || 0; // Asegúrate de que cada producto tenga una cantidad
        return acc + (product.precio * count);
    }, 0);

    return (
        <main className="main-carrito">
            {carritoProductos.length === 0 ? (
                <div className="error">
                    <h2>CARRITO VACIO</h2>
                    <LinkMenu clase={"error-link"} label={"IR A TIENDA"} href={"/tienda"} />
                </div>
            ) : (
            <div className="vista-compra">
                <div className="lista-compra">
                    {carritoProductos.map((product) => (
                        <div key={product.id}>
                            <DetalleCompra {...product} />
                        </div>
                    ))}
                </div>
                <div className="fin-compra">
                    <h2>Resumen de compra</h2>
                    <p className="precio-final">Total 
                        <span className="precio">${total}</span>
                    </p>
                    <div className="linea-fin"></div>
                    <button className="finalizar" onClick={handleFinalizarCompra}>Finalizar compra</button>
                </div>
            </div>
            )}
            {mostrarPaymentForm && (<PaymentForm />)}
        </main>
    );
};  

export default PageCarrito;
