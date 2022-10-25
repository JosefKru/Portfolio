import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import { FaTelegram, FaGithub } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { AiFillLinkedin } from 'react-icons/ai'
import ScreenEgg from '../ScreenEgg'

const socialNetworks = [
  {
    id: 1,
    href: 'https://t.me/josefKru',
    icon: FaTelegram,
  },
  {
    id: 2,
    href: 'https://github.com/JosefKru',
    icon: FaGithub,
  },
  {
    id: 3,
    href: 'https://www.codewars.com/users/JosefK',
    icon: SiCodewars,
  },
  {
    id: 4,
    href: '#',
    icon: AiFillLinkedin,
  },
]

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type="left">
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((sn) => (
          <li key={sn.id} className={styles.listItem}>
            <a
              href={sn.href}
              target={sn.href === '#' ? '' : '_blank'}
              rel="noreferrer"
              className={styles.listLink}
            >
              {React.createElement(sn.icon, {
                color: 'black',
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks
