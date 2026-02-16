import { useState } from 'react'
import ReactImageGallery from 'react-image-gallery'
import styles from './index.module.scss'
import cl from 'classnames'

const ImageGalleryWithSkeleton = ({
  items,
  className,
  skeletonColor = '#e8f4f9',
  shimmerColor = 'rgba(91, 159, 204, 0.15)',
  ...galleryProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleImageLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div className={cl(styles.galleryWrapper, className)}>
      {!isLoaded && (
        <div
          className={styles.skeleton}
          style={{
            backgroundColor: skeletonColor,
            '--shimmer-color': shimmerColor,
          }}
        >
          <div className={styles.shimmer} />
        </div>
      )}
      <div
        className={cl(styles.gallery, {
          [styles.galleryVisible]: isLoaded,
        })}
      >
        <ReactImageGallery
          items={items}
          onImageLoad={handleImageLoad}
          {...galleryProps}
        />
      </div>
    </div>
  )
}

export default ImageGalleryWithSkeleton
