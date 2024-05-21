import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Link } from 'react-router-dom'
interface FacultyCardProps {
  id: string
  name: string
  institution: string
  expertise: string[]
}
const FacultyCard = (props: FacultyCardProps) => {
  const { expertise, institution, name, id } = props
  return (
    <Link to={`/explore/faculty/${id}`}>
      <Card className="size-full cursor-pointer bg-slate-100/50 p-1 hover:bg-slate-100">
        <CardContent className="w-full p-2">
          <div className="flex w-full items-start gap-2">
            <Avatar className="size-14 rounded-sm">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/1309537?v=4"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <label className="text-lg font-bold text-green-500">{name}</label>
              <p className="text-xs font-semibold">{institution}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-2">
          <div className="flex w-full flex-wrap gap-2">
            {expertise.map((item, idx) => {
              return (
                <Badge
                  className="line-clamp-1 rounded-sm bg-cyan-100 text-xs font-normal text-black hover:bg-cyan-100"
                  key={idx}
                >
                  {item}
                </Badge>
              )
            })}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default FacultyCard
