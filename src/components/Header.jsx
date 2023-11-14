import { useState } from "react"
import { Link, Outlet,} from "react-router-dom";
import Footer from "./Footer";

export default function Header() {
    const [mycount, setMyCount ] = useState(false);

    function handleClickCount() {
    setMyCount(!mycount)
 }

    return(
        <>
            <div className="headerContainer">
                <div className="headerTop">
                    <img  className="burgerBasket" src="/src/components/img/bars-solid.svg" alt="" />
                    <Link  to={"/"}><img className="Headerimg" src="/src/components/img/320px-Watsons_logotype.svg.png"alt=""/></Link>
                    <input className="headerInput" type="text" name="text" placeholder="Arama Yap" />
                    <div className="userheader">
                        <img src="/src/components/img/user-circle-regular-24.png" alt="" />
                        <p>Merhaba Hesabım</p>
                        <img onClick={handleClickCount} className="arrow" src="/src/components/img/arrow.png" alt="" />
                        <Link to={"/basket"}><img className="basket-header" src="/src/components/img/basketnew.png" alt=""/></Link>
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="header-filter">
                    <div className="filter-top">
                        <Link className="link" to={"/filter"}>Sadece Watsons’ta 
                        <ul className="dropdown">Sana özel  malzemeler</ul>
                        </Link>

                            
                       <Link className="link" to={"/filter"}> Sana Özel
                       <ul className="dropdown">a Deneme</ul>
                       </Link>
                

                       <Link className="link" to={"/filter"}> Makyaj
                       <ul className="dropdown">a Deneme</ul>
                       </Link>
                       
                       <Link className="link" to={"/filter"}> Saç Bakım
                       <ul className="dropdown">a Deneme</ul></Link>

                       <div className="link"> Kişisel Bakım
                            <ul className="dropdown">
                            <li>Bakım Malzemeleri</li>
                            <li><Link to={"/filter"}></Link>Kremler</li>
                            <li><Link to={"/filter"}></Link>Sampuanlar</li>
                            <li>
                                Ojeler  Kuru Kremler
                                Siyah Ojeler
                             </li>
                            </ul>
                       </div>

                       <Link className="link" to={"/filter"}> Sağlıklı Yaşam
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}> Erkek Bakım
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}> Parfüm
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}>Aksesuar K-Beauty 
                       <ul className="dropdown">a Deneme</ul></Link>

                       <Link className="link" to={"/filter"}>Sürdürülebilir Yaşam
                       <ul className="dropdown">a Deneme</ul></Link>

                        {/* Tekrara dön bak buraya arastır....! */}
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}