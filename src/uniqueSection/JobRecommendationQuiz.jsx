import Swal from "sweetalert2";

const JobRecommendationQuiz = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const form = e.target; // Reference to the form element

    const skill = form.elements.skills?.value?.toLowerCase() || "";
    const interest = form.elements.interests?.value?.toLowerCase() || "";

    if (
      (skill.includes("react") || skill.includes("javascript")) &&
      interest.includes("web development")
    ) {
      Swal.fire({
        title: "Perfect Match!",
        text: "We recommend the job: Web Developer. Required skills: JS, React, Express, etc.",
        icon: "success",
        confirmButtonText: "Great!",
      });
    } else {
      Swal.fire({
        title: "No Match Found",
        text: "We couldn't find a job match. Try using different skills or interests.",
        icon: "info",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form Section */}
        <div className="text-start">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-new">
            Find Your Perfect Match
          </h2>
          <p className="w-[80%] mt-4 text-base md:text-lg text-gray-600">
            Take this quick quiz to find job recommendations tailored just for
            you!
          </p>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                What's your skillSet?
              </h3>
              <input
                type="text"
                name="skills"
                placeholder="E.g., React, JavaScript"
                className="input input-bordered mt-4 w-full"
                required
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-semibold">
                What are you interested in?
              </h3>
              <input
                type="text"
                name="interests"
                placeholder="E.g., Web Development"
                className="input input-bordered mt-4 w-full"
                required
              />
            </div>

            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-semibold">
                How available are you?
              </h3>
              <select
                name="availability"
                className="select select-bordered mt-4 w-full"
              >
                <option value="">Select Availability</option>
                <option value="Part-time">Part-time</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="btn bg-light-primary hover:bg-blue-700 text-white"
              >
                Find My Match
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative h-full xl:h-[80%]">
          <img
            src="/assets/match.jpg"
            alt="Match Illustration"
            className="object-cover w-full h-full rounded-xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default JobRecommendationQuiz;
