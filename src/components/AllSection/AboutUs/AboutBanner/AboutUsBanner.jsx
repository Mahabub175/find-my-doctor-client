export const AboutUsBanner = ({ sectionData }) => {
  return (
    <section className="container mx-auto px-5 lg:px-0">
      <div className="text-center">
        <p className="text-4xl font-bold mb-4">{sectionData?.title}</p>
        <p>{sectionData?.description}</p>
      </div>
      <div className="mt-10 lg:mt-20 lg:flex justify-between gap-32 items-start">
        <div>
          <img src={sectionData?.image} alt="" />
        </div>
        <div className="lg:w-4/6 flex flex-col gap-6 text-secondary mt-10 lg:mt-0">
          <p>{sectionData?.quoteOne}</p>
          <p>{sectionData?.quoteTwo}</p>
          <p>{sectionData?.name}</p>
        </div>
      </div>
    </section>
  );
};
