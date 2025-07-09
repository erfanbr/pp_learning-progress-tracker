// components/ConfirmModal.tsx
import React from 'react';

interface Props {
    title: string;
    message: string;
    onConfirm: () => void;
    isOpen: boolean;
}

const ErrorModal: React.FC<Props> = ({ title, message, onConfirm, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md dark:bg-gray-700">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-6">{message}</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onConfirm}
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorModal;
