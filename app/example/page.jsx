import styles from "../page.module.scss";
import clsx from 'clsx'

export default function Page() {
  return (
    <main className={clsx(`fill-height`, `${styles.mainContent}`)}>
      <h1>Example Page</h1>
      <div className="content">Example Content</div>
    </main>
  );
}
