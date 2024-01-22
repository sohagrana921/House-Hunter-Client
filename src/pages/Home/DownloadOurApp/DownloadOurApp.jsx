const DownloadOurApp = () => {
  return (
    <div className="flex items-center my-container justify-between bg-white rounded">
      <div>
        <h1 className="text-3xl font-semibold">Download our apps</h1>
        <p className="text-lg py-4">
          Our android application is available now. <br /> Download our apps for
          better support. <br /> We are working for ios device. <br /> Please be
          patient. <br /> Thank you. ❤️
        </p>

        <button>
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt=""
            className="w-1/3"
          />
        </button>
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-vector/advertising-banner-downloading-mobile-app-mockup-smartphone-with-empty-screen-your-app-download-our-app-mobile-phone-download-buttons-with-scan-qr-code-template_735449-237.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DownloadOurApp;
