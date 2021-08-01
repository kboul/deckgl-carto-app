import AlertProps from './model';
import styles from './styles.module.sass';

export default function Alert({ children }: AlertProps) {
  return <div className={styles.alert}>{children}</div>;
}
