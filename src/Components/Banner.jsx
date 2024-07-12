
import PropTypes from 'prop-types';
import styles from './Banner.module.css';

export const Banner = ({ BannerVideo, text }) => {
  return (
    <div className={styles.banner}>
      <video src={BannerVideo} autoPlay muted loop className={styles.bannervideo}></video>
      <div className={styles.titulo}>
        <h2>{text}</h2>
      </div>
    </div>
  );
}

Banner.propTypes = {
  BannerVideo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Banner;
