import LoaderProps from './model';
import styles from './styles.module.sass';

export default function Loader({ children }: LoaderProps) {
  return <div className={styles.loader}>{children}</div>;
}
