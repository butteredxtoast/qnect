import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Profile() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const passwordInput = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        post(route('profile.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    const {
        post,
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
        connectionDetail: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Header */}
            <div className="px-4 sm:px-0 text-center mb-6">
                <img
                    className="h-32 w-32 rounded-full mx-auto"
                    src="https://via.placeholder.com/150" // Placeholder for profile picture
                    alt="Profile Picture"
                />
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">Bill Keuth</h2>
                <p className="mt-1 text-lg text-gray-600">Software Developer</p>
                <p className="mt-1 text-sm text-gray-500">bill@hey.com</p>
            </div>

            {/* Profile Information */}
            <div className="mt-6 border-t border-gray-200">
                <dl className="divide-y divide-gray-200">
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">(317)340-3179</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">San Francisco, CA</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">LinkedIn</dt>
                        <dd className="mt-1 text-sm leading-6 text-indigo-600 sm:col-span-2 sm:mt-0">
                            <a href="https://www.linkedin.com/in/billkeuth/" target="_blank">linkedin.com/in/billkeuth/</a>
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Github</dt>
                        <dd className="mt-1 text-sm leading-6 text-indigo-600 sm:col-span-2 sm:mt-0">
                            <a href="https://github.com/butteredxtoast" target="_blank">github.com/butteredxtoast</a>
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">Skills</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">PHP, Laravel, Node.js, MySQL</dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium text-gray-500">About</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                            I am a highly motivated backend developer with over 10 years of experience in PHP and Laravel. I enjoy creating scalable, efficient web applications and solving complex problems.
                        </dd>
                    </div>
                    <div className="px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                        <PrimaryButton onClick={confirmUserDeletion}>Let's Connect!</PrimaryButton>

                        <Modal show={confirmingUserDeletion} onClose={closeModal}>
                            <form onSubmit={handleFormSubmit} className="p-6">
                                <h2 className="text-lg font-medium text-gray-900">How should we connect?</h2>

                                <p className="mt-1 text-sm text-gray-600">Select how you'd like to connect:</p>

                                {/* Radio Button Options */}
                                <div className="flex justify-between mt-4">
                                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input
                                            id="radio-email"
                                            type="radio"
                                            value="Email"
                                            name="connection"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="radio-email" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    </div>
                                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input
                                            id="radio-phone"
                                            type="radio"
                                            value="Phone"
                                            name="connection"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="radio-phone" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                                    </div>
                                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input
                                            id="radio-linkedin"
                                            type="radio"
                                            value="LinkedIn"
                                            name="connection"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            onChange={handleOptionChange}
                                        />
                                        <label htmlFor="radio-linkedin" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">LinkedIn</label>
                                    </div>
                                </div>

                                {/* Input Field */}
                                <div className="mt-6">
                                    <InputLabel htmlFor="connectionDetail" value="Provide Details" />

                                    <TextInput
                                        id="connectionDetail"
                                        type="text"
                                        name="connectionDetail"
                                        value={data.connectionDetail}
                                        onChange={(e) => setData('connectionDetail', e.target.value)}
                                        className="mt-1 block w-full"
                                        placeholder={`Enter your ${selectedOption}...`}
                                    />

                                    <InputError message={errors.connectionDetail} className="mt-2" />
                                </div>

                                {/* Buttons */}
                                <div className="mt-6 flex justify-end">
                                    <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                                    <PrimaryButton className="ms-3" disabled={processing}>
                                        Submit
                                    </PrimaryButton>
                                </div>
                            </form>
                        </Modal>
                    </div>
                </dl>
            </div>
        </div>
    );
}
