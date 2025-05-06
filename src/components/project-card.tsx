import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
}

export function ProjectCard({ title, description, technologies, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-white/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-white/80">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="bg-[#374660] hover:bg-[#252078]">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
