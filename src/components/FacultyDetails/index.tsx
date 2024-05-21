import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const FacultyDetails = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-3">
        <Card>
          <CardHeader className="flex items-center justify-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardTitle>Minh Nguyen</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <img
                className="w-6"
                src="data:image/png;base64,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"
              />
              <p>Ohio State University</p>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-2">
              <img
                className="w-6"
                src="data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.238%2010.5147V11.5014C20.238%2012.7277%2019.244%2013.7218%2018.0177%2013.7218C16.7914%2013.7218%2015.7973%2012.7277%2015.7973%2011.5014V10.5147L17.3414%2011.2009C17.7719%2011.3923%2018.2634%2011.3923%2018.694%2011.2009L20.238%2010.5147ZM14.4096%209.89794V12.3341C14.4096%2012.5641%2014.2232%2012.7505%2013.9933%2012.7505C13.7634%2012.7505%2013.577%2012.5641%2013.577%2012.3341V9.52734C13.582%209.52995%2013.5872%209.53244%2013.5925%209.5348L14.4096%209.89794Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M22.4428%209.43735L18.694%207.77121C18.2635%207.57984%2017.772%207.57984%2017.3414%207.77121L13.5926%209.43735C13.3728%209.53502%2013.3728%209.84692%2013.5926%209.9446L17.3414%2011.6107C17.772%2011.8021%2018.2635%2011.8021%2018.694%2011.6107L22.4428%209.9446C22.6626%209.84692%2022.6626%209.53502%2022.4428%209.43735Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.317%2018.5722H21.3483C21.9615%2018.5722%2022.4585%2018.0752%2022.4585%2017.462C22.4585%2016.2591%2021.3723%2015.2245%2019.8152%2014.7666C19.6293%2014.712%2019.4305%2014.7707%2019.2942%2014.9084L18.4125%2015.8C18.1952%2016.0197%2017.8404%2016.0197%2017.6231%2015.8L16.7413%2014.9084C16.6051%2014.7707%2016.4063%2014.712%2016.2204%2014.7666C15.6749%2014.927%2015.1872%2015.1582%2014.7838%2015.4426C15.745%2016.3222%2016.3131%2017.4032%2016.317%2018.5722Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.782%208.20718V9.71261C11.782%2011.5833%2010.2655%2013.0998%208.39476%2013.0998C6.52405%2013.0998%205.00754%2011.5833%205.00754%209.71261V8.20718L7.363%209.25406C8.01986%209.546%208.76966%209.546%209.42652%209.25406L11.782%208.20718ZM2.89053%207.26629V10.9828C2.89053%2011.3336%202.60618%2011.6179%202.25542%2011.6179C1.90467%2011.6179%201.62032%2011.3336%201.62032%2010.9828V6.70093C1.62804%206.70491%201.63595%206.7087%201.64406%206.71231L2.89053%207.26629Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M15.1455%205.93844L9.42659%203.39669C8.76973%203.10475%208.01994%203.10475%207.36307%203.39669L1.64414%205.93844C1.30888%206.08744%201.30888%206.56326%201.64414%206.71226L7.36307%209.25401C8.01994%209.54595%208.76973%209.54595%209.42659%209.25401L15.1455%206.71226C15.4808%206.56326%2015.4808%206.08744%2015.1455%205.93844Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M6.44747%2014.2851L7.79265%2015.6453C8.12409%2015.9804%208.66541%2015.9804%208.99685%2015.6453L10.342%2014.2851C10.5498%2014.075%2010.8532%2013.9854%2011.1367%2014.0688C13.5121%2014.7673%2015.1692%2016.3456%2015.1692%2018.1807C15.1692%2019.1161%2014.4109%2019.8743%2013.4756%2019.8743H3.31392C2.37856%2019.8743%201.62031%2019.1161%201.62031%2018.1807C1.62031%2016.3456%203.27739%2014.7673%205.65279%2014.0688C5.93631%2013.9854%206.23967%2014.075%206.44747%2014.2851Z%22%20fill%3D%22black%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
              />
              <p>Biology</p>
            </div>
            <Separator className="my-4" />
            <div className="flex items-center gap-2">
              <img
                className="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL9SURBVHgB7dzhddMwFIbhFyYoG2iEjqARYAOP0A1qJqAbmA0YwWwAG5gNwgbGwvaJ66aJrMiO5HzPOfcPpEm5n7lKFCUgIiIiIiIiIiIiIiIiIiKSDtPVc1dNV+1Qv7qqhr+Tldiuao5Nf6+q4bYSicWv8fNyP1MgQR54O2ZCy91HMdynXDA2/sD1jT8VRIXWiZMsfXPajUpBDCxh8z1Wucf+zJ1xY+aJ/qljm0g13MGCveZ8jxmE+x0NO/LY1TfSbvypqsg8CMtt53us+kFmL+wK9tH4eTUkvE7kMN9jB2FIgOF+Gj8v92+uuFEQln2OmdCq2GidsKjx56pmpXXCEmdj7F6qIeIr7EegVQWVJYIaaFVBVXPBBy5rkVB/u/p07gYf8bsTCXPxTSCfAH4jq/EJ4CuyGp8Afnb1pas/yM0V6FnR0lqF7eo70Kr+V83GAYwMfRD3uhlXctyMu0kAI0M/nhrya2Ro4+dPMW8awFTBPoOoOb/RlkwAI0v/dl4Ozb3UeMtlyQUwMuS3YLsx80K/Eekr2QBGhn52NqTdePc7hpwjTT6AqYK0gnCHxNxhsWsO8GYVwMi9aVFzu8a7x7bEkWUAI8O260RF/Pdwsw5gZOiDaIjf9Gvmu49kA7As55pUEO8DGiVhjbcLbptsAGMTCsIUhH9EybLcw+wxfSUdwPRqLAg7zGTxWyeuafwzb/e1fGURwHwhNCxn6IOYfr5gHDOG5QznT2/7yi6AaRCW7Vn8RpuvbAMYy13RBeuzLFtTfGUfQIx14j3XnN72tZsApkFUXBdEjGPzvnYXwLRcEEt2Ji3xtsJ9nQr5QAIa4jTC1bhpZnn9wsoMf/ZM3L2lJQ0sT/z8CwmI2ZCtq2YZ1/ADx22PJJTk1fRpPbEDblTk1PRpGXaiJq/Gu6rYEUNeZ4cO7PDLPNw8zSWAXcz+U0rSb37JzrmrK8VxdGDHV/6cIa2zQjV3+gVOhv6qcw3Y8n9FMzxmib5LTkREREREREREREREREREVvIPqaGw7SDXNlkAAAAASUVORK5CYII="
              />
              <p>Professor Pediatrics</p>
            </div>
            <Separator className="my-4" />
            <div className="flex items-start gap-2">
              <img
                className="w-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgB3ZU/S8NAGMbfK0UJ2KmTLtalTgWhUyYFCX6EfAa/Rr6En0bQ6aaC0Cm6RIhO6hKRdIrPK3eS2PuTplnsDx7uyOXeJ7ncPSH67wjXYFVVe2im0BE0hkZq6B0qoEwI8djJAMUnaM6hfXLDRgubkbAUD9HMaDPYZOE1QPE5mjl1YwkTWb8w+FN8ukVxZqaW1mzgKx7H8SWL3FyozfHDUHfU049cM6WUZ1iCCt1bx21c/BRaNgzACXkIw/CB2nFoMjjwzUqSROZ5HpCfse4MTRdtRFF0HQTBV5qmN55bf5d6QBtSlmWbNyCTQUH98WYy+KD++DQZvFB/ZLpT/8gcVnzQrOHWcpsW9eBrZBEO2zGaK9qOu7pBYxdh4JnUAenIWmzb4rpLoq4lqdVAmehkdeYTWEH3KJ6ZBoVnsjaaUPOXyWeGf5uv0BOKr2hn+QYBp2Gws4B+sgAAAABJRU5ErkJggg=="
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-12 flex-col gap-y-2 lg:col-span-9">
        <div className="mb-4 w-full rounded-md border-2 p-2">
          <img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22300%22%3E%3Cg%20transform%3D%22translate(400%2C150)%22%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(0%2C0)%20rotate(0)%22%20style%3D%22font-size%3A%2040px%3B%20fill%3A%20rgb(255%2C%20127%2C%2014)%3B%20opacity%3A%201%3B%22%3Ehematology%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(-46%2C34)%20rotate(0)%22%20style%3D%22font-size%3A%2032px%3B%20fill%3A%20rgb(148%2C%20103%2C%20189)%3B%20opacity%3A%201%3B%22%3Eoncology%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(34%2C-40)%20rotate(0)%22%20style%3D%22font-size%3A%2032px%3B%20fill%3A%20rgb(148%2C%20103%2C%20189)%3B%20opacity%3A%201%3B%22%3Eimmunology%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(136%2C40)%20rotate(0)%22%20style%3D%22font-size%3A%2032px%3B%20fill%3A%20rgb(127%2C%20127%2C%20127)%3B%20opacity%3A%201%3B%22%3Ecancer%20research%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(-34%2C75)%20rotate(0)%22%20style%3D%22font-size%3A%2032px%3B%20fill%3A%20rgb(188%2C%20189%2C%2034)%3B%20opacity%3A%201%3B%22%3Emedical%20biology%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(-164%2C-42)%20rotate(0)%22%20style%3D%22font-size%3A%2023px%3B%20fill%3A%20rgb(140%2C%2086%2C%2075)%3B%20opacity%3A%201%3B%22%3Eimmunochemistry%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(-179%2C-14)%20rotate(0)%22%20style%3D%22font-size%3A%2023px%3B%20fill%3A%20rgb(127%2C%20127%2C%20127)%3B%20opacity%3A%201%3B%22%3Ecytogenetics%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(-186%2C29)%20rotate(0)%22%20style%3D%22font-size%3A%2023px%3B%20fill%3A%20rgb(44%2C%20160%2C%2044)%3B%20opacity%3A%201%3B%22%3Egene%20therapy%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(192%2C-3)%20rotate(0)%22%20style%3D%22font-size%3A%2023px%3B%20fill%3A%20rgb(255%2C%20127%2C%2014)%3B%20opacity%3A%201%3B%22%3Evirology%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(65%2C-75)%20rotate(0)%22%20style%3D%22font-size%3A%2015px%3B%20fill%3A%20rgb(140%2C%2086%2C%2075)%3B%20opacity%3A%201%3B%22%3Emachine%20learning%3C%2Ftext%3E%3Ctext%20text-anchor%3D%22middle%22%20transform%3D%22translate(-61%2C-77)%20rotate(0)%22%20style%3D%22font-size%3A%2015px%3B%20fill%3A%20rgb(44%2C%20160%2C%2044)%3B%20opacity%3A%201%3B%22%3Egastroenterology%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
        </div>
        <Tabs defaultValue="Publications" className="w-full">
          <TabsList className="w-full max-w-[340px] overflow-auto">
            <TabsTrigger value="Publications">Publications</TabsTrigger>
            <TabsTrigger value="Awards">Awards</TabsTrigger>
            <TabsTrigger value="Experiences">Experiences</TabsTrigger>
            <TabsTrigger value="Peers">Peers</TabsTrigger>
          </TabsList>
          <TabsContent
            value="Publications"
            className="w-full rounded-md border-2 p-2"
          >
            {/* <div className="w-full rounded-sm border-2 p-2"> */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            {/* </div> */}
          </TabsContent>
          <TabsContent
            value="Awards"
            className="w-full rounded-sm border-2 p-2"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </TabsContent>
          <TabsContent
            value="Experiences"
            className="w-full rounded-sm border-2 p-2"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </TabsContent>
          <TabsContent value="Peers" className="w-full rounded-sm border-2 p-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default FacultyDetails
