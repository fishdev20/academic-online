import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from 'components/MultiSelect'
import { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const countries = [
  { label: 'USA', value: 'usa' },
  { label: 'CAN', value: 'canada' },
  { label: 'GER', value: 'germany' },
  { label: 'AUS', value: 'australia' },
  { label: 'FRA', value: 'france' },
  { label: 'JPN', value: 'japan' },
  { label: 'BRA', value: 'brazil' },
  { label: 'IND', value: 'india' },
  { label: 'CHN', value: 'china' },
  { label: 'MEX', value: 'mexico' },
  { label: 'ITA', value: 'italy' },
  { label: 'RUS', value: 'russia' },
  { label: 'ESP', value: 'spain' },
  { label: 'KOR', value: 'south_korea' },
  { label: 'NLD', value: 'netherlands' },
  { label: 'CHE', value: 'switzerland' },
  { label: 'SWE', value: 'sweden' },
  { label: 'NOR', value: 'norway' },
  { label: 'DNK', value: 'denmark' },
  { label: 'FIN', value: 'finland' },
  { label: 'SGP', value: 'singapore' }
]

const FacultyFilter = () => {
  const [value, setValue] = useState<string[]>([])

  const handleClearFilter = () => {
    setValue([])
  }
  return (
    <div>
      <div className="mb-2">
        <p className="text-xl font-semibold text-red-600">Personal</p>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1" className="ml-2">
            <AccordionTrigger>Position</AccordionTrigger>
            <AccordionContent>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Professor
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Lecturer
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Instructor
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Director
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Assistant
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="ml-2">
            <AccordionTrigger>Seniority</AccordionTrigger>
            <AccordionContent>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  1-10
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  10-20
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  20-30
                </label>
              </div>
              <div className="mb-2  flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  50+
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mb-2">
        <p className="mb-4 text-xl font-semibold text-red-600">Affiliation</p>
        <div className="flex flex-col gap-2">
          <div className="ml-2 font-medium">
            <p>Institution</p>
            <Input
              type="search"
              className="border-solid hover:border-cyan-400 focus:border-cyan-400"
            />
          </div>
          <div className="ml-2 font-medium">
            <p>Department</p>
            <Input
              type="search"
              className="border-solid hover:border-cyan-400 focus:border-cyan-400"
            />
          </div>
          <div className="ml-2 font-medium">
            <p>Classification</p>
            <Input
              type="search"
              className="border-solid hover:border-cyan-400 focus:border-cyan-400"
            />
          </div>
          <div className="ml-2 font-medium">
            <p>State</p>
            <MultiSelector
              values={value}
              onValuesChange={setValue}
              loop={false}
            >
              <MultiSelectorTrigger>
                <MultiSelectorInput
                  placeholder="State"
                  className="focus:border-cyan-400"
                />
              </MultiSelectorTrigger>
              <MultiSelectorContent>
                <MultiSelectorList>
                  {countries.map((country, i) => (
                    <MultiSelectorItem key={i} value={country.value}>
                      {country.value}
                    </MultiSelectorItem>
                  ))}
                </MultiSelectorList>
              </MultiSelectorContent>
            </MultiSelector>
          </div>

          {value.length > 0 && (
            <a
              onClick={handleClearFilter}
              className="flex cursor-pointer items-center gap-[0.75px] font-normal text-red-600 hover:underline dark:text-blue-500"
            >
              <MdOutlineCancel />
              <p>Clear filter</p>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default FacultyFilter
