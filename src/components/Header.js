export default function Header() {
  return (
    <div className="border-b border-gray-200 bg-transparent px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-16 w-16 rounded-full"
                src={require("./images/favicon.jpeg")}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="ml-4 mt-4 flex flex-shrink-0">
          <a href="tel:+18592144196" className="relative ml-3 inline-flex items-center rounded-md bg-yellow-300 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-yellow-300 hover:bg-yellow-400">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
