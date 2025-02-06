"use client";
import { FormEvent, useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "idle"
  >("idle");
  const [responseMsg, setResponseMsg] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>();

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await axios.post("/api/subscribe", { email });

      setStatus("success");
      setStatusCode(response.status);
      setEmail("");
      setResponseMsg(response.data.message);
    } catch (err) {

      if (axios.isAxiosError(err)) {
        setStatus("error");
        setStatusCode(err.response?.status);
        setResponseMsg(err.response?.data.error);
      }
    }
  }
  return (
    <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${statusCode == 400 ? " border-orange-500" : " border-pink-500"}'
          required
          disabled={status == "loading"}
        />
        <button
          type="submit"
          className="button"
          disabled={status == "loading"}
        >
          Sign Up
        </button>
      </div>
      <div className="server-message pt-4 text-green-600">
        {status === "success" ? (
          <p className="text-green-600">{responseMsg}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-orange-600">{responseMsg}</p>
        ) : null}
      </div>
    </form>
  );
}
export default Newsletter;