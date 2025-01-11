"use client";
import React from "react";
import { usePostHog } from "posthog-js/react";
const Home = () => {
  const posthog = usePostHog();
  const logPostHogEvent = () => {
    posthog.capture("button clicked", {
      button: "button",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logPostHogEvent}
      >
        Log PostHog Event
      </button>
    </div>
  );
};

export default Home;
