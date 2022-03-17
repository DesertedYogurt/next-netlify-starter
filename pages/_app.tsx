import '../styles/styles.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useStore } from '../lib/state'

function MyApp ({ Component, pageProps }: AppProps) {
  const { setMousePos } = useStore(state => state)

  useEffect(() => {
    // mouse
    const mouseMoveHandler = (e:any) => {
      setMousePos({
        mouseX: e.pageX,
        mouseY: e.pageY
      })
    }
    window.addEventListener('mousemove', mouseMoveHandler)
  }, [])

  return <div className='theme-dark'>
    <Component
      {...pageProps}
    />
  </div>
}

export default MyApp
