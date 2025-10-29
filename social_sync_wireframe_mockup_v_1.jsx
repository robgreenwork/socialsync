import React, { useState } from "react";

// SocialSync – Campaign Creation Wizard v8 (dark blue outer, white inner, grey header section, horizontal location and duration)

export default function App() {
  const steps = [
    { id: "setup", title: "Add Your Campaign Details" },
    { id: "audience", title: "Audience Setup" },
    { id: "copy", title: "Campaign Copy" },
    { id: "images", title: "Image Selector" },
    { id: "overview", title: "Campaign Overview" }
  ];

  const [current, setCurrent] = useState(0);
  const [locationType, setLocationType] = useState("virtual");
  const [durationType, setDurationType] = useState("ongoing");

  const next = () => setCurrent((c) => Math.min(c + 1, steps.length - 1));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const goToStep = (index) => setCurrent(index);
  const step = steps[current];

  const activities = [
    "Abstinence", "Activity", "Anniversary", "Bake", "Birthday", "Burpee", "Celebration", "Climb", "Cold Water", "Crafting", "Cycle", "Distance", "Dog Walk", "Dress-up", "Dry Days", "Fitness", "Football", "Gaming", "Gardening", "Golf", "Half Marathon", "Hike", "Horse Riding", "Iron Man", "Jog", "Knitting", "Marathon", "Mindfulness", "Mudder", "Party/Ball", "Performance", "Pickleball", "Plank", "Push up", "Quiz", "Raffle", "Reading", "Reps", "Rucking", "Rugby", "Run", "Shave", "Sit up", "Skip", "Skydive", "Sleep out", "Squat", "Stair climb", "Star jump", "Swim", "Table Tennis", "Tennis", "Trek", "Triathlon", "Walk", "Wedding", "Other"
  ];

  const renderBreadcrumb = () => (
    <div className="flex flex-col items-center mb-6 bg-gray-100 rounded-xl p-4 w-full">
      <h2 className="font-semibold text-base mb-2 text-[#001F3F]">Build a Campaign</h2>
      <div className="flex gap-3">
        {steps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goToStep(i)}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold border transition-colors duration-200 ${
              i === current
                ? 'bg-[#001F3F] text-white border-[#001F3F]'
                : 'bg-white text-[#001F3F] border-gray-300 hover:border-[#001F3F]'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );

  const renderOptionCards = (options, selected, setSelected, horizontal = false) => (
    <div className={`flex ${horizontal ? 'flex-row flex-wrap justify-between' : 'flex-col'} gap-4`}>
      {options.map(option => (
        <button
          key={option.id}
          type="button"
          onClick={() => setSelected(option.id)}
          className={`flex flex-col text-left rounded-lg border p-4 shadow-sm transition-all duration-200 flex-1 min-w-[30%] ${
            selected === option.id
              ? 'bg-[#F4F5FF] border-[#001F3F]'
              : 'bg-white border-gray-300 hover:border-[#001F3F]'
          }`}
        >
          <h4 className="font-semibold text-[#001F3F] text-base mb-1">{option.title}</h4>
          <p className="text-sm text-gray-600 leading-snug">{option.desc}</p>
        </button>
      ))}
    </div>
  );

  const renderStep = () => {
    if (step.id === "setup") {
      return (
        <div className="grid grid-cols-2 gap-4 text-left bg-white rounded-xl p-6 border border-gray-200">
          <div className="col-span-2 text-center mb-6">
            <h3 className="text-xl font-semibold text-[#001F3F]">Add Your Campaign Details</h3>
            <p className="text-sm text-gray-600">Let’s get started! Share an overview of your campaign details below.</p>
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium text-[#001F3F]">Campaign Title</label>
            <input type="text" placeholder="Campaign Title" className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-[#001F3F] placeholder-gray-500 focus:border-[#001F3F] focus:outline-none" />
          </div>

          <div className="col-span-1 relative">
            <label className="text-sm font-medium text-[#001F3F]">Activity</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 bg-white text-[#001F3F] appearance-none focus:border-[#001F3F] focus:outline-none">
                {activities.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <label className="text-sm font-medium text-[#001F3F]">Campaign Target</label>
            <input type="text" placeholder="Campaign Target" className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white text-[#001F3F] placeholder-gray-500 focus:border-[#001F3F] focus:outline-none" />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium text-[#001F3F] mb-2 block">Where is your event taking place?</label>
            {renderOptionCards([
              { id: 'virtual', title: 'Virtual', desc: 'Join from anywhere—no physical presence required.' },
              { id: 'hybrid', title: 'Hybrid', desc: 'Mix of in-person and remote participants.' },
              { id: 'location', title: 'Location', desc: 'Held fully in person at a specific place.' }
            ], locationType, setLocationType, true)}
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium text-[#001F3F] mb-2 block">Campaign Duration</label>
            <p className="text-xs text-gray-500 mb-2">Set the duration of your campaign below.</p>
            {renderOptionCards([
              { id: 'ongoing', title: 'Ongoing', desc: 'Your campaign will continue running without a set end date.' },
              { id: 'single', title: 'Single Day', desc: 'Run your campaign for a single day. Ideal for charity marathons or giving days.' },
              { id: 'multi', title: 'Multi Day', desc: 'Choose a custom date range to run your campaign over several days.' }
            ], durationType, setDurationType, true)}
          </div>

          <div className="col-span-2 flex gap-3 mt-3">
            <button className="flex-1 bg-[#001F3F] text-white border border-[#001F3F] rounded-md py-2 font-medium hover:bg-[#012A57]">Enable Ticketing</button>
            <button className="flex-1 bg-[#001F3F] text-white border border-[#001F3F] rounded-md py-2 font-medium hover:bg-[#012A57]">Enable Registration</button>
            <button className="flex-1 bg-[#001F3F] text-white border border-[#001F3F] rounded-md py-2 font-medium hover:bg-[#012A57]">Enable Donations</button>
          </div>
        </div>
      );
    }
    return <div className="text-gray-500 text-sm">{step.title} content coming soon...</div>;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#001F3F] text-white p-6">
      <div className="w-full max-w-2xl bg-gray-100 rounded-2xl p-8 border border-gray-300 shadow-md">
        {renderBreadcrumb()}
        <div className="mb-6">{renderStep()}</div>
        <div className="flex justify-between">
          <button onClick={prev} disabled={current === 0} className={`px-5 py-2 rounded-lg border border-gray-400 bg-gray-200 text-[#001F3F] font-medium ${current===0?'opacity-40':''}`}>Back</button>
          <button onClick={next} disabled={current === steps.length - 1} className={`px-5 py-2 rounded-lg bg-[#001F3F] text-white font-semibold ${current===steps.length-1?'opacity-40':''}`}>{current === steps.length - 1 ? 'Done' : 'Next'}</button>
        </div>
        <div className="text-sm text-gray-500 mt-4 text-center">Step {current + 1} of {steps.length}</div>
      </div>
    </div>
  );
}
