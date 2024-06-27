import React, { useState } from "react";
import Modal from "react-modal";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

Modal.setAppElement("#root"); // Ensure this is your app's root element

export const SignInModal = ({ isOpen, onRequestClose }: any) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    className="bg-white p-8 rounded-lg"
  >
    <h2 className="text-xl font-bold mb-4">Sign In</h2>
    <SignInButton mode="modal" />
    <button onClick={onRequestClose} className="mt-4 text-blue-500">
      Close
    </button>
  </Modal>
);

export const SignUpModal = ({ isOpen, onRequestClose }: any) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    className="bg-white p-8 rounded-lg"
  >
    <h2 className="text-xl font-bold mb-4">Sign Up</h2>
    <SignUpButton mode="modal" />
    <button onClick={onRequestClose} className="mt-4 text-blue-500">
      Close
    </button>
  </Modal>
);
