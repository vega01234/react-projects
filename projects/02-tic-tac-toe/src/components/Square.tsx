type Props = {
    children?: any;
    updateBoard?: any;
    index?: any;
    isSelected?: any;
}

function Square ({ children, updateBoard, index, isSelected }: Props) {
    const classNameSquare = `square ${isSelected ? "is-selected" : ""}`
    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <>
            <div className={classNameSquare} onClick={handleClick}>
                {children}
            </div>
        </>
    );
}

export default Square;