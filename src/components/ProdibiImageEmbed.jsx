import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useScript } from '../hooks'

const ProdibiImageEmbed = ({ id, account, height, width, className }) => {
  const prodibiData = {
    id,
    account,
    width,
    height,
    branding: false,
    widthMode: 'aspectRatio',
    heightMode: '100vh',
    smartX: '0.48',
    smartY: '0.67',
  }

  const prodibiScript = useScript(
    '../prodibi.embed.2.0.min.js'
  )

  useEffect(() => {
    if (prodibiScript === 'ready') {

      window.prodibiAsync = window.prodibiAsync || []

      window.prodibiAsync.push({
        type: 'settings',
        settings: { account },
      })

      // Not sure why we need this but found here:
      // https://github.com/webpack/webpack-dev-server/issues/792#issuecomment-410139604
      // window.self = window
    }
  }, [account, prodibiScript])

  return (
    <canvas className={className} data-prodibi={JSON.stringify(prodibiData)} />
  )
}

ProdibiImageEmbed.propTypes = {
  id: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
}

export default ProdibiImageEmbed
