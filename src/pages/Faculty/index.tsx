import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import FacultyCard from 'components/FacultyCard'
import FacultyFilter from 'components/FacultyFilter'
import { researchProfiles } from 'dummy-data'
import { FaFilter } from 'react-icons/fa'
import { Outlet, useParams } from 'react-router-dom'

const Faculty = () => {
  const { id } = useParams()

  if (id) {
    return <Outlet />
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <FaFilter className="block size-6 cursor-pointer fill-slate-400 hover:fill-slate-600 lg:hidden" />
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader className="text-left">
              <SheetTitle>Filter</SheetTitle>
              <SheetDescription>
                <FacultyFilter />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Input
          type="search"
          placeholder="Type to search"
          className="size-full border-2 border-solid hover:border-cyan-400 focus:border-cyan-400"
        />
      </div>
      <div className="flex justify-between gap-10">
        <div className="mt-8 hidden w-3/12 lg:block">
          <FacultyFilter />
        </div>
        <div className="mx-auto mt-8 flex w-full lg:w-9/12">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {researchProfiles.map((profile, idx) => {
              return (
                <FacultyCard
                  key={idx}
                  id={profile.id}
                  name={profile.name}
                  institution={profile.institution}
                  expertise={profile.expertise}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faculty
