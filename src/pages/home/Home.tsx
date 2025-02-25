
function Home() {
    return (
        <>
            <div className="flex justify-center bg-cyan-300 min-h-full">
                <div className="container grid grid-cols-2 text-black py-4">
                    <div className="flex flex-col items-center justify-center gap-4 py-4">
                        <h2 className="text-5xl font-bold">
                            Seja bem vindo!
                        </h2>
                        <p className="text-xl">Aqui você encontra Medicamentos e Cosméticos!</p>

                        <div className="flex justify-around gap-4">
                        <div className='rounded text-white py-2 px-4 bg-indigo-800'
                                >
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://cdn.discordapp.com/attachments/1306319291171471411/1343911654408065044/home.png?ex=67befec3&is=67bdad43&hm=d18ac6e8fb675966ebed620960266ac7cc7d686754a7bbd7fde188c28b88c53d&"
                            alt="Imagem Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home