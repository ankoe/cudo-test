import Card from "../Card";

export default function CardToday({
    children, title
  }: {
    children: React.ReactNode
    title: string
  }, ) {
    return <Card>
        <h4 className="capitalize text-sm font-semibold space-x-1 text-gray-600">
            <span className="text-red-600">Today</span>
            <span>{title}</span>
        </h4>
        <div className='w-full h-48 flex justify-center text-center items-center'>
            {children}
        </div>
    </Card>
}