import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <img 
            src={logo} 
            alt="Osumare Logo" 
            className="h-12 mx-auto mb-4"
          />
          <p className="text-lg text-white font-medium max-w-2xl mx-auto">
            The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-red-500 font-bold text-base mb-3">Address</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Survey No. 43, Pathare<br />
              Thube Nagar, Nagar Road<br />
              Kharadi, Pune-14<br />
              Maharashtra, India
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-red-500 font-bold text-base mb-3">Contacts</h3>
            <p className="text-gray-400 text-sm">
              <a href="mailto:hello@osumare.in" className="hover:text-red-500 transition-colors">
                hello@osumare.in
              </a>
              <br />
              <a href="tel:+918459876226" className="hover:text-red-500 transition-colors">
                +91 8459 8762 26
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2023 Osumare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;