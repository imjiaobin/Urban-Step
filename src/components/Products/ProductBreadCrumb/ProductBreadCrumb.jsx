import { NavLink } from 'react-router-dom'
import styles from './ProductBreadCrumb.module.scss'

export default function ProductBreadCrumb(){
    return <>
        <nav className={`${styles.productBreadCrumb} `} aria-label='product-bread-crumb'>
            <ol>
                <li className={` ${styles.breadcrumbItem}`}>
                    <NavLink to='/products'>首頁</NavLink>
                </li>
                <li className={` ${styles.breadcrumbItem}`}>
                    <NavLink>所有商品</NavLink>
                </li>
            </ol>
        </nav>
    </>
}