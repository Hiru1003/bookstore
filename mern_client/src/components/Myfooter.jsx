import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Myfooter = () => {
  return (
    <Footer bgDark className="w-full">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 py-8 md:grid-cols-4 px-4 lg:px-24">
          <div>
            <Footer.Title title="Company" className="text-2xl" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xl">About</Footer.Link>
              <Footer.Link href="#" className="text-xl">Careers</Footer.Link>
              <Footer.Link href="#" className="text-xl">Brand Center</Footer.Link>
              <Footer.Link href="#" className="text-xl">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" className="text-2xl"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xl">Discord Server</Footer.Link>
              <Footer.Link href="#" className="text-xl">Twitter</Footer.Link>
              <Footer.Link href="#" className="text-xl">Facebook</Footer.Link>
              <Footer.Link href="#" className="text-xl">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" className="text-2xl"/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xl">Privacy Policy</Footer.Link>
              <Footer.Link href="#" className="text-xl">Licensing</Footer.Link>
              <Footer.Link href="#" className="text-xl">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className="text-2xl" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="text-xl">iOS</Footer.Link>
              <Footer.Link href="#" className="text-xl">Android</Footer.Link>
              <Footer.Link href="#" className="text-xl">Windows</Footer.Link>
              <Footer.Link href="#" className="text-xl">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 py-6 flex items-center justify-center px-24"> {/* Adjust parent div */}
        <div className="flex space-x-6">
         <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default Myfooter
