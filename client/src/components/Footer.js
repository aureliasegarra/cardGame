import styles from '../style.js';
import { punto } from '../assets';

const Footer = () => (
    <section className="bg-primary w-full overflow-hidden flex flex-row justify-between flew-wrap">

        <div className={`${styles.flexStart} ${styles.paddingY} flex-col`}>
            <div className="flex-1 flex items-center mr-10">
                <img src={punto} alt="card logo" className="w-[80px]" />
                <p className="text-white mt-2 text-3xl">Punto  <span className="text-white text-sm">The new card game !</span></p>
            </div>
        </div>
        <div className="mt-20">
            <ul className="flex-[1.5] w-full flex flex-row justify-between mr-10">
                <li className={` font-popins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>Linkedin</li>
                <li className={` font-popins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>Gitlab</li>
                <li className={` font-popins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer `}>Github</li>
            </ul>
        </div>

    </section>
)


export default Footer