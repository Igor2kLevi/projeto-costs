import { Link } from "react-router-dom"

function LinkButton({ to, text }) {
    return(
        <Link className="bg-gray-900 text-gray-200 py-2 px-4 rounded-lg transition ease-in-out delay-150 hover:text-yellow-500 -translate-y-1 hover:scale-110 hover:duration-300" to={to}>
            {text}
        </Link>
    )
}

export default LinkButton