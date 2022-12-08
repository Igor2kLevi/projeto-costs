import loading from '../../img/loading.svg'

function Loading() {
    return(
        <div className="w-full h-full flex justify-center text-center">
            <img className="w-14" src={loading} alt="loading" />
        </div>
    )
}

export default Loading