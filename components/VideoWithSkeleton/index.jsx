import { useState } from 'react'
import styles from './index.module.scss'

const VideoWithSkeleton = ({ src, onEnded }) => {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className={styles.wrapper}>
      {!isReady && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer} />
        </div>
      )}
      <video
        src={src}
        controls
        autoPlay
        muted
        className={isReady ? styles.videoVisible : styles.video}
        onCanPlay={() => setIsReady(true)}
        onEnded={onEnded}
      />
    </div>
  )
}

export default VideoWithSkeleton
