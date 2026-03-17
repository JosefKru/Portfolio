import { format } from "date-fns";
import Head from "next/head";
import { useContext, useEffect, useRef } from "react";
import {
  Article,
  Content,
  ImageGalleryWithSkeleton,
  Title,
} from "../../components";
import VideoWithSkeleton from "../../components/VideoWithSkeleton";
import { LanguageContext } from "../../contexts/LanguageContext";
import { client } from "../../lib/client";
import { urlFor } from "./../../lib/client";
import styles from "./styles.module.scss";

const Project = ({ project, gallery }) => {
  const { isEnglish, isInitialized } = useContext(LanguageContext);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (items[0]?.isVideo) {
      const timer = setTimeout(() => galleryRef.current?.pause(), 100);
      return () => clearTimeout(timer);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const data = project?.date
    ? format(new Date(project.date), "dd MMM yyyy")
    : "";
  const galleryOfItem = gallery.filter((item) => item._id === project?._id);

  const items =
    galleryOfItem[0]?.imagesGallery?.map((item) => {
      const isVideo = item._type === "file";
      return {
        original: item.asset.url,
        thumbnail: isVideo ? item.asset.url : urlFor(item.asset.url).url(),
        originalHeight: "750px",
        thumbnailHeight: "60px",
        isVideo,
        renderItem: isVideo
          ? () => (
              <VideoWithSkeleton
                src={item.asset.url}
                onEnded={() => galleryRef.current?.play()}
              />
            )
          : undefined,
        renderThumbInner: isVideo
          ? () => (
              <video
                src={item.asset.url}
                style={{ height: "60px", width: "100%", objectFit: "cover" }}
                muted
              />
            )
          : undefined,
      };
    }) || [];

  const onSlide = (index) => {
    if (items[index]?.isVideo) {
      galleryRef.current?.pause();
      const video = document.querySelector('.image-gallery-slide.center video');
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <Article backUrl="/">
      <Head>
        <title>{project?.metaTitle}</title>
        <base target="_blank" />
      </Head>

      <div className={styles.project}>
        <Title className={styles.projectTitle}>
          {isEnglish ? project.title.en : project?.title.ru}
        </Title>

        {data && <p className={styles.projectData}>{data}</p>}

        {items && items.length > 0 && (
          <div className={styles.projectImage}>
            <ImageGalleryWithSkeleton
              ref={galleryRef}
              items={items}
              showThumbnails={true}
              thumbnailPosition="bottom"
              slideInterval={5000}
              slideDuration={800}
              showNav={true}
              autoPlay={true}
              showFullscreenButton={true}
              showPlayButton={true}
              showBullets={true}
              skeletonColor="#e8f4f9"
              shimmerColor="rgba(91, 159, 204, 0.15)"
              onSlide={onSlide}
            />
          </div>
        )}
        <Content body={isEnglish ? project.body.en : project?.body.ru} />
      </div>
    </Article>
  );
};

export default Project;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

  const projects = await client.fetch(query);

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query_project = `*[_type == "toys" && slug.current == '${slug}'][0]`;
  const query_gallery = `*[_type == "toys"] {
    _id,
    imagesGallery[] {
      _type,
      asset->{url}
    }
  }`;

  const project = await client.fetch(query_project);
  const gallery = await client.fetch(query_gallery);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      gallery,
    },
  };
}
