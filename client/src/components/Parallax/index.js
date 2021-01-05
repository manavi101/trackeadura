import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import styles from './parallax.module.css';
import {
  Typography,
  Box
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'


const Parallax = props => {

    const [offset, setOffset] = useState(0);
    const { image, text, mode, color } = props
    const theme = useTheme();

    useEffect(() => {
        function handleScroll() {
          setOffset(window.pageYOffset);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [offset]);

    return(
        <section className={clsx(mode == 'compact' ? styles.heroCompact : styles.hero )}>
          {image ? <img
            src={image}
            alt="test"
            className={styles.parallax}
            style={{
                //filter: `blur(8px)`,
                transform: `translateY(${offset * 0.5}px)`
            }}
            />
          :
          <Box 
            className={styles.parallax}
            style={{
                //filter: `blur(8px)`,
                backgroundColor:color || theme.palette.secondary.main,
                transform: `translateY(${offset * 0.5}px)`
            }}
          />}
          {
            mode == 'compact' ? 
            <div className={styles.textWrapperCompact}>
            <Typography className={styles.headlineCompact}>{text}</Typography>
            </div>
            :
            <div className={styles.textWrapper}>
            <Typography className={styles.headline}>{text}</Typography>
            {/* <h2 className={styles.subHeadline}>Scrolling effect</h2> */}
            </div>
          }
      </section>
    )
}

const ParallaxOverflow = () => {
    return (
        <section className={styles.overflow} />
    )
}

export { Parallax, ParallaxOverflow };