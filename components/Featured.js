import Image from "next/image"
import { FeatureData } from "./FeatureData"

const Featured = () => {
  return (
    <>
      <section className="max-w-6xl space-y-52">
        <article className="normal-flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="small-blob blobby-blob top-32 left-0 bg-base-animation-purple"></div>
              <div className="small-blob blobby-blob top-32 right-64 bg-base-animation-blue animation-delay-2000"></div>
              <div className="small-blob blobby-blob bottom-24 left-48 bg-base-animation-red animation-delay-4000"></div>
            </div>
            <Image
              src={FeatureData[0].image}
              alt={FeatureData[0].heading}
              width={600}
              height={600}
              objectFit="contain"
              loading="eager"
            />
          </div>
          <div className="max-w-lg">
            <h1 className="text-[36px] font-semibold">
              {FeatureData[0].heading}
            </h1>
            <p className="text-[19px] text-base-muted">
              {FeatureData[0].description}
            </p>
          </div>
        </article>
        <article className="normal-flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14">
          <div className="max-w-lg">
            <h1 className="text-[36px] font-semibold">
              {FeatureData[1].heading}
            </h1>
            <p className="text-[19px] text-base-muted">
              {FeatureData[1].description}
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="small-blob blobby-blob top-32 left-0 bg-base-animation-purple"></div>
              <div className="small-blob blobby-blob top-32 right-64 bg-base-animation-orange animation-delay-2000"></div>
              <div className="small-blob blobby-blob bottom-24 left-48 bg-base-animation-red animation-delay-4000"></div>
            </div>
            <Image
              src={FeatureData[1].image}
              alt={FeatureData[1].heading}
              width={600}
              height={600}
              objectFit="contain"
              loading="eager"
            />
          </div>
        </article>
        <article className="normal-flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="small-blob blobby-blob top-32 left-0 bg-base-animation-blue"></div>
              <div className="small-blob blobby-blob top-32 right-64 bg-base-animation-purple animation-delay-2000"></div>
              <div className="small-blob blobby-blob bottom-24 left-48 bg-base-animation-orange animation-delay-4000"></div>
            </div>
            <Image
              src={FeatureData[2].image}
              alt={FeatureData[2].heading}
              width={600}
              height={600}
              objectFit="contain"
              loading="eager"
            />
          </div>
          <div className="max-w-lg">
            <h1 className="text-[36px] font-semibold">
              {FeatureData[2].heading}
            </h1>
            <p className="text-[19px] text-base-muted">
              {FeatureData[2].description}
            </p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Featured
