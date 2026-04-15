import styles from './BrandHero.module.scss';
export default function BrandHero(){
    return(
        <>
            <section className={`${styles.hero} mb-64`}>
                <h1 className='h1 mb-16'>品牌故事</h1>
                <h3 className='h3'>Brand Story</h3>
            </section>
        </>
    )
}