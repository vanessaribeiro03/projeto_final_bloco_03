import { ShoppingCart, User } from "@phosphor-icons/react";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";

function Navbar() {

	return (
		<>
			<div className="flex justify-center w-full py-4 text-white bg-indigo-900">
				<div className="container flex items-center justify-between mx-4 text-lg">
					<Link to="/home">
						<img
							src="https://s3-alpha-sig.figma.com/img/41ff/5964/522991af58f760bb83a43b5b419e26f1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S4RQ~R~BzZx22M-7cIwPP6HU5~aVpADD-V~EEx8TDYCd3nfRbRTaFI2wHEKEkt-piNwooXFHPd4W1uTe-K~kuQ5RRSWjIMwfN-MTVblseWhFRCoorAA4bojvUnH5SbBmIlqR4a2QlnVuLrLBr3YXAXZwh3Tp-bW9zWiYpeJdvsvI4bAeO975UXcrPf12uD2Az5niufkSHCNfC3cAgSc98HVSxogN~xrj~yOA9ATl20UPfgO2yJRkD581r6ocF~7Z8C1FvIKhlYfP4KTSxYYTjvc30FEHVP4oJkQKpn58-BQh3LU8Gc-92Xw9aliJrkZuKGvYM6P6UcEwXjZcz-dqkg__"
							alt="Logo"
							className="w-40"
						/>
					</Link>

					<div className="relative flex items-center justify-center w-2/5 text-black">
						<form 
							className="flex items-center justify-center w-full"
						>
							<input
								className="w-11/12 px-5 py-5 bg-white rounded-lg h-9 focus:outline-none"
								type="search"
								placeholder="Procurar"
								id="busca"
								name="busca"
								required
							/>
							<button
								type="submit"
								className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-cyan-100 bg-cyan-400 hover:bg-gray-400 rounded-lg border border-teal-700"
							>
								<MagnifyingGlass
									size={14}
									weight="bold" 
								/>
							</button>
						</form>
					</div>

					<div className="flex items-center gap-4 py-4">
						<Link
							to="/produtos"
							className="hover:underline"
						>
							Produtos
						</Link>
						<Link
							to="/categorias"
							className="hover:underline"
						>
							Categorias
						</Link>
						<Link
							to="/cadastrarcategoria"
							className="hover:underline"
						>
							Cadastrar Categoria
						</Link>
							<User
								size={32}
								weight="bold"
							/>

							<ShoppingCart
								size={32}
								weight="bold"
							/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar