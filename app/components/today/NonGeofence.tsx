import CardToday from "../card/Today";

type CardNonGeofence = {
  "Total person": number;
};

export default function TodayNonGeofence({
  value,
}: {
  value: CardNonGeofence;
}) {
  return (
    <CardToday title={"Non Geofence"}>
      <div className="space-y-4">
        <h3 className="font-bold text-6xl text-gray-900">
          {value["Total person"]}
        </h3>
        <h5 className="font-bold capitalize text-gray-800">person</h5>
      </div>
    </CardToday>
  );
}
