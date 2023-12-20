export const GetApp = () => {
  return (
    <section className="bg-[#3f4079] bg-[url('https://www.ansonika.com/findoctor/menu_2/img/hero_bg_1.svg')] bg-fixed py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5 lg:px-0">
        <div>
          <img
            src="https://www.ansonika.com/findoctor/menu_2/img/app_img.svg"
            alt=""
            className="w-[400px] lg:w-[500px] h-auto"
          />
        </div>
        <div className="lg:w-1/2 mt-20 lg:mt-0">
          <p className="mb-2 text-bold text-gray-500">APPLICATION</p>
          <h2 className="font-bold text-4xl text-white mb-4">
            Download <span className="text-primary">FindMyDoctor</span> App Now!
          </h2>
          <p className="text-base mb-4 text-white">
            Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu, errem
            percipit ponderum no eos. Has eu mazim sensibus. Ad nonumes
            dissentiunt qui, ei menandri electram eos. Nam iisque consequuntur
            cu.
          </p>
          <div className="flex gap-4 mt-10">
            <img
              src="https://www.ansonika.com/findoctor/menu_2/img/apple_app.png"
              alt=""
            />
            <img
              src="https://www.ansonika.com/findoctor/menu_2/img/google_play_app.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
