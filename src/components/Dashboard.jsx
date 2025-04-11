import React from "react";

const Dashboard = () => {
  const listings = [1, 2, 3]; // Just to repeat the card

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <img src="/logo.png" alt="Logo" className="h-10 mb-10" />
        <nav className="space-y-4 text-gray-700">
          <a className="font-bold text-orange-500">Search & Compare</a>
          <a>Favorite</a>
          <a>Notifications</a>
          <a>Settings</a>
          <a>Support</a>
          <a>API Credentials</a>
        </nav>
        <div className="mt-auto flex items-center gap-2 pt-6 border-t">
          <img
            src="/user.png"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <span>Welcome back 👋 <b>Johnathan</b></span>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Search & Compare</h1>
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-full w-64"
          />
          <button className="bg-gray-100 px-4 py-2 rounded-full">Amenities</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full">Square Feet</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full">Leasing End Date</button>
        </div>

        <div className="space-y-6">
          {listings.map((_, i) => (
            <div key={i} className="flex bg-white rounded-xl shadow p-4">
              <img
                src={`/property${i + 1}.jpg`}
                alt="Property"
                className="w-40 h-28 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h2 className="font-bold text-lg">Property Name</h2>
                <p className="text-sm text-gray-600">
                  3806 W 20th Ave, Kennewick, WA 99338 <br />
                  Amenities: View, Balcony, Garage, Dishwasher, Fitness Center
                </p>
                <p className="text-xs mt-1 text-gray-500">Apartments - All</p>
              </div>
              <div className="text-right flex flex-col justify-between">
                <p className="text-green-500 font-semibold text-xl">$1234/mo</p>
                <button className="text-sm bg-black text-white px-4 py-1 rounded-full">
                  View Rental Comparisons
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
