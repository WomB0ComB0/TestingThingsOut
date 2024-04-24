"use client"
import Image from 'next/image'

interface ImageKitLoaderProps {
  src: string
  width: number
  quality?: number
}

const imageKitLoader = ({
  src,
  width,
  quality
}: ImageKitLoaderProps) => {
  console.log("src", src);
  console.log("width", width);
  console.log("quality", quality);
  if (src[0] === "/") src = src.slice(1)

  const params = [`w-${width}`]
  if (quality) params.push(`q-${quality}`)

  const paramsString = params.join(',')

  let urlEndPoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}`

  if (urlEndPoint[urlEndPoint.length - 1] === "/") urlEndPoint = urlEndPoint.substring(0, urlEndPoint.length - 1)

  return `${urlEndPoint}/${src}?tr=${paramsString}`
}

export default function Example2() {
  return (
    <main>
      <div
        className={`
          max-w-[900px] mx-auto bg-white min-h-screen pb-10
        `}
      >
        <div
          className={`  
            relative w-full h-[400px]
          `}
        >
          <Image 
            src={`stockprices`}
            loader={imageKitLoader}
            className={`object-cover`}
            alt={`Stock prices photo`}
            fill
            sizes={``}
            quality
          />
        </div>
      </div>
    </main>
  )
}