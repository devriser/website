import LandingPage from "@/components/shared/HomePage/LandingPage/LandingPage";
import OurAchievments from "@/components/shared/HomePage/OurAchievments/OurAchievments";
import OurCoreServices from "@/components/shared/HomePage/OurCoreServices/OurCoreServices";

export default function Home({ params }: any) {
  return (
    <main className="p-6 py-8 flex flex-col gap-8 bg-primary">
      <LandingPage params={params} />
      <OurAchievments params={params} />
      <OurCoreServices params={params} />
    </main>
  );
}
