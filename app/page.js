import Slider from "./components/Slider";
import Events from './components/events.js';
import InstitueCard from "./components/institueCard";
import InstitueCard2 from "./components/institueCard2";
import SportsGallary from "./components/sportsGallary";
import AboutUs from "./components/aboutUs";
async function getHomeSettings() {
  try {
    let res = await request(`home/fetch-products?inWhere=web`);
    return res;
  } catch (error) {
    console.log("err in get settings", error);
  }
}

async function getData() {
  try {
    let res = await request(`setting/admin/site-view`);
    if (res) {
      return res;
    }
  } catch (error) {
    console.log("err in get settings", error);
  }
}

export const revalidate = 0;
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Baniara",
  description: "An Ideal Village",
  favicon: "/favicon.ico",
};

export default async function Home(params) {



  return (
    <>
      <div className="bg-white text-black pb-12 2xl:container 2xl:mx-auto p-5 flex flex-col items-center">
        {/* Slider Component */}
        <div className="w-full"> {/* Ensures Slider component is centered and has max width */}
          <Slider />
        </div>

        {/* Events Component */}
        <div id="events" className="w-full max-w-screen-xl  mt-[100px]">
          <div className="text-center">
            <h2 className="text-[25px] font-semibold">Events</h2>
          </div>
          <Events />
        </div>

        <div id="institues" className="w-full   mt-[100px]">
          <div className="text-center pb-5">
            <h2 className="text-[25px] font-semibold">Institues</h2>
          </div>
          <div className="flex items-center justify-evenly flex-wrap mt-5">
            <InstitueCard name={'Baniara High School'} />
            <InstitueCard name={'Baniara Mosque'} />
            <InstitueCard2 name={'Baniara Primary School'} />
            <InstitueCard2 name={'Baniara Madrasa'} />
          </div>

        </div>
        <div id="sports" className="w-full max-w-screen-xl  mt-[100px]">
          <div className="text-center pb-5">
            <h2 className="text-[25px] font-semibold">Gallary</h2>
          </div>
          <SportsGallary />

        </div>
        <div id="sports" className="w-full max-w-screen-xl  mt-[100px]">
          <div className="text-center pb-5">
            <h2 className="text-[25px] font-semibold">About Us</h2>
          </div>
          <AboutUs />

        </div>

        <div id="sports" className="w-full max-w-screen-xl  mt-[100px]">
          <div className="text-center pb-5">
            <h2 className="text-[25px] font-semibold">Our Location</h2>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps?q=24.137472210609438, 90.04465911391597&hl=es;z=10&output=embed"
              width="100%"
              height="450"
              style={{border:'0px'}}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
}
