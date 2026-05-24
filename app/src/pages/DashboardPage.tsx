import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package, MapPin, CreditCard, Settings, Heart,
  Clock, Truck, Star, ChevronRight, User, Bell
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: Package },
  { id: 'orders', label: 'Orders', icon: Truck },
  { id: 'saved', label: 'Saved', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const recentOrders = [
  { id: 'CC-2025-001', country: 'Morocco', date: 'Jan 15, 2025', status: 'Delivered', image: '/gallery/box-morocco-1.jpg' },
  { id: 'CC-2025-002', country: 'Mexico', date: 'Feb 10, 2025', status: 'In Transit', image: '/gallery/box-mexico-1.jpg' },
  { id: 'CC-2025-003', country: 'Peru', date: 'Mar 5, 2025', status: 'Preparing', image: '/gallery/box-peru-1.jpg' },
];

const savedCountries = [
  { id: 'italy', name: 'Italy', image: '/gallery/box-italy-1.jpg', count: 0 },
  { id: 'china', name: 'China', image: '/gallery/box-china-1.jpg', count: 0 },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-1">
              My Dashboard
            </h1>
            <p className="font-body text-navy/50 text-sm">Welcome back, Culture Explorer</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-navy/60 hover:text-gold transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
              <User className="w-5 h-5 text-cream" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-navy text-cream'
                        : 'text-navy/60 hover:bg-cream/50 hover:text-navy'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Subscription Status */}
            <div className="bg-navy rounded-xl p-5 mt-4">
              <p className="font-body text-xs text-gold uppercase tracking-wide mb-2">Current Plan</p>
              <p className="font-display text-xl text-cream font-semibold mb-1">Monthly</p>
              <p className="font-body text-xs text-cream/50 mb-4">Renews on April 15, 2025</p>
              <Link to="/subscribe" className="block w-full text-center py-2 rounded-lg bg-gold/10 text-gold font-body text-xs font-medium hover:bg-gold/20 transition-colors">
                Upgrade Plan
              </Link>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeTab === 'overview' && (
              <>
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Boxes', value: '12', icon: Package },
                    { label: 'Countries', value: '5', icon: MapPin },
                    { label: 'Next Box', value: 'Apr', icon: Clock },
                    { label: 'Loyalty Points', value: '450', icon: Star },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center mb-3">
                        <stat.icon className="w-5 h-5 text-navy/60" />
                      </div>
                      <p className="font-display text-2xl text-navy font-semibold">{stat.value}</p>
                      <p className="font-body text-xs text-navy/50">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-display text-xl text-navy font-semibold">Recent Orders</h2>
                    <button
                      onClick={() => setActiveTab('orders')}
                      className="flex items-center gap-1 font-body text-sm text-gold hover:text-navy transition-colors"
                    >
                      View All
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center gap-4 p-3 bg-cream/50 rounded-lg">
                        <img
                          src={order.image}
                          alt={order.country}
                          className="w-14 h-14 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-display text-sm text-navy font-semibold">{order.country} Edition</p>
                          <p className="font-body text-xs text-navy/50">{order.id} &middot; {order.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full font-body text-xs font-medium ${
                          order.status === 'Delivered'
                            ? 'bg-green-50 text-green-700'
                            : order.status === 'In Transit'
                            ? 'bg-blue-50 text-blue-700'
                            : 'bg-yellow-50 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Saved Countries */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="font-display text-xl text-navy font-semibold mb-4">Saved Countries</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {savedCountries.map((c) => (
                      <Link
                        key={c.id}
                        to={`/country/${c.id}`}
                        className="group relative rounded-xl overflow-hidden aspect-square"
                      >
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                        <div className="absolute bottom-3 left-3">
                          <p className="font-display text-base text-cream font-semibold">{c.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="font-display text-xl text-navy font-semibold mb-6">Order History</h2>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center gap-4 p-4 border border-cream-dark/30 rounded-lg">
                      <img src={order.image} alt={order.country} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <p className="font-display text-base text-navy font-semibold">{order.country} Edition</p>
                        <p className="font-body text-xs text-navy/50">{order.id}</p>
                        <p className="font-body text-xs text-navy/50">{order.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full font-body text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-50 text-green-700' :
                        order.status === 'In Transit' ? 'bg-blue-50 text-blue-700' :
                        'bg-yellow-50 text-yellow-700'
                      }`}>{order.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="font-display text-xl text-navy font-semibold mb-6">Saved Countries</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {savedCountries.map((c) => (
                    <Link key={c.id} to={`/country/${c.id}`} className="group relative rounded-xl overflow-hidden aspect-square">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <p className="font-display text-base text-cream font-semibold">{c.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <h2 className="font-display text-xl text-navy font-semibold">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-body text-sm text-navy mb-2">Full Name</label>
                    <input type="text" defaultValue="Culture Explorer" className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy focus:outline-none focus:border-gold" />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-navy mb-2">Email</label>
                    <input type="email" defaultValue="explorer@example.com" className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy focus:outline-none focus:border-gold" />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-navy mb-2">Shipping Address</label>
                    <textarea rows={3} defaultValue="123 Cultural Lane&#10;New York, NY 10001&#10;United States" className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy focus:outline-none focus:border-gold resize-none" />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <CreditCard className="w-5 h-5 text-navy/40" />
                    <div>
                      <p className="font-body text-sm text-navy">**** **** **** 4242</p>
                      <p className="font-body text-xs text-navy/50">Expires 12/27</p>
                    </div>
                  </div>
                  <button className="btn-navy w-full">Save Changes</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
