import TodayDuty from "./components/today/Duty";
import TodayAttendance from "./components/today/Attendance";
import TodayFeed from "./components/today/Feed";
import TodayPatroli from "./components/today/Patroli";
import TodayNonSchedule from "./components/today/NonSchedule";
import TodayNonGeofence from "./components/today/NonGeofence";
import AttendanceDaily from "./components/attendance/Daily";
import AttendancePerShift from "./components/attendance/PerShift";
import { promises as fs } from "fs";

export default async function Home() {
  const file1 = await fs.readFile(
    process.cwd() + "/source/File_1.json",
    "utf8"
  );
  const file2 = await fs.readFile(
    process.cwd() + "/source/File_2.json",
    "utf8"
  );
  const todayData = JSON.parse(file1);
  const attendanceData = JSON.parse(file2);

  return (
    <div className="bg-[#f0f1f2] w-full min-h-screen px-3 py-4">
      <div className="space-y-3 md:flex md:space-x-3 md:space-y-0">
        <div className="w-full md:w-2/6 grid grid-cols-2 gap-3">
          <TodayDuty value={todayData["Card On Duty"]} />
          <TodayAttendance value={todayData["Card Attendance"]} />
          <TodayFeed value={todayData["Card Feed Activity"]} />
          <TodayPatroli value={todayData["Card Patrol"]} />
          <TodayNonSchedule value={todayData["Card Non Schedule"]} />
          <TodayNonGeofence value={todayData["Card Non Geofence"]} />
        </div>
        <div className="w-full md:w-4/6 grid gap-3">
          <AttendanceDaily value={attendanceData["Attendance Daily"]} />
          <AttendancePerShift value={attendanceData["Attendance Per Shift"]} />
        </div>
      </div>
    </div>
  );
}
