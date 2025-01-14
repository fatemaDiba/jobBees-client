const TermsOfUse = () => {
  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto px-4 py-8 mt-24 mb-10">
      <h1 className="text-2xl md:text-3xl font-bold text-primary-new mb-6">
        Terms of Use
      </h1>
      <p className="mb-4 text-gray-700">
        Welcome to JobBees! By accessing or using our website, you agree to be
        bound by these terms of use. Please read them carefully before using our
        services.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        1. Acceptance of Terms
      </h2>
      <p className="text-gray-700">
        By using JobBees, you agree to comply with these terms and conditions.
        If you do not agree, please do not use our website.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        2. Use of the Website
      </h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>JobBees is intended for personal and professional use only.</li>
        <li>
          You agree not to use the website for any illegal or unauthorized
          purposes.
        </li>
        <li>
          You must not attempt to interfere with the website’s security or
          functionality.
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        3. Intellectual Property
      </h2>
      <p className="text-gray-700">
        All content, logos, and trademarks on JobBees are owned by us or our
        licensors. Unauthorized use of any material is prohibited.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        4. Limitation of Liability
      </h2>
      <p className="text-gray-700">
        JobBees is not responsible for any loss or damage arising from the use
        of our website or services.
      </p>

      <p className="mt-6 text-gray-700">
        If you have questions about our Terms of Use, please contact us at{" "}
        <span className="text-primary-new">info@jobbees.com</span>.
      </p>
    </div>
  );
};

export default TermsOfUse;
