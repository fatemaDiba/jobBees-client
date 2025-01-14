const Cookie = () => {
  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto px-4 py-8 mt-24 mb-10">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-new mb-6">
        Cookie Policy
      </h1>
      <p className="mb-4 text-gray-700">
        JobBees uses cookies to enhance your experience and improve our
        website’s functionality.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        1. What Are Cookies?
      </h2>
      <p className="text-gray-700">
        Cookies are small files stored on your device that help us identify and
        improve your experience on our site.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        2. Types of Cookies We Use
      </h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>
          <strong>Essential Cookies:</strong> Necessary for the website to
          function properly.
        </li>
        <li>
          <strong>Performance Cookies:</strong> Help us analyze and improve
          website performance.
        </li>
        <li>
          <strong>Functional Cookies:</strong> Enhance your user experience by
          remembering preferences.
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        3. Managing Cookies
      </h2>
      <p className="text-gray-700">
        You can manage or disable cookies through your browser settings.
        However, disabling cookies may affect your experience on our website.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">4. Contact Us</h2>
      <p className="text-gray-700">
        For more details about our Cookie Policy, contact us at
        <span className="text-primary-new">cookies@jobbees.com</span>.
      </p>
    </div>
  );
};

export default Cookie;
