import React from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

const AboutMe = ({ className }) => {
  return (
    <div className={cn(className, styles.aboutMe)}>
      <div className={styles.aboutMeDescription}>
        <p>
          Hello! My name is Ivan, I&apos;m a frontend developer from Moscow with
          over a year of experience working on personal projects.
        </p>
        <p>
          My technical skills include{' '}
          <span>
            HTML, CSS, JavaScript, TypeScript, React, Redux toolkit, NextJS,
            Tailwind, Sanity.
          </span>{' '}
          I am interested in developing in this area and am looking for
          opportunities to participate in real projects and learn new skills.
        </p>
        <p>
          I have a desire for learning and independence, which helps me to
          successfully solve complex problems. I enjoy teamwork and am always
          willing to work with other developers to achieve mutual success.
        </p>
        <p>
          I like to keep abreast of the latest web development trends and
          technologies. In my free time, I like to be creative: composing music
          or creating videos.
        </p>
        <p>
          My goal is to continue to develop as a developer and work on important
          projects that change the world for the better. I am always looking for
          new opportunities to learn and grow and am excited to see where my
          career will take me next.
        </p>
      </div>

      <div className={styles.aboutMeAvatar}></div>
    </div>
  )
}

export default AboutMe
