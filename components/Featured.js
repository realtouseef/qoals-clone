/* eslint-disable @next/next/no-img-element */
import { FeatureData } from "./FeatureData"

const Featured = () => {
  return (
    <>
      <section className="max-w-6xl space-y-52">
        <article className="normal-flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="blobby-blob -top-16 left-16 bg-base-animation-purple"></div>
              <div className="blobby-blob top-32 right-64 bg-base-animation-blue animation-delay-2000"></div>
              <div className="blobby-blob -bottom-8 left-48 bg-base-animation-red animation-delay-4000"></div>
            </div>
            <img
              src={FeatureData[0].image}
              alt={FeatureData[0].heading}
              className="shadow-2xl"
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
              <div className="w-60 h-60 blobby-blob -top-16 left-16 bg-base-animation-purple"></div>
              <div className="w-60 h-60 blobby-blob top-32 right-64 bg-base-animation-orange animation-delay-2000"></div>
              <div className="w-60 h-60 blobby-blob -bottom-8 left-48 bg-base-animation-red animation-delay-4000"></div>
            </div>
            <img
              src={FeatureData[1].image}
              alt={FeatureData[1].heading}
              className="shadow-2xl"
            />
          </div>
        </article>
        <article className="normal-flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-14">
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="w-60 h-60 blobby-blob -top-16 left-16 bg-base-animation-blue"></div>
              <div className="w-60 h-60 blobby-blob top-32 right-64 bg-base-animation-purple animation-delay-2000"></div>
              <div className="w-60 h-60 blobby-blob -bottom-8 left-48 bg-base-animation-orange animation-delay-4000"></div>
            </div>
            <img
              src={FeatureData[2].image}
              alt={FeatureData[2].heading}
              className="shadow-2xl"
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
