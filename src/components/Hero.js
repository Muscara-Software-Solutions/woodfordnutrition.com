import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import Hours from './Hours';
import Header from './Header';

function isTimeInRange(targetTime, startTime, endTime) {
  const targetDate = new Date(`2000-01-01 ${targetTime}`);
  const startDate = new Date(`2000-01-01 ${startTime}`);
  const endDate = new Date(`2000-01-01 ${endTime}`);

  return targetDate >= startDate && targetDate <= endDate;
}

export default function Hero() {
  let [isOpen, setOpen] = useState(false);

  let currentTime = new Date().toLocaleTimeString();
  let currentDay = new Date().getDay();
  let status;

  if(currentDay === 0) {
    status = false;
  } else {
    if(currentDay === 6) {
      if(isTimeInRange(currentTime, "8:00:00 AM", "2:00:00 PM")) {
        status = true;
      } else {
        status = false;
      }
    } else {
      if(isTimeInRange(currentTime, "6:30:00 AM", "6:00:00 PM")) {
        status = true;
      } else {
        status = false;
      }
    }
  }

  return (
    <>
      <div className="bg-white">
        <div className="relative isolate -mt-18 px-6 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FDD962] to-[#FDF0C4] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <Header />
          <div className="-mt-20 mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <div className="mt-24 mb-3 sm:mt-32 lg:mt-16">
                {status === true && (
                  <button onClick={() => setOpen(true)} className="inline-flex space-x-6">
                    <span 
                      className="rounded-full bg-green-600/10 px-3 py-1 text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-600/10">
                      Open now
                    </span>
                  </button>
                )}
                {status === false && (
                  <button onClick={() => setOpen(true)} className="inline-flex space-x-6">
                    <span 
                      className="rounded-full bg-red-600/10 px-3 py-1 text-sm font-semibold leading-6 text-red-600 ring-1 ring-inset ring-red-600/10">
                      Closed
                    </span>
                  </button>
                )}
              </div>
              <h1 className="text-5xl font-bold tracking-tight">Woodford Nutrition C & J</h1>
              <p className="mt-4 text-xl text-gray-500">
                Community happens here.
              </p>

              <p className="mt-4 text-xl tracking-wide leading-8 text-gray-500">
                <span className="text-pink-400 font-bold">Proudly</span> serving<br />
                <span className="text-green-400 font-bold">🥛 Healthy Shakes</span> <br />
                <span className="text-yellow-500 font-bold">🥤 Energizing Teas</span> <br />
                <span className="text-yellow-800 font-bold">☕️ Iced Coffees</span> <br />
                <span className="text-blue-400 font-bold">🧁 Healthy Snacks</span>
              </p>
              
              <a href="https://www.google.com/maps/place/157+Yellow+Jacket+Dr,+Versailles,+KY+40383/@38.062958,-84.733451,17z/data=!3m1!4b1!4m6!3m5!1s0x88426fa868141d6d:0xe88681732b9b17c0!8m2!3d38.062958!4d-84.733451!16s%2Fg%2F11fj_5tc7q?entry=ttu">
                <span className="pt-4 inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  157 Yellow Jacket Dr, Versailles KY 40383
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src={require("./images/products/donuts/4.jpeg")}
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <img
                src={require("./images/products/shakes/4.jpeg")}
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <img
                src={require("./images/products/shakes/5.jpeg")}
                alt=""
                className="rounded-lg bg-gray-100"
              />
              <img
                src={require("./images/products/teas/6.jpeg")}
                alt=""
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FDD962] to-[#FDF0C4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
      <Hours open={isOpen} setOpen={setOpen} />
    </>
  )
}
