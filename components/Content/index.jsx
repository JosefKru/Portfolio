import React from 'react'
import styles from './index.module.scss'
import cl from 'classnames'
import SanityBlockContent from '@sanity/block-content-to-react'
import { config } from '../../lib/client'

const Content = ({ className, body }) => {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }
  return (
    <div className={cl(styles.content, className)}>
      <SanityBlockContent
        blocks={body}
        imageOptions={{ w: 1000, h: 750, fit: 'max' }}
        projectId={config.projectId}
        dataset={config.dataset}
      />
    </div>
  )
}

export default Content
