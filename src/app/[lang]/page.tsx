import LandingPage from "@/components/shared/HomePage/LandingPage/LandingPage";
import OurAchievments from "@/components/shared/HomePage/OurAchievments/OurAchievments";

export default function Home({ params }: any) {
  return (
    <main className="p-6 py-8">
      <LandingPage params={params} />
      <OurAchievments />
    </main>
  );
}
