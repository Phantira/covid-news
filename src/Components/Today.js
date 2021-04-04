function Today({newConfirmed, newRecovered, newDeaths}){
    return(
        <div className="today">
            <div className="infected">
                <h2>ติดเชื้อเพิ่ม</h2>
                <p>{newConfirmed} ราย</p>
            </div>

            <div className="cured">
                <h2>รักษาหายเพิ่ม</h2>
                <p>{newRecovered} ราย</p>
            </div>

            <div className="death">
                <h2>เสียชีวิตเพิ่ม</h2>
                <p>{newDeaths} ราย</p>
            </div>
        </div>
    )
}
export default Today;