import { NavLink } from 'react-router-dom'
import MailIcon from '../icons/MailIcon'
import TwitterIcon from '../icons/TwitterIcon'
import InstagramIcon from '../icons/InstagramIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

export default function HeaderAlternative() {
  return (
    <div className="flex justify-between">
      <div className="flex">
        {/* <img src="/hgo-logo.svg" alt="hgo" /> */}
        <div className="flex flex-col p-3 m-5 my-auto space-x-4">
          <NavLink to="/" className="hover:text-[#999] font-semibold">
            H. Gürkan Özkırım
          </NavLink>
          {/* Icons */}
          <div className="flex">
            <NavLink
              to="https://twitter.com/gurkan_ozk"
              target="_blank"
              className="hover:bg-[#999] rounded-full p-2"
            >
              <TwitterIcon />
            </NavLink>
            <NavLink
              to="https://instagram.com/gurky86"
              target="_blank"
              className="hover:bg-[#999] rounded-full p-2"
            >
              <InstagramIcon />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@ithalatislemleri"
              target="_blank"
              className="hover:bg-[#999] rounded-full p-2"
            >
              <YouTubeIcon />
            </NavLink>
            <NavLink
              to="https://tr.linkedin.com/in/hgurkano"
              target="_blank"
              className="hover:bg-[#999] rounded-full p-2"
            >
              <LinkedinIcon />
            </NavLink>
            <NavLink
              to=""
              target="_blank"
              className="hover:bg-[#999] rounded-full p-2"
            >
              <MailIcon />
            </NavLink>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="my-auto">
        <NavLink to="/" className="hover:text-[#999] rounded-lg p-2 ">
          🏠 Anasayfa
        </NavLink>
        <NavLink to="/posts" className="hover:text-[#999] rounded-lg p-2">
          📝 Yazılarım
        </NavLink>
        <NavLink to="/bookmarks" className="hover:text-[#999] rounded-lg p-2">
          Yer İmleri
        </NavLink>
      </nav>
    </div>
  )
}
