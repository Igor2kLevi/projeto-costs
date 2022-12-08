import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import styles from './ProjectCard.module.css'

function ProjectCard({id, name, budget, category, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className="w-3/12 p-4 m-1 mb-5 mr-10 border border-solid border-gray-500 rounded-md">
            <h4 className="bg-gray-900 text-yellow-500 p-2 mb-5 text-2xl">{name}</h4>
            <p className="text-gray-600 mb-4">
                <span className="font-bold">Orçamento:</span> R${budget}
            </p>
            <p className="flex items-center">
                <span className="border-8 mr-2 rounded-full border-slate-400"></span> {category}
            </p>
            <div className="mt-5 flex items-center">
               <Link to={`/project/${id}`} className="bg-white text-gray-900 text-base py-2 px-4 mr-4 cursor-pointer border border-solid border-gray-900 flex text-center justify-center transition delay-150 hover:bg-gray-900 hover:text-yellow-500">
                <BsPencil className="mr-1 mt-1" /> Editar
               </Link>
               <button onClick={remove} className="bg-white text-gray-900 text-base py-2 px-4 mr-4 cursor-pointer border border-solid border-gray-900 flex text-center justify-center transition delay-150 hover:bg-gray-900 hover:text-yellow-500">
                <BsFillTrashFill className="mr-1 mt-1" /> Excluir
               </button>
            </div>
        </div>
    )
}

export default ProjectCard



// className={`block w-3 h-3 rounded-full bg-slate-400 mr-2 ${styles[category.toLowerCase()]}`}