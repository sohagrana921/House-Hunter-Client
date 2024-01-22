import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between my-container md:mt-24 mb-8">
      <div>
        <h3 className="text-xl">
          © 2016 - 2023 THE TOLET. All Rights Reserved.
        </h3>
      </div>
      <div className="flex gap-2 text-lg">
        <Link className="hover:underline">Contact Us</Link>
        <p>|</p>
        <Link className="hover:underline">About Us</Link>
        <p>|</p>
        <Link className="hover:underline">Our Team</Link>
        <p>|</p>
        <Link className="hover:underline">Privacy Policy</Link>
        <p>|</p>
        <Link className="hover:underline"> Terms & Condition</Link>
      </div>
    </div>
  );
};

export default Footer;
