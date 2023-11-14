import { Link } from "react-router-dom"
import Slider from "./Slider"

export default function Container() {
    
    return(
        <>
            <div className="mainTop">
                <div className="filter">
                    <h4><img src="/src/components/img/sipari-takibi1.png" alt=""/>Sipariş Takip</h4>
                    <h4><img src="/src/components/img/magazalar.png" alt="" />Mağazalar</h4>
                    <h4> <img src="/src/components/img/katalog.png" alt="" />Katalog</h4>
                    <Link to={"/delivery"}><h4><img src="/src/components/img/teslimat-ve-deme.png" alt="" />Teslimat/Ödeme</h4></Link>
                    <h4> <img src="/src/components/img/top-blog.avif" alt="" />Blog</h4>
                </div>
                <div className="headerlog">
                    <img src="/src/components/img/Pure-beuaty-.png" alt="" />
                </div>
            </div>
            <Slider/>
        </>
    )
}