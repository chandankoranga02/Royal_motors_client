import { UniversityComponent } from "./UniversityComponent";

export const metadata = {
  title: "University | Royal Motors",
  description: "Royal Motors Hypercar & Driving Academy",
};

export default function UniversityPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <UniversityComponent />
    </div>
  );
}
