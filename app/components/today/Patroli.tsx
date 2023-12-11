import CardToday from "../card/Today";

type CardPatrol = {
  "Total Patrol": number;
};

export default function TodayPatroli({ value }: { value: CardPatrol }) {
  return (
    <CardToday title={"Patroli"}>
      <div className="space-y-4">
        <h3 className="font-bold text-6xl text-gray-900">
          {value["Total Patrol"]}
        </h3>
        <h5 className="font-bold capitalize text-gray-800">person</h5>
      </div>
    </CardToday>
  );
}
