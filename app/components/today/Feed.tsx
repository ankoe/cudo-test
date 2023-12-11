import CardToday from "../card/Today";

type CardFeedActivity = {
  "Total feed": number;
  "Total person": number;
};

export default function TodayFeed({ value }: { value: CardFeedActivity }) {
  return (
    <CardToday title={"Feed / Activity"}>
      <div className="space-y-4">
        <h3 className="font-bold text-6xl text-gray-900">
          {value["Total feed"]}
        </h3>
        <h5 className="font-bold uppercase text-gray-800">
          of <span className="text-green-400">{value["Total person"]}</span>{" "}
          person
        </h5>
      </div>
    </CardToday>
  );
}
