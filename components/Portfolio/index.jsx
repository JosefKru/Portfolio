import cl from "classnames";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import SkeletonImage from "../SkeletonImage";
import Title from "../Title";
import styles from "./index.module.scss";

const Portfolio = ({
  className,
  title,
  imagesGallery,
  description,
  slug,
  isEnglish,
}) => {
  return (
    <Link
      href={`/project/${encodeURIComponent(slug?.current)}`}
      className={cl(className, styles.project)}
    >
      <a className={styles.projectLink}>
        <Title type="small" className={styles.projectTitle}>
          {isEnglish ? title.en : title.ru}
        </Title>
        <div className={styles.projectContent}>
          <div className={styles.projectImage}>
            <SkeletonImage
              src={urlFor(imagesGallery[0]).url()}
              layout="fill"
              objectFit="contain"
              alt={isEnglish ? title.en : title.ru}
              skeletonColor="#e8f4f9"
              shimmerColor="rgba(91, 159, 204, 0.15)"
            />
          </div>
          <p className={styles.projectDescription}>
            {isEnglish ? description.en : description.ru}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Portfolio;
