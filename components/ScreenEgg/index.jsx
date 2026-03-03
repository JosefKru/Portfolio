import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'
import styles from './index.module.scss'
import cl from 'classnames'

const ScreenEgg = ({ className, type, children }) => {
  const isLeft = type !== 'right'
  const [scope, animate] = useAnimate()

  const hiddenX = isLeft ? 'calc(-100% + 1.9rem)' : 'calc(100% - 1.9rem)'
  useEffect(() => {
    const peekOut = isLeft ? 'calc(-100% + 4rem)' : 'calc(100% - 4rem)'
    const hiddenPos = isLeft ? 'calc(-100% + 1.9rem)' : 'calc(100% - 1.9rem)'
    const initialDelay = isLeft ? 5000 : 15000
    let seen = false

    const pulse = async () => {
      if (seen) return
      await animate(scope.current, { x: peekOut }, { duration: 0.4, ease: 'easeInOut' })
      await animate(scope.current, { x: hiddenPos }, { duration: 0.4, ease: 'easeInOut' })
      await animate(scope.current, { x: peekOut }, { duration: 0.4, ease: 'easeInOut' })
      await animate(scope.current, { x: hiddenPos }, { duration: 0.4, ease: 'easeInOut' })
    }

    let interval
    const timeout = setTimeout(() => {
      pulse()
      interval = setInterval(pulse, 20000)
    }, initialDelay)

    const el = scope.current
    const handleMouseEnter = () => { seen = true }
    el.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
      el.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isLeft, animate, scope])
 
  return (
    <motion.div
      ref={scope}
      className={cl(className, styles.screenEgg, isLeft ? styles.screenEggLeft : styles.screenEggRight)}
      initial={{ x: hiddenX }}
      whileHover={{ x: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default ScreenEgg
