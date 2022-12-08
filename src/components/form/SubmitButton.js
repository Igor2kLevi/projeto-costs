function SubmitButton({ text }) {
    return (
        <div>
            <button className="bg-gray-900 text-gray-200 py-2 px-4 mb-12 rounded-lg no-underline cursor-pointer border-0 transition delay-100 hover:text-yellow-500">{text}</button>
        </div>
    )
}

export default SubmitButton