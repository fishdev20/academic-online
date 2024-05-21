/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const tabs = [
    {
      id: 'faculty',
      label: 'faculty',
      route: '/explore/faculty',
      icon: 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%205V10.5%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M16.75%207V6.25H15.25V7H16.75ZM8.75%207V6.25H7.25V7H8.75ZM12%202L12.2633%201.29775C12.0936%201.23408%2011.9064%201.23408%2011.7367%201.29775L12%202ZM4%205L3.73666%204.29775C3.44393%204.40753%203.25%204.68737%203.25%205C3.25%205.31263%203.44393%205.59247%203.73666%205.70225L4%205ZM12%208L11.7367%208.70225C11.9064%208.76592%2012.0936%208.76592%2012.2633%208.70225L12%208ZM20%205L20.2633%205.70225C20.5561%205.59247%2020.75%205.31263%2020.75%205C20.75%204.68737%2020.5561%204.40753%2020.2633%204.29775L20%205ZM12.711%2017.0059L12.1778%2016.4785V16.4785L12.711%2017.0059ZM14.2996%2015.3996L14.8328%2015.927L14.8328%2015.927L14.2996%2015.3996ZM15.238%2015.1441L15.4496%2014.4246L15.238%2015.1441ZM9.70045%2015.3996L10.2337%2014.8722L9.70045%2015.3996ZM11.289%2017.0059L11.8222%2016.4785L11.289%2017.0059ZM8.762%2015.1441L8.5504%2014.4246L8.762%2015.1441ZM19.25%2022C19.25%2022.4142%2019.5858%2022.75%2020%2022.75C20.4142%2022.75%2020.75%2022.4142%2020.75%2022H19.25ZM3.25%2022C3.25%2022.4142%203.58579%2022.75%204%2022.75C4.41421%2022.75%204.75%2022.4142%204.75%2022H3.25ZM15.25%207V9H16.75V7H15.25ZM8.75%209V7H7.25V9H8.75ZM12%2012.25C10.2051%2012.25%208.75%2010.7949%208.75%209H7.25C7.25%2011.6234%209.37665%2013.75%2012%2013.75V12.25ZM15.25%209C15.25%2010.7949%2013.7949%2012.25%2012%2012.25V13.75C14.6234%2013.75%2016.75%2011.6234%2016.75%209H15.25ZM11.7367%201.29775L3.73666%204.29775L4.26334%205.70225L12.2633%202.70225L11.7367%201.29775ZM12.2633%208.70225L20.2633%205.70225L19.7367%204.29775L11.7367%207.29775L12.2633%208.70225ZM11.7367%202.70225L19.7367%205.70225L20.2633%204.29775L12.2633%201.29775L11.7367%202.70225ZM12.2633%207.29775L4.26334%204.29775L3.73666%205.70225L11.7367%208.70225L12.2633%207.29775ZM13.2443%2017.5332L14.8328%2015.927L13.7663%2014.8722L12.1778%2016.4785L13.2443%2017.5332ZM15.0264%2015.8637C17.6994%2016.6497%2019.25%2018.3265%2019.25%2020H20.75C20.75%2017.3393%2018.3869%2015.2884%2015.4496%2014.4246L15.0264%2015.8637ZM9.16718%2015.927L10.7557%2017.5332L11.8222%2016.4785L10.2337%2014.8722L9.16718%2015.927ZM4.75%2020C4.75%2018.3265%206.30063%2016.6497%208.97359%2015.8637L8.5504%2014.4246C5.61309%2015.2884%203.25%2017.3393%203.25%2020H4.75ZM19.25%2020V22H20.75V20H19.25ZM3.25%2020V22H4.75V20H3.25ZM10.2337%2014.8722C9.81027%2014.444%209.17106%2014.2421%208.5504%2014.4246L8.97359%2015.8637C9.02255%2015.8493%209.09983%2015.8589%209.16718%2015.927L10.2337%2014.8722ZM14.8328%2015.927C14.9002%2015.8589%2014.9774%2015.8493%2015.0264%2015.8637L15.4496%2014.4246C14.8289%2014.2421%2014.1897%2014.444%2013.7663%2014.8722L14.8328%2015.927ZM12.1778%2016.4785C12.0799%2016.5774%2011.9201%2016.5774%2011.8222%2016.4785L10.7557%2017.5332C11.4407%2018.2259%2012.5593%2018.2259%2013.2443%2017.5332L12.1778%2016.4785Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
    },
    {
      id: 'institution',
      label: 'institution',
      route: '/explore/institution',
      icon: 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9%2020V10C9%208.89543%209.89543%208%2011%208H13C14.1046%208%2015%208.89543%2015%2010V20M9%2020C9%2021.1046%209.89543%2022%2011%2022H13C14.1046%2022%2015%2021.1046%2015%2020M9%2020V14C9%2012.8954%208.10457%2012%207%2012H5C3.89543%2012%203%2012.8954%203%2014V20C3%2021.1046%203.89543%2022%205%2022H7C8.10457%2022%209%2021.1046%209%2020ZM15%2020V16C15%2014.8954%2015.8954%2014%2017%2014H19C20.1046%2014%2021%2014.8954%2021%2016V20C21%2021.1046%2020.1046%2022%2019%2022H17C15.8954%2022%2015%2021.1046%2015%2020Z%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M11.5245%201.96353C11.6741%201.50287%2012.3259%201.50287%2012.4755%201.96353L12.6324%202.4463C12.6993%202.65232%2012.8913%202.7918%2013.1079%202.7918H13.6155C14.0999%202.7918%2014.3013%203.4116%2013.9094%203.6963L13.4988%203.99468C13.3235%204.122%2013.2502%204.34768%2013.3171%204.5537L13.474%205.03647C13.6237%205.49713%2013.0964%205.88019%2012.7046%205.59549L12.2939%205.29712C12.1186%205.1698%2011.8814%205.1698%2011.7061%205.29712L11.2954%205.59549C10.9036%205.88019%2010.3763%205.49713%2010.526%205.03647L10.6829%204.5537C10.7498%204.34768%2010.6765%204.122%2010.5012%203.99468L10.0906%203.6963C9.69871%203.4116%209.90009%202.7918%2010.3845%202.7918H10.8921C11.1087%202.7918%2011.3007%202.65232%2011.3676%202.4463L11.5245%201.96353Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
    },
    {
      id: 'venue',
      label: 'venue',
      route: '/explore/venue',
      icon: 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2014C13.1046%2014%2014%2013.1046%2014%2012C14%2010.8954%2013.1046%2010%2012%2010C10.8954%2010%2010%2010.8954%2010%2012C10%2013.1046%2010.8954%2014%2012%2014ZM12%2014V22M7%206H17C18.1046%206%2019%205.10457%2019%204C19%202.89543%2018.1046%202%2017%202H7C5.89543%202%205%202.89543%205%204C5%205.10457%205.89543%206%207%206ZM6.99197%206H17.008L18.7221%2011.3282C19.2189%2012.5829%2019.0429%2013.9811%2018.2476%2015.0968L12.9519%2021.526C12.5014%2022.158%2011.4986%2022.158%2011.0481%2021.526L5.75238%2015.0968C4.95707%2013.9811%204.78105%2012.5829%205.27795%2011.3282L6.99197%206Z%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
    },
    {
      id: 'concept',
      label: 'concept',
      route: '/explore/concept',
      icon: 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8%2018H16M8%2018C8%2020.2091%209.79086%2022%2012%2022C14.2091%2022%2016%2020.2091%2016%2018M8%2018V15.7887C8%2015.1349%207.66659%2014.5363%207.19153%2014.0871C5.84201%2012.8111%205%2011.0039%205%209C5%205.13401%208.13401%202%2012%202C15.866%202%2019%205.13401%2019%209C19%2011.0039%2018.158%2012.8111%2016.8085%2014.0871C16.3334%2014.5363%2016%2015.1349%2016%2015.7887V18M10%209L12%2011M12%2011L14%209M12%2011V18%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'
    }
  ]
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [selectedOption, setSelectedOption] = useState('all')
  const location = useLocation()
  const { pathname } = location
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const selected = tabs.find((tab) => pathname.includes(tab.id))
    if (selected) {
      setActiveTab(selected.id)
    } else {
      setActiveTab('explore')
    }
  }, [tabs, pathname])

  useEffect(() => {
    if (!activeTab) return
    setSelectedOption(activeTab)
  }, [activeTab])

  const onChangeSearch = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <div className="z-40 mx-auto w-full max-w-screen-2xl bg-white p-4">
        <div className="flex h-full items-center justify-between bg-white">
          <Link className="flex items-center" to={'/'}>
            <img
              src="https://academic.online/static/media/logo4.f83fb61768e8c265f7d4.png"
              className="w-20 lg:w-32"
            />
          </Link>
          <ul
            className={`absolute left-0 z-[-1] w-full flex-row bg-white pb-4 shadow-md transition-all duration-500 ease-in lg:static lg:z-10 lg:flex lg:w-auto lg:items-center lg:gap-4 lg:pb-0 lg:shadow-none ${
              open ? 'top-20' : 'top-[-250px]'
            }`}
          >
            {tabs.map((tab) => {
              return (
                <Link
                  key={tab.id}
                  to={tab.route}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setOpen(!open)
                    setSelectedOption(tab.id)
                  }}
                  className={`${
                    activeTab === tab.id
                      ? 'bg-green-500 lg:bg-white'
                      : 'hover:bg-green-500'
                  } relative flex w-full min-w-max items-center rounded-sm  p-4 text-base font-medium text-black transition `}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 hidden rounded-sm bg-green-500 mix-blend-multiply lg:block"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6
                      }}
                    />
                  )}
                  <div className="flex">
                    <img src={tab.icon} alt="img" />
                    <p>{tab.label}</p>
                  </div>
                </Link>
              )
            })}
            <div className="relative m-4 flex gap-2 rounded-sm border border-slate-400 p-1 md:hidden">
              <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                <IoSearch className="size-5 fill-slate-600" />
              </span>
              <Input
                type="search"
                placeholder="Type to search"
                className="rounded-none border-none pl-6 outline-none focus:outline-none"
              />
              <Select value={selectedOption} onValueChange={onChangeSearch}>
                <SelectTrigger className="w-[120px] focus:outline-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="institution">Institution</SelectItem>
                  <SelectItem value="venue">Venue</SelectItem>
                  <SelectItem value="concept">Concept</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ul>
          <div className="relative hidden gap-2 rounded-sm border border-slate-400 p-1 lg:flex">
            <span className="absolute inset-y-0 left-0 flex items-center pl-1">
              <IoSearch className="size-5 fill-slate-600" />
            </span>
            <Input
              type="search"
              placeholder="Type to search"
              className="rounded-none border-none pl-6 outline-none focus:outline-none"
            />
            <Select value={selectedOption} onValueChange={onChangeSearch}>
              <SelectTrigger className="w-[120px] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="faculty">Faculty</SelectItem>
                <SelectItem value="institution">Institution</SelectItem>
                <SelectItem value="venue">Venue</SelectItem>
                <SelectItem value="concept">Concept</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Popover>
              <PopoverTrigger>
                <IoSearch className="hidden size-8 fill-slate-600 md:block" />
              </PopoverTrigger>
              <PopoverContent
                side="top"
                className="absolute -right-4 -top-2 w-96 p-2"
              >
                <div className="relative flex gap-2 p-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                    <IoSearch className="size-5 fill-slate-600" />
                  </span>
                  <Input
                    autoFocus
                    type="search"
                    placeholder="Type to search"
                    className="rounded-none border-none pl-6 outline-none focus:outline-none"
                  />
                  <Select value={selectedOption} onValueChange={onChangeSearch}>
                    <SelectTrigger className="w-[120px] focus:outline-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="institution">Institution</SelectItem>
                      <SelectItem value="venue">Venue</SelectItem>
                      <SelectItem value="concept">Concept</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </PopoverContent>
            </Popover>
            <div className="cursor-pointer" onClick={toggleMenu}>
              {open ? (
                <IoClose className="size-10 fill-slate-600" />
              ) : (
                <IoMenu className="size-10 fill-slate-600" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
