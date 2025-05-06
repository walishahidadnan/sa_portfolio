import { Card, CardContent } from "@/components/ui/card"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <Card className="bg-white/5 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="rounded bg-[#374660] px-2 py-1 text-xs text-white">{period}</span>
        </div>
        <p className="mb-2 text-lg font-medium text-white/90">{company}</p>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
  )
}
