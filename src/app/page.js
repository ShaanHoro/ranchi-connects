export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[500px] flex items-center justify-center text-white text-center"
        style={{ backgroundImage: "url('/ranchi-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl">
          <h1 className="text-4xl font-bold">Connecting Ranchi, One Story at a Time</h1>
          <p className="mt-4 text-lg">Join us to explore local stories, events, and initiatives.</p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">
            Join the Community
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold">Why Join Ranchi Connects?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 px-6">
          <FeatureCard icon="📰" title="Local Stories" desc="Read inspiring stories from the heart of Ranchi." />
          <FeatureCard icon="🎭" title="Events & Meetups" desc="Discover exciting events happening around you." />
          <FeatureCard icon="🗣️" title="Community Forum" desc="Engage in meaningful discussions with locals." />
          <FeatureCard icon="🌱" title="Social Initiatives" desc="Support and contribute to local causes." />
        </div>
      </section>

      {/* Latest Stories */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center">Latest Stories</h2>
        <div className="mt-6 flex justify-center">
          <p>Coming soon...</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 text-center bg-yellow-500">
        <h2 className="text-3xl font-bold">Be Part of Ranchi Connects!</h2>
        <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900">
          Join Now
        </button>
      </section>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl">{icon}</h3>
      <h4 className="text-xl font-bold mt-2">{title}</h4>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}
