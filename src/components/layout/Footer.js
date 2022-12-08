import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
    return(
        <footer className="bg-gray-900 text-gray-200 p-10 text-center">
            <ul className="flex justify-center">
                <li className="mr-4 text-2xl cursor-pointer hover:text-yellow-500">
                    <FaFacebook />
                </li>
                <li className="mr-4 text-2xl cursor-pointer hover:text-yellow-500">
                    <FaInstagram />
                </li>
                <li className="mr-4 text-2xl cursor-pointer hover:text-yellow-500">
                    <FaLinkedin />
                </li>
            </ul>
            <p className="mt-4 mr-3">
                <span className="font-bold text-yellow-500">Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer