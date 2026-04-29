import { NavLink } from 'react-router-dom'
import styles from './ProductBreadCrumb.module.scss'

export default function ProductBreadCrumb({ items = [] }) {
  if (items.length === 0) return null

  const isCollapsible = items.length > 3
  const firstItem = items[0]
  const middleItems = items.slice(1, -1)
  const lastItem = items.length > 1 ? items[items.length - 1] : null

  return (
    <nav className={styles.productBreadCrumb} aria-label="breadcrumb">
      <ol>
        <li className={styles.breadcrumbItem}>
          <NavLink to={firstItem.to}>{firstItem.label}</NavLink>
        </li>

        {middleItems.map((item, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbItem}${isCollapsible ? ` ${styles.breadcrumbMiddle}` : ''}`}
          >
            {item.to ? (
              <NavLink to={item.to}>{item.label}</NavLink>
            ) : (
              <span className={styles.active}>{item.label}</span>
            )}
          </li>
        ))}

        {isCollapsible && (
          <li
            className={`${styles.breadcrumbItem} ${styles.breadcrumbEllipsis}`}
            aria-hidden="true"
          >
            <span>...</span>
          </li>
        )}

        {lastItem && (
          <li className={styles.breadcrumbItem} aria-current="page">
            <span className={styles.active}>{lastItem.label}</span>
          </li>
        )}
      </ol>
    </nav>
  )
}
