import { NavLink } from 'react-router-dom'
import TwitterIcon from '../icons/TwitterIcon'
import InstagramIcon from '../icons/InstagramIcon'
import YouTubeIcon from '../icons/YouTubeIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import MailIcon from '../icons/MailIcon'

export default function Header() {
  return (
    <>
      <div className="flex ">
        {/* İsim ve Slogan */}
        <div className="p-3 m-5 my-auto">
          <NavLink to="/">
            <h2 className="p-2 text-center text-2xl font-bold hover:text-slate-400 rounded-lg">
              Hilmi Gürkan Özkırım
            </h2>
          </NavLink>
          <p className="p-2 text-[#9c9c9c] hover:text-[#383838] rounded-lg">
            Hafızamın Beni Yanıltmaması Adına…
          </p>
        </div>
        {/* Navigation ve Icons */}
        <div className="flex flex-col p-3 m-5">
          {/* Navigation */}
          <nav className="mb-3 my-auto">
            <NavLink to="/" className="hover:bg-slate-400 rounded-lg p-2">
              Anasayfa
            </NavLink>
            <NavLink to="/about" className="hover:bg-slate-400 rounded-lg p-2">
              Hakkımda
            </NavLink>
            <NavLink to="/posts" className="hover:bg-slate-400 rounded-lg p-2">
              Yazılarım
            </NavLink>
            <NavLink
              to="/bookmarks"
              className="hover:bg-slate-400 rounded-lg p-2"
            >
              Yer İmleri
            </NavLink>
          </nav>
          {/* Icons */}
          <div className="flex  justify-end">
            <NavLink
              to=""
              target="_blank"
              className="hover:bg-slate-400 rounded-full p-2"
            >
              <MailIcon />
            </NavLink>
            <NavLink
              to="https://twitter.com/gurkan_ozk"
              target="_blank"
              className="hover:bg-slate-400 rounded-full p-2"
            >
              <TwitterIcon />
            </NavLink>
            <NavLink
              to="https://instagram.com/gurky86"
              target="_blank"
              className="hover:bg-slate-400 rounded-full p-2"
            >
              <InstagramIcon />
            </NavLink>
            <NavLink
              to="https://www.youtube.com/@ithalatislemleri"
              target="_blank"
              className="hover:bg-slate-400 rounded-full p-2"
            >
              <YouTubeIcon />
            </NavLink>
            <NavLink
              to="https://tr.linkedin.com/in/hgurkano"
              target="_blank"
              className="hover:bg-slate-400 rounded-full p-2"
            >
              <LinkedinIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
