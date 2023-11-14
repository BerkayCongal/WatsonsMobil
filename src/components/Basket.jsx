import { Link } from "react-router-dom";
import { Player} from '@lottiefiles/react-lottie-player';
import Cargo from"/src/Animations/Animation - 1697670627472.json"
import { useRef } from "react";
export default function basket() {

    const nameRef = useRef()
    
    return(
        <>            
           <div className='control-nav'>
           <div className='container-link'>
           <Link className='control-link' to={"/"}>
            <Player 
                    autoplay
                    loop
                    ref={nameRef}
                    src={Cargo}
                    style={{ height: '100px', width: '100px' }}
                    >selam
            </Player>Alışverişime Geri Dön
            </Link>
            <div>
                <h1>Sepetindeki Ürünler</h1>
            </div>
           </div>
            
            <div className='card-price'>
                <div>
                    <div className='card-container'>
                        <div className='all-price'>
                            <span>Ara toplam</span>
                            <span>0,00TL</span>
                        </div>
                        <div className='basketprice'>
                            <h3>Toplam</h3>
                            <span>0.00TL</span>
                        </div>
                    </div>
                    <button className='pricebutton'>Alışverişi Tamamla</button>
                </div>
                
            </div>
           </div>
        </>
    )
}