import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={`${styles.footer} bg-neutral-100 py-64`}>
        <p>Copyright ©2025 URBANSTYLE</p>
        <p>All Rights Reserved.</p>
      </footer>
    </>
  );
}
