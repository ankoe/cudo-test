import Card from "../Card";

export default function CardAttendance({
    children, title
  }: {
    children: React.ReactNode
    title: string
  }, ) {
      
    return <Card>
        <h4 className="capitalize text-sm font-semibold space-x-1 text-gray-600">
            <span>Attendance - {title}</span>
        </h4>
        <div className='w-full min-h-48 flex items-center'>
            {children}
        </div>
    </Card>
}