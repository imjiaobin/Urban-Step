import styles from './BrandHero.module.scss';
export default function BrandHero(){
    return(
        <>
            <section className={`${styles.hero} mb-64 mb-md-32 mb-sm-32`}>
                <h1 className='h1 h3-sm h3-md mb-16 mb-sm-8'>品牌故事</h1>
                <h3 className='h3'>Brand Story</h3>
            </section>
        </>
    )
}