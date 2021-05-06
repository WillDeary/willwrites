import { SocialIcon } from 'react-social-icons';
export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-xl">Will Writes</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    All content written by me, myself and I
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <SocialIcon url="https://github.com/WillDeary" />
                  </a>
                  <a className="ml-3 text-gray-500">
                      <SocialIcon url="https://www.instagram.com/willdeary" />
                  </a>
                  <a className="ml-3 text-gray-500">
                      <SocialIcon url="https://www.linkedin.com/in/william-deary-017319151/" />
                  </a>
                </span>
            </div>
        </footer>

    )
}