import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">

          <a
            href="https://www.linkedin.com/in/akhil-ramesh28"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white "
            target="_blank"
          >
            <SlSocialLinkedin />
          </a>
        </div>
        <p>@ 2026. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
