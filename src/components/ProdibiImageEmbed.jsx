import PropTypes from 'prop-types'

const ProdibiImageEmbed = ({ id, account, title, height, width, className }) => {
  const prodibiData = {
    id,
    account,
    title,
    width,
    height,
    branding: false,
    widthMode: 'aspectRatio',
    heightMode: '100vh',
  }

  return (
    <canvas className={className} data-prodibi={JSON.stringify(prodibiData)} ></canvas>
  )
}

ProdibiImageEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  account: PropTypes.string,
  title: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default ProdibiImageEmbed
