import SocialIcons from './SocialIconsContainer';

const Footer = () => {
    // Get the current year
    const date = new Date();
    const year = date.getFullYear();


    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">

                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">

                            <SocialIcons />

                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-slate-200 text-sm font-semibold mb-2">Quick Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-slate-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#about">About me</a>
                                    </li>
                                    {/* <li>
                                        <a className="text-slate-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https:///">Blog</a>
                                    </li> */}
                                    <li>
                                        <a className="text-slate-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/pranavbafna586">Github</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-slate-200  text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-slate-300 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div> */}
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-slate-200 font-semibold py-1">
                            Copyright © <span id="get-current-year">{year}</span>
                            <a href="https://codewithpres.hashnode.dev" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                                {/* Notus JS by <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>. */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
