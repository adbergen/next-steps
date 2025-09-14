import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AuthCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
