import NextImage from 'next/image'

export const Image = (props:any) => {
  const { height, width, src, alt, style, className } = props
  return <div

    style={{
      height,
      width,
      ...style
    }}
    className={className}
  >
    <NextImage
      layout="intrinsic"
      height={height}
      width={width}
      src={src}
      alt={alt}
    />
  </div>
}
