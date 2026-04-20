import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "./Pagination.module.scss";

export default function Pagination() {
  return (
    <nav aria-label="pagination">
      <ol className={styles.pagination}>
        <li>
          <button className={`${styles.paginationIcon}`}>
            <MdChevronLeft size={20}/>
          </button>
        </li>
        <li>
          <button className={styles.active}>1</button>
        </li>
        <li>
          <button>2</button>
        </li>
        <li>
          <button>3</button>
        </li>
        <li>
          <span>...</span>
        </li>
        <li>
          <button>10</button>
        </li>
        <li>
          <button className={`${styles.paginationIcon}`}>
            <MdChevronRight size={20}/>
          </button>
        </li>
      </ol>
    </nav>
  );
}
