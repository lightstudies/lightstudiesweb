import PropTypes from 'prop-types'

const ProdibiGalleryEmbed = ({ container, account, openTriggers, seo, className }) => {
  const prodibiData = {
    type: 'thumbnailMediaView',
    settings: {
      container,
      account,
      openTriggers,
      branding: false,
      seo,
      cover: {
        heightMode: '90vh',
        widthMode: 'aspectRatio',
      }
    },
  }
  return (
    <canvas className={className} data-prodibi={JSON.stringify(prodibiData)}></canvas>
  )
}

ProdibiGalleryEmbed.propTypes = {
  container: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  openTriggers: PropTypes.string,
  seo: PropTypes.bool,
  className: PropTypes.string,
}

export default ProdibiGalleryEmbed
