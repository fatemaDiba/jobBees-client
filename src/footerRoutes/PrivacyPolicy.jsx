const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto px-4 py-8 mt-24 mb-10">
      <h1 className="text-2xl md:text-3xl  font-bold text-primary-new mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4 text-gray-700">
        Your privacy is important to us. This Privacy Policy outlines how
        JobBees collects, uses, and protects your information.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>
          Personal information you provide, such as name, email, and contact
          details.
        </li>
        <li>
          Usage data, including IP address, browser type, and pages visited.
        </li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>To provide and improve our services.</li>
        <li>
          To communicate with you about updates, promotions, or job alerts.
        </li>
        <li>To maintain website security and functionality.</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">
        3. Sharing of Information
      </h2>
      <p className="text-gray-700">
        We do not sell or share your personal information with third parties,
        except to comply with legal obligations or provide our services.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold mt-6">4. Your Rights</h2>
      <p className="text-gray-700">
        You have the right to access, update, or delete your personal
        information. Please contact us at
        <span className="text-primary-new"> privacy@jobbees.com</span> for
        assistance.
      </p>

      <p className="mt-6 text-gray-700">
        For further information, feel free to reach out to us at
        <span className="text-primary-new"> privacy@jobbees.com</span>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
