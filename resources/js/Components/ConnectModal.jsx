import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import Modal from '@/Components/Modal';

export default function ConnectModal({ show, onClose }) {
    const { post, data, setData, processing, reset, errors } = useForm({
        name: '',
        connectType: '',
        contactValue: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        post(route('contact.store'), {
            onSuccess: () => {
                reset();
                onClose();
            }
        });
    };

    return (
        <Modal show={show} onClose={onClose}>
            <form onSubmit={handleFormSubmit} className="p-6">
                {/* Name Input Field */}
                <div className="mt-4">
                    <InputLabel htmlFor="name"/>
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="mt-1 block w-full"
                        placeholder="What's your name?"
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Radio Button Options for Connection Type */}
                <div className="mt-6">
                    <InputLabel value="Connection Type" />
                    <div className="flex justify-center space-x-6 mt-4">
                        {/* Email Option */}
                        <div
                            className={`flex items-center border border-gray-200 rounded cursor-pointer px-4 py-2 ${data.connectType === 'Email' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-blue-100'}`}
                            onClick={() => setData('connectType', 'email')}
                        >
                            <input
                                id="radio-email"
                                type="radio"
                                value="Email"
                                name="connectType"
                                className="hidden"  // Hide the radio button itself
                                onChange={(e) => setData('connectType', e.target.value)}
                            />
                            <label htmlFor="radio-email" className="w-full text-sm font-medium text-gray-900">Email</label>
                        </div>

                        {/* Phone Option */}
                        <div
                            className={`flex items-center border border-gray-200 rounded cursor-pointer px-4 py-2 ${data.connectType === 'Phone' ? 'bg-gray-300' : 'bg-gray-100 hover:bg-blue-100'}`}
                            onClick={() => setData('connectType', 'phone')}
                        >
                            <input
                                id="radio-phone"
                                type="radio"
                                value="Phone"
                                name="connectType"
                                className="hidden"  // Hide the radio button itself
                                onChange={(e) => setData('connectType', e.target.value)}
                            />
                            <label htmlFor="radio-phone" className="w-full text-sm font-medium text-gray-900">Phone</label>
                        </div>
                    </div>
                </div>

                {/* Input Field for Contact Info */}
                <div className="mt-6">
                    <InputLabel htmlFor="contactValue" />
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
