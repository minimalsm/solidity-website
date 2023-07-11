import Image from 'next/image'

//@ts-ignore
const CustomImage = ({ src, ...props }) => {
  const assetPrefix = process.env.NODE_ENV === 'production' ? '/solidity-website' : ''
  
  //@ts-ignore
  return <Image src={`${assetPrefix}${src}`} {...props} />
}

export default CustomImage