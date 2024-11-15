import { shops } from "../mocks/MockShop";
function ListShop() {
	return (
		<>
			<div className="bg-black w-full h-screen md:px-40 xs:px-6">
				<h1 className="text-white text-4xl">
					Hola! Soy la vista de la lista de la tienda :D
				</h1>
				<div className="grid sm:grid-cols-2  xs:grid-cols-1 gap-8 place-content-between">
					{shops.map((item) => (
						<div key={item.nombre}>
							<h3 className="text-white">{item.nombre}</h3>
							<p className="text-white">${item.precio}</p>
							<img className="w-20 h-20" src={item.img} alt={item.nombre} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default ListShop;
