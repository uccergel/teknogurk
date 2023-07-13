import { NavLink } from 'react-router-dom'
import MailIcon from '../icons/MailIcon'
import TwitterIcon from '../icons/TwitterIcon'
import InstagramIcon from '../icons/InstagramIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

export default function Footer() {
  return (
    <footer className="flex flex-col m-auto w-96 h-20 mt-20">
      {/* Icons */}
      <div className="flex m-auto space-x-2">
        <NavLink
          to="https://twitter.com/gurkan_ozk"
          target="_blank"
          className="hover:bg-[#999] bg-[#999]/30 rounded-full p-2"
        >
          <TwitterIcon />
        </NavLink>
        <NavLink
          to="https://instagram.com/gurky86"
          target="_blank"
          className="hover:bg-[#999] bg-[#999]/30 rounded-full p-2"
        >
          <InstagramIcon />
        </NavLink>
        <NavLink
          to="https://www.youtube.com/@ithalatislemleri"
          target="_blank"
          className="hover:bg-[#999] bg-[#999]/30 rounded-full p-2"
        >
          <YouTubeIcon />
        </NavLink>
        <NavLink
          to="https://tr.linkedin.com/in/hgurkano"
          target="_blank"
          className="hover:bg-[#999] bg-[#999]/30 rounded-full p-2"
        >
          <LinkedinIcon />
        </NavLink>
        <NavLink
          to=""
          target="_blank"
          className="hover:bg-[#999] bg-[#999]/30 rounded-full p-2"
        >
          <MailIcon />
        </NavLink>
      </div>
      <div className="m-auto">Copyright© 2023 All rights reserved</div>
    </footer>
  )
}
