function Total({confirmed, recovered, deaths, hospitalized}){
    return(
        <div className="total-container">
        <div className="total">
            <p>ผู้ติดเชื้อสะสม {confirmed} ราย</p>
            <p>รักษาหาย {recovered} ราย</p>
            <p>กำลังรักษา {hospitalized} ราย</p>
            <p>เสียชีวิต {deaths} ราย</p>
        </div>
        </div>
    )
}
export default Total;