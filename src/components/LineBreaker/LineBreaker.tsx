import LineBreakerProps from './model';
import styles from './styles.module.sass';

export default function LineBreaker({ className }: LineBreakerProps) {
  return <p className={`${styles.lineBreaker} ${className}`} />;
}
