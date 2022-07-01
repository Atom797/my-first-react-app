import preloaderCss from './Preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={preloaderCss.background}/>
        </div>)
}

export default Preloader