import { ProdibiImageEmbed } from '../components'
import { PRODIBI_ACCOUNT } from '../constants'

export const PhotoPage = () => {
  return (
    <div>
      <h1>PhotoPage</h1>

      <ProdibiImageEmbed account={PRODIBI_ACCOUNT} id="0kj72yq82204qv6" height={6150} width={9609} />
    </div>
  )
}
