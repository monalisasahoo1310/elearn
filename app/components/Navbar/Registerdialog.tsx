import { SignUpButton } from "@clerk/nextjs";
import { useState } from "react";

const Registerdialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <SignUpButton>
            <button
              className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
              onClick={openModal}
            >
              Sign up
            </button>
          </SignUpButton>
        </div>
      </div>
    </>
  );
};

export default Registerdialog;
