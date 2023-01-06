import Link from 'next/link'
import React from 'react'
import Title from '../Title'
import styles from './index.module.scss'
import cn from 'classnames'

const AboutMe = ({ className }) => {
  return (
    <div className={cn(className, styles.aboutMe)}>
      <div className={styles.aboutMeAvatar}>
        <div className={styles.aboutMeDescription}>
          <Title type='small' className={styles.aboutMeTitle}></Title>
          <p>
            Hi there! My name is Ivan, and I am a web developer based in Moscow.
          </p>
          <p>...</p>
          <p>
            I enjoy staying up to date with the latest web development trends
            and technologies. In my free time, I like to compose music or create
            videos.
          </p>
          <p>
            My goal is to continue growing as a developer and to work on
            impactful projects that make a difference. I am always looking for
            new opportunities to learn and grow, and I am excited to see where
            my career takes me next.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
