import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Modal from '@/Components/Modal';

export default function ConnectModal({ show, onClose }) {
    const { post, data, setData, processing, reset, errors } = useForm({
        connectType: '',      // Stores the connection type (email or phone)
        contactValue: '',     // Stores the entered email or phone value
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        post(route('contact.store'), {
            onSuccess: () => {
                reset();   // Clear the form after successful submission
                onClose(); // Close the modal
            }
        });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={handleFormSubmit} className="p-6">
                <h2 className="text-lg font-medium text-gray-900">How should we connect?</h2>

                <p className="mt-1 text-sm text-gray-600">Select how you'd like to connect:</p>

                {/* Radio Button Options */}
                <div className="flex justify-between mt-4">
                    <div className="flex items-center ps-4 border border-gray-200 rounded">
                        <input
                            id="radio-email"
                            type="radio"
                            value="Email"
                            name="connectType"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            onChange={(e) => setData('connectType', e.target.value)}
                        />
                        <label htmlFor="radio-email" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">Email</label>
                    </div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded">
                        <input
                            id="radio-phone"
                            type="radio"
                            value="Phone"
                            name="connectType"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            onChange={(e) => setData('connectType', e.target.value)}
                        />
                        <label htmlFor="radio-phone" className="w-full py-4 ms-2 text-sm font-medium text-gray-900">Phone</label>
                    </div>
                </div>

                {/* Input Field for Contact Info */}
                <div className="mt-6">
                    <InputLabel htmlFor="contactValue" value={`Enter your ${data.connectType}`} />
                    <TextInput
                        id="contactValue"
                        type="text"
                        name="contactValue"
                        value={data.contactValue}
                        onChange={(e) => setData('contactValue', e.target.value)}
                        className="mt-1 block w-full"
                        placeholder={`Enter your ${data.connectType}...`}
                    />
                    <InputError message={errors.contactValue} className="mt-2" />
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={onClose}>Cancel</SecondaryButton>
                    <PrimaryButton className="ms-3" disabled={processing}>
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
}
