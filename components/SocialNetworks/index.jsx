import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import ScreenEgg from '../ScreenEgg'
import { FaTelegram, FaGithub, FaPrint } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

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
    href: 'https://dmitrov.hh.ru/applicant/resumes/view?resume=9fdec062ff0978f95d0039ed1f41766972754e&print=true',
    icon: FaPrint,
  },
]

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg type='left'>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((sn) => (
          <li key={sn.id} className={styles.listItem}>
            <a
              href={sn.href}
              target={sn.href === '#' ? '' : '_blank'}
              rel='noreferrer'
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
