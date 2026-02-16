import { useState } from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import cl from 'classnames'

const SkeletonImage = ({
  src,
  alt = '',
  layout = 'fill',
  objectFit = 'contain',
  priority = false,
  className,
  skeletonClassName,
  skeletonColor = '#f0f0f0',
  shimmerColor = 'rgba(255, 255, 255, 0.3)',
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={cl(styles.imageWrapper, className)}>
      {!isLoaded && (
        <div
          className={cl(styles.skeleton, skeletonClassName)}
          style={{
            backgroundColor: skeletonColor,
            '--shimmer-color': shimmerColor,
          }}
        >
          <div className={styles.shimmer} />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        loading={priority ? 'eager' : 'lazy'}
        priority={priority}
        onLoadingComplete={() => setIsLoaded(true)}
        className={cl(styles.image, {
          [styles.imageLoaded]: isLoaded,
        })}
      />
    </div>
  )
}

export default SkeletonImage
