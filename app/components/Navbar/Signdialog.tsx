import { SignInButton } from "@clerk/nextjs";
import { useState } from "react";

const Signdialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <SignInButton>
            <button
              type="button"
              className="text-lg text-Blueviolet font-medium"
              onClick={openModal}
            >
              Log In
            </button>
          </SignInButton>
        </div>
      </div>
    </>
  );
};

export default Signdialog;
