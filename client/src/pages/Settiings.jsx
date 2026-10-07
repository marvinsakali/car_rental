import React, { useState } from "react";
import {
  UserRound,
  Bell,
  ShieldCheck,
  Globe,
  Lock,
  Save,
  Camera,
  Eye,
  EyeOff,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Marvin",
    lastName: "Sakali",
    email: "marvin@example.com",
    phone: "+254 700 000 000",
    location: "Nairobi, Kenya",
  });

  const [notifications, setNotifications] = useState({
    bookingUpdates: true,
    promotions: false,
    reminders: true,
    emailNotifications: true,
  });

  const [preferences, setPreferences] = useState({
    language: "English",
    currency: "USD",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirmPassword: "",
  });

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      icon: UserRound,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "preferences",
      label: "Preferences",
      icon: Globe,
    },
    {
      id: "security",
      label: "Security",
      icon: ShieldCheck,
    },
  ];

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const toggleNotification = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSave = () => {
    console.log("Profile:", profile);
    console.log("Notifications:", notifications);
    console.log("Preferences:", preferences);

    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your account, preferences and security.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-lg border border-gray-200 bg-white p-2">
            <div className="flex gap-1 overflow-x-auto lg:flex-col">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex shrink-0 items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Profile */}
            {activeTab === "profile" && (
              <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Profile Information
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Update your personal information.
                  </p>
                </div>

                {/* Profile Image */}
                <div className="mb-8 flex items-center gap-5">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                      <UserRound size={35} className="text-gray-500" />
                    </div>

                    <button
                      className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white"
                      title="Change profile photo"
                    >
                      <Camera size={14} />
                    </button>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">Profile Photo</h3>

                    <p className="mt-1 text-xs text-gray-500">
                      JPG, PNG or WEBP. Maximum 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleProfileChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
                  >
                    <Save size={17} />
                    Save Changes
                  </button>
                </div>
              </section>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Notifications
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Choose which notifications you want to receive.
                  </p>
                </div>

                <div className="divide-y divide-gray-100">
                  <NotificationItem
                    title="Booking Updates"
                    description="Receive updates about your bookings."
                    enabled={notifications.bookingUpdates}
                    onChange={() => toggleNotification("bookingUpdates")}
                  />

                  <NotificationItem
                    title="Booking Reminders"
                    description="Get reminders before your rental starts."
                    enabled={notifications.reminders}
                    onChange={() => toggleNotification("reminders")}
                  />

                  <NotificationItem
                    title="Email Notifications"
                    description="Receive important account updates by email."
                    enabled={notifications.emailNotifications}
                    onChange={() => toggleNotification("emailNotifications")}
                  />

                  <NotificationItem
                    title="Promotions & Offers"
                    description="Receive special offers and promotional updates."
                    enabled={notifications.promotions}
                    onChange={() => toggleNotification("promotions")}
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSave}
                    className="flex items-center cursor-pointer gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    <Save size={17} />
                    Save Preferences
                  </button>
                </div>
              </section>
            )}

            {/* Preferences */}
            {activeTab === "preferences" && (
              <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Preferences
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Customize how the application works for you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Language
                    </label>

                    <select
                      value={preferences.language}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          language: e.target.value,
                        })
                      }
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black sm:max-w-md"
                    >
                      <option value="English">English</option>
                      <option value="Swahili">Swahili</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Currency
                    </label>

                    <select
                      value={preferences.currency}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          currency: e.target.value,
                        })
                      }
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-black sm:max-w-md"
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="KES">KES - Kenyan Shilling</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                    </select>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 rounded-md cursor-pointer bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    <Save size={17} />
                    Save Preferences
                  </button>
                </div>
              </section>
            )}

            {/* Security */}
            {activeTab === "security" && (
              <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Security
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Manage your password and account security.
                  </p>
                </div>

                <div className="max-w-xl space-y-5">
                  <PasswordInput
                    label="Current Password"
                    name="current"
                    value={passwords.current}
                    onChange={handlePasswordChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />

                  <PasswordInput
                    label="New Password"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />

                  <PasswordInput
                    label="Confirm New Password"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => {
                      console.log("Password data:", passwords);
                      alert("Password update submitted!");
                    }}
                    className="flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    <Lock size={17} />
                    Update Password
                  </button>
                </div>

                {/* Danger Zone */}
                <div className="mt-10 border-t border-gray-100 pt-8">
                  <h3 className="font-semibold text-red-600">Danger Zone</h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Permanently delete your account and all associated data.
                  </p>

                  <button className="mt-4 rounded-md border border-red-200 px-5 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50">
                    Delete Account
                  </button>
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

/* Notification Item */

const NotificationItem = ({ title, description, enabled, onChange }) => {
  return (
    <div className="flex items-center justify-between gap-5 py-5">
      <div>
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-gray-500">{description}</p>
      </div>

      <button
        type="button"
        onClick={onChange}
        className={`relative h-6 w-11 cursor-pointer shrink-0 rounded-full transition ${
          enabled ? "bg-black" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
};

/* Password Input */

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder="••••••••"
          className="w-full rounded-md border border-gray-200 px-4 py-3 pr-12 text-sm outline-none focus:border-black"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

export default Settings;
