import { useState, useEffect } from "react";
import {
  MapPin,
  Thermometer,
  CloudRain,
  Sun,
  Cloud,
  Droplet,
  Wind,
  Search,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// --- Mock Data ---

// Added specific color properties to mock data to match the bright, colorful card UX
const mockForecast = [
  // Day, High, Low, Icon, Condition, Background Color, Icon Color
  {
    day: "Mon",
    high: 24,
    low: 15,
    icon: Cloud,
    condition: "Cloudy",
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    day: "Tue",
    high: 26,
    low: 17,
    icon: Sun,
    condition: "Sunny",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    day: "Wed",
    high: 22,
    low: 14,
    icon: CloudRain,
    condition: "Rain",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    day: "Thu",
    high: 20,
    low: 13,
    icon: Cloud,
    condition: "Overcast",
    bgColor: "bg-gray-200",
    iconColor: "text-gray-600",
  },
  {
    day: "Fri",
    high: 27,
    low: 18,
    icon: Sun,
    condition: "Clear",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    day: "Sat",
    high: 25,
    low: 16,
    icon: Cloud,
    condition: "Partly Cloudy",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    day: "Sun",
    high: 23,
    low: 15,
    icon: CloudRain,
    condition: "Showers",
    bgColor: "bg-red-100",
    iconColor: "text-red-600",
  },
];

// Mock data for current conditions
const mockCurrentWeather = {
  city: "San Francisco",
  country: "USA",
  temp: 12, // current temp
  humidity: 78,
  windSpeed: 15,
  description: "Mostly Cloudy",
  mainIcon: Cloud,
  mainIconColor: "text-cyan-500", // Primary color for the main icon
};

// --- Helper Components ---

// Card for individual forecast items - CRITICAL FIXES FOR EXACT MATCH
const ForecastItem = ({
  day,
  high,
  low,
  icon: Icon,
  isCurrent,
  bgColor,
  iconColor,
}) => (
  // FIX: Apply white background and border-gray-200 to ALL cards.
  // The 'isCurrent' card now overrides the border with the ring.
  <div
    className={`flex flex-col items-center p-3 bg-cyan-100 transition-all w-24 flex-shrink-0 bg-white shadow-md cursor-pointer rounded-xl 
    border border-gray-200 hover:shadow-lg
    ${isCurrent ? "ring-2 ring-cyan-500 !border-transparent" : ""}
  `}
  >
    <span className="text-xs font-semibold text-gray-500">{day}</span>
    <Icon size={28} className={`my-2 ${iconColor}`} />
    <span className="text-lg font-bold text-gray-800">{high}°C</span>
    <span className="text-xs text-gray-500">{low}°C</span>
  </div>
);

// Card for current details (humidity, wind) - updated for light mode
const DetailCard = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg w-full border border-gray-200">
    <Icon size={20} className="text-cyan-500 mb-1" />
    <span className="text-xs uppercase text-gray-500">{label}</span>
    <span className="text-xl font-bold text-gray-800 mt-1">{value}</span>
  </div>
);

// --- Main App Component ---

export default function WeatherApp() {
  const [location, setLocation] = useState(mockCurrentWeather.city);
  const [currentWeather, setCurrentWeather] = useState(mockCurrentWeather);
  const [forecast, setForecast] = useState(mockForecast);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = (searchQuery = null) => {
    setLoading(true);
    setError(null);
    // Mock API delay
    setTimeout(() => {
      setLoading(false);
      setCurrentWeather(mockCurrentWeather);
      setForecast(mockForecast);
      setLocation(searchQuery || mockCurrentWeather.city);
    }, 1500);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  // --- Rendering Functions ---

  const renderCurrentWeather = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-48">
          <p className="text-cyan-500 animate-pulse">Loading weather data...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="flex flex-col justify-center items-center h-48 text-red-500">
          <p>Error fetching weather: {error}</p>
        </div>
      );
    }

    const MainIcon = currentWeather.mainIcon;

    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        {/* Main Temperature and Icon */}
        <div className="flex items-center space-x-6">
          <MainIcon size={72} className={currentWeather.mainIconColor} />
          <p className="text-8xl font-thin text-gray-900">
            {currentWeather.temp}°
          </p>
          <span className="text-3xl font-light text-gray-400">C</span>
        </div>

        {/* Location and Description */}
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
            <MapPin size={20} className="text-red-500 mr-2" />
            {currentWeather.city}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {currentWeather.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    // FIX: Switched to a light, off-white background
    <div className="min-h-screen p-6 flex flex-col items-center justify-start font-sans bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Mock UI/Sample Preview Banner */}
      <div className="w-full max-w-4xl mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg text-yellow-800 text-center font-medium shadow-md">
        This is a **MOCK UI** for sample preview of student project work. No
        real-time data is used.
      </div>
      {/* FIX: Switched main container to white with soft shadow */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 md:p-10">
        {/* Header & Search Bar - Switched text to dark/gray for light mode */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <Calendar size={24} className="text-cyan-500 mr-2" /> 7-Day Forecast
          </h2>

          <div className="flex w-full md:w-auto items-center p-2 rounded-xl bg-gray-100 border border-gray-300/50 shadow-inner">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search city..."
              // Switched input to transparent against light background
              className="bg-transparent text-gray-800 outline-none placeholder-gray-500 text-sm flex-grow"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") fetchWeather(location);
              }}
            />
            {/* Switched button to cyan primary color */}
            <button
              onClick={() => fetchWeather(location)}
              className="p-1 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors ml-2 shadow-md shadow-cyan-500/50"
            >
              Go
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Current Weather - Switched to light background */}
          <div className="lg:col-span-2 bg-gray-100 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Current Conditions
            </h3>
            {renderCurrentWeather()}

            {/* Additional Details Row - Details cards are now white */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-200 mt-6">
              <DetailCard icon={Thermometer} label="Feels Like" value="10°C" />
              <DetailCard
                icon={Droplet}
                label="Humidity"
                value={`${currentWeather.humidity}%`}
              />
              <DetailCard
                icon={Wind}
                label="Wind Speed"
                value={`${currentWeather.windSpeed} km/h`}
              />
            </div>
          </div>

          {/* Column 2: Today's Highlights - Switched to light background */}
          <div className="lg:col-span-1 bg-gray-100 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Today's Summary
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expect the clouds to break up by afternoon, leading to a mild
              evening. Max UV Index: 5. Sunrise at 6:30 AM. Sunset at 7:45 PM.
            </p>
            {/* Switched button to cyan primary color */}
            <button className="mt-4 w-full py-2 bg-cyan-500 rounded-lg text-white font-semibold hover:bg-cyan-600 transition-colors shadow-md shadow-cyan-500/50">
              Open Radar View
            </button>
          </div>
        </div>

        {/* 7-Day Forecast Section - Switched to light background */}
        <div className="mt-10 p-6 bg-gray-100 rounded-2xl shadow-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            7-Day Outlook
          </h3>
          {/* Forecast items now use dynamic, soft background colors based on weather */}
          <div className="flex space-x-4 pb-4">
            {forecast.map((day, index) => (
              // FIX: Corrected syntax for className attribute. JSX requires { } for dynamic values.
              <ForecastItem key={index} {...day} isCurrent={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
