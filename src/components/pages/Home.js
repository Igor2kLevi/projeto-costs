import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return(
        <section className="w-full flex flex-col items-center justify-center mb-20">
            <h1 className="text-5xl font-bold mb-8">Bem-vindo ao <span className="text-yellow-500 p-2 bg-gray-900 rounded-xl">Costs</span></h1>
            <p className="mb-8 text-xl text-gray-400">Comece a gerenciar os seus  projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img className="w-96 mt-10" src={savings} alt="Costs" />
        </section>
    )
}

export default Home