function Container(props) {
    return(
        <div className={`${"container flex m-auto flex-wrap text-2xl font-medium"} ${[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container