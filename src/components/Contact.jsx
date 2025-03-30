import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState(""); // For handling the result message
  const [loading, setLoading] = React.useState(false); // For handling the loading state

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(""); // Clear the result message before sending the form
    setLoading(true); // Start the loading state

    const formData = new FormData(event.target);
    formData.append("access_key", "87e50296-0e38-4b9e-bf6e-2e02e02035a0");

    try {
      // Send form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Contact Form Submitted Successfully");
        event.target.reset(); // Clear the form fields after successful submission
      } else {
        console.log("Error:", data);
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.log("Submission Error:", error);
      setResult("There was an error. Please try again.");
    }

    setLoading(false); // End the loading state
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <form onSubmit={onSubmit} className="flex flex-col w-full md:w-1/2 p-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="10"
          required
          className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors duration-300"
        ></textarea>

        <button
          type="submit"
          disabled={loading} // Disable button when loading
          className={`text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
          } transition-transform duration-300`}
        >
          {loading ? "Sending..." : "Contact-->"}
        </button>
      </form>
      
      {/* Show the result message only when there is one */}
      {result && <span className={`text-lg mt-4 ${result.includes("Successfully") ? "text-green-500" : "text-red-500"}`}>{result}</span>}
    </div>
  );
}