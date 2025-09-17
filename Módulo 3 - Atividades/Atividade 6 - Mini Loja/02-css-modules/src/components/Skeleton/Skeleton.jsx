import styles from './Skeleton.module.css';

function Skeleton() {
    return (
        <div className={styles.skeleton}>
            <div className={styles.skeletonImg} />
            <div className={styles.skeletonLine} />
            <div className={`${styles.skeletonLine} ${styles.short}`} />
        </div>
    );
}

export default Skeleton;
